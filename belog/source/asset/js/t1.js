/*
 记事本：
  数据存储：数组[]，v-for指令遍历数组 {{模板语言}}文本
  1.新增:@keyup.enter键盘事件,js添加unshift/push,v-model双向绑定
  2.删除：@click,del(index)，函数参数，splice()方法
  3.统计:数组长度 length属性
  4.清空：三种方法清空
  5.隐藏：v-if/v-show(真为show，假就不show) 隐藏
  
  扩展：记录事件(截取)、时间、作者，修改记事本？？？
  
*/

var app = new Vue({
	el: "#todoapp", // #id   
	data: {
		textarrs:["吃饭饭","打球球"],
		time:["2021/4/14下午10:16:03","2021/4/14下午10:16:03"],
		news:"", //与输入框双向绑定
		joker:[]
	},
	methods: {
		add:function(){
			var date=new Date().toLocaleString();
			this.textarrs.unshift(this.news);
			this.time.unshift(this.date);
		},
		//js删除指定数组元素
		del:function(index){
			this.textarrs.splice(index,1);
			this.time.unshift(index,1);
		},
		//改变指定字符
		change:function(index) {
			var trmp=prompt("请输入修改值","");
			this.textarrs.splice(index,1,trmp);
			this.time.splice(index,1,new Date().toLocaleString());
		},
		//js请空数组
		clear:function(){
			this.textarrs=[]
		},
		getjoke:function () {
			axios.get("https://autumnfish.cn/api/joke/list?num=4").then(response => {
				//处理response
				console.log(response.data.jokes);
				this.joker = response.data.jokes;
			})
		}
	}
})