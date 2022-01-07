---
title: 创建vue项目
date: 2021-06-26 12:29:58
tags: 学习

---

创建一个Vue项目之前,需要先安装环境。

# 安装node.js

![image-20210530103231467](D:\vue\html\belog\source\asset\image-20210530103231467.png)

1. 选择LTS版本下载

2. 安装过程一路next即可，有问题移步百度（反正我没问题）

3. 在命令行输入node -v和npm -v查看版本。

   ![](D:\vue\html\belog\source\asset\image-20210530103806861.png)

   这样子就是安装成功了。

# 安装Vue环境

vue环境不只是js那么简单！

1. 在命令行输入npm install -g cnpm --registry=https://registry.npm.taobao.org 安装npm
2. 输入cnpm i -g @vue/cli安装vue-cli的依赖包
3. 输入vue ui即可打开可视化页面。

# 创建并运行Vue项目

1. 在命令行输入vue ui打开可视化页面。

2. 在页面的创建选项，在红线划分区域选择心爱的文件目录。![image-20210530104717301](D:\vue\html\belog\source\asset\image-20210530104717301.png)

   <font color='red'>建议直接在文件管理器上复制目录,张贴在红线划分区域</font >

3. 请为您心爱的项目取个可爱的文件名,

   <font color='red'>现在只需要创建文件名即可,其他啥都不要动哦亲</font >

4. 在预设界面选择手动配置亲

   ![image-20210530105159907](D:\vue\html\belog\source\asset\image-20210530105159907.png)

   <font color='red'>选择红线画了个小圈圈的地方哦亲</font >

5. 请选择Roouter和Vuex选项哦

   Linter / Formatter要去掉哦

   ![image-20210530105452434](D:\vue\html\belog\source\asset\image-20210530105452434.png)

   <font color='red'> 选项的基本解释</font>
   <font color='red'> ( ) Babel //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。</font>

   <font color='red'> ( ) TypeScript// TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行</font>

   <font color='red'> ( ) Progressive Web App (PWA) Support// 渐进式Web应用程序
   此条详细在：https://baike.baidu.com/item/PWA/22378897?fr=aladdin</font>

   <font color='red'> ( ) Router // vue-router（vue路由）</font>

   <font color='red'> ( ) Vuex // vuex（vue的状态管理模式）</font>

   <font color='red'> ( ) CSS Pre-processors // CSS 预处理器（如：less、sass）</font>

   <font color='red'> ( ) Linter / Formatter // 代码风格检查和格式化（如：ESlint）</font>

   <font color='red'> ( ) Unit Testing // 单元测试（unit tests）</font>

   <font color='red'> ( ) E2E Testing // e2e（end to end） 测试</font>

6. 进入配置页面后请记得打开这个选项![image-20210530110605524](D:\vue\html\belog\source\asset\image-20210530110605524.png)

7. 点击创建项目后，选择【创建项目，不保存预设】![image-20210530111153548](D:\vue\html\belog\source\asset\image-20210530111153548.png)

8. 运行创建的项目，按照图片顺序点击即可![image-20210530111523053](D:\vue\html\belog\source\asset\image-20210530111523053.png)

9. 点击启动app，即可进入项目![image-20210530111613953](D:\vue\html\belog\source\asset\image-20210530111613953.png)

   就完成了，没啥可说了

