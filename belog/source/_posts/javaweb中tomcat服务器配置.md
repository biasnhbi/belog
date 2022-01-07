---
title: tomcat服务器配置
date: 2021-05-19 21:54:51
tags: 学习
categories: 编程后端
---

此文章内容来自于B站视频汇总

# 1.安装

tomcat安装包在网上下载即可，解压即可用。这里不赘述，这里主要使用

# 2.tomcat文件的配置

tomcat的根目录有这几个文件夹，他们有不同的功能

![image-20210519220917217](source\asset\image-20210519220917217.png)

- bin文件夹存放着打开，关闭服务器的脚本文件
- conf为服务器的配置文件
- lib为服务器所依赖的jar包
- logs为日志文件
- temp文件是缓存文件，暂时不必理会（反正我现在也不知道有啥用）
- webapps是存放网站的

## bin文件夹

在bin文件夹中有四个文件

![image-20210519220154694](/asset/image-20210519220154694.png)

- 文件名为shutdown的是关闭服务器的脚本文件
- 文件名为shartup的是开启服务器的脚本文件
- 文件后缀名代表了不同的开启方式
  - bat文件是windows系统的打开文件
  - sh文件是liunx系统的打开文件

文件不可使用的原因可能有

1. java环境配置不正确，脚本文件会根据环境配置寻找java环境。

## conf文件夹

conf文件夹中，有一个server.xml文件

![image-20210519221946037](/asset/image-20210519221946037.png)

他是服务器核心配置文件，其中下面这段代码可以更改启动的端口号

```xml
<Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
```

port为端口号，可更改，最好不要与其他应用冲突，常见端口号有：

- tomcat默认端口号：8080
- mysql端口号：3306
- http：80
- https：443

下面的代码可以配置主机的名称

```xml
<Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
```

- name为服务器名称
- appBase为网站应用存放地址

# 3.一个问题

网站是如何进行访问的：

1. 输入域名，回车
2. 检查本机的host文件有无对应的映射
   1. 有就直接返回对应的ip的值，不管他是否存在
   2. 没有就在dns服务器上查找域名，dns服务器存放着全世界所有的ip地址，找的到就返回域名页面，找不到就报错。

# 4.网站发布

1. 在webapps中新建一个文件夹，作为网站的项目目录，文件名为项目名
2. 将网站页面以及资源放到文件夹内
3. 启动tomcat后，在网址后面填写上文件夹名，默认会访问到文件夹中的命名为index的文件（注意：ROOT文件夹是默认文件夹，不需要在网址后面填写文件夹名）

网站应该有的结构

```
--webapps ##tomcat服务器web目录
  --ROOT  ##网站默认网站项目目录
  --xxx  ##自己设置的网站目录
    --WEB-INF
      --classes  ##java程序
      --lib  ##web应用程序依赖的jar包
      --web.xml  ##网站配置文件
    --index.html  ##默认首页
    --static  ##资源文件
      --css
      --js
      --img
    --...
```

