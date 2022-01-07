/*
 
 作业：天气预报：
   功能点：
   1. 点击回车查询天气
   2. 渲染天气：友好的显示 ganmao? 显示出昨日天气？显示风力？
   3. 将页面做成自己的天气预报？
   
  
  步骤：
   1.引入vue.js axios.js
   2.调试API地址:postman/chrome  ,json: {k:v}
   
  http://wthrcdn.etouch.cn/weather_mini?city=%E6%B7%B1%E5%9C%B3
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息
  
   3. v-model 双向绑定  v-for 遍历    {{}}    []   @keyup.enter  @click


  
  
  
  
  
  */

//new vue
var app = new Vue({
	el: "#app", // #id 挂载点   
	data: { //变量
		weather: "",
        ws:[],
        tip:""
	},
	methods: { //方法
		f1: function() {
             console.log(this.weather);
			 axios.get("https://wthrcdn.etouch.cn/weather_mini?city="+this.weather)
			 .then(response=>{
				 console.log(response);
				 console.log(response.data.data.wendu);
				 console.log(response.data.data.yesterday.fx);
				 console.log(response.data.data.forecast[0].type);
				 console.log(response.data.data.forecast);
				 this.ws=response.data.data.forecast; //箭头函数 this
				 this.tip=response.data.data.ganmao;
			 }) 
		},
		f2:function(name){
			this.weather=name;
			this.f1();
		}






	}
})
