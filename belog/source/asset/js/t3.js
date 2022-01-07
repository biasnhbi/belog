/*
  我的音乐播放器：
	 1.html/css/images/video   模板 
	 2.javascript:引入 vue.js, axios.js 
	 3.自己JS：
	 
	 扩展接口：https://binaryify.github.io/NeteaseCloudMusicApi/#/
	 
	 

   分析接口说明，怎么送参数，怎么拿数据：	 
	   get  参数 :::::: url?k1=v1&k2=v2&k3=v3
		 post 参数 ::::::  params{k1:v1,k2:v2}
		 
		 网易云音乐 API
			1:歌曲搜索接口 
			https://autumnfish.cn/search?keywords=%E5%A4%A7%E4%B8%AD%E5%9B%BD
				请求地址:https://autumnfish.cn/search
				请求方法:get
				请求参数:keywords(查询关键字)
				响应内容:歌曲搜索结果 模糊查询
				
				
			2:歌曲url获取接口
			https://autumnfish.cn/song/url?id=1340349243
				请求地址:https://autumnfish.cn/song/url
				请求方法:get
				请求参数:id(歌曲id)
				响应内容:歌曲url地址
				
				
			3.歌曲详情获取
			https://autumnfish.cn/song/detail?ids=1340349243
				请求地址:https://autumnfish.cn/song/detail
				请求方法:get
				请求参数:ids(歌曲id)
				响应内容:歌曲详情(包括封面信息)
				
			4.热门评论获取
			https://autumnfish.cn/comment/hot?type=0&id=1340349243
				请求地址:https://autumnfish.cn/comment/hot?type=0
				请求方法:get
				请求参数:id(歌曲id,地址中的type固定为0)
				响应内容:歌曲的热门评论
				
			5.mv地址获取
			https://autumnfish.cn/mv/url?id=1340349243
				请求地址:https://autumnfish.cn/mv/url
				请求方法:get
				请求参数:id(mvid,为0表示没有mv)
				响应内容:mv的地址
				
				
				
		4.写JS-vue		
				1.搜索歌曲  input--v-model,@keyup.enter事件  axios.get(url).then(function) ； response=>数据 ；v-for  数组 遍历
				2.是否显示 mv  图标  mvid==0   v-show(display-true/none-false)/v-if(dom)
				3.音乐播放 audio  设置src, 属性绑定：v-bind:属性="变量"
					4.封面图片  axios.get    设置src, 属性绑定：v-bind:属性="变量"
				5.图片转动  转化成 playing 类 设置  :class="roll?'player_con playing':'player_con'"  
					 百度 audio/video  绑定方法  @play="playfun()" @pause="pausefun()"
				
				
				
				
		5.作业要求：？？？？？？？？
			  完成播放器基本功能，自由发挥扩展
			  显示4个热门搜索
			  显示留言时间
			  显示MV播放
				
				
						
*/

//new vue
var app = new Vue({
	el: "#player",    // #id 挂载点  
	data: {           //变量  this引用
		query: '',
		songs: [],
		url: '',
		picurl: '',
		roll: false,
		hotComments: [],
		vodio: "display: none;",
		mUrl: ""
	},
	methods: {         //方法
		searchMusic: function () {
			//返回结果格式
			axios.get("https://autumnfish.cn/search?keywords=" + this.query)
				.then(response => {
					console.log(response);
					console.log(response.data.result.songs);
					this.songs = response.data.result.songs;
				})
		},

		playsong: function (id) {
			console.log(id);
			//url地址
			axios.get("https://autumnfish.cn/song/url?id=" + id)
				.then(response => {
					console.log(response);
					this.url = response.data.data[0].url;
					console.log(this.url);
				});

			//封面图片
			axios.get("https://autumnfish.cn/song/detail?ids=" + id)
				.then(response => {
					console.log("+++", response);
					console.log(response.data.songs[0].al.picUrl);
					this.picurl = response.data.songs[0].al.picUrl;
				});

			//获取评论
			axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + id)
				.then(response => {
					console.log("-----", response);
					this.hotComments = response.data.hotComments;
				});



		},
		playMV: function (id) {
			//mv地址
			axios.get("https://autumnfish.cn/mv/url?id=" + id)
				.then(response => {
					console.log("-----", response.data.data.url);
					this.mUrl = response.data.data.url;
				})
			this.vodio = "";
		},

		escMv: function () {
			this.vodio = "display: none;";
		}




	}


})
