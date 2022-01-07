---
title: javaweb笔记之http基本理解
date: 2021-05-20 18:55:50
tags: 学习
categories: 编程后端

---

此文章内容来自于B站视频汇总

# HTTP

## 什么是http

http(超文本传输协议)是一个简单的请求-响应协议,它通常运行在TCP协议上

- 文本：heml，字符串...
- 超文本：图片，音乐，视频，定位，视频，小游戏......
- 通过80端口

https：http+ssl，安全的

- 通过443端口

## **两个时代**

1. http1.0
   1. 客户端与web服务器连接后，只能获得一个web资源，然后断开连接
2. http2.0
   1. 客户端与web服务器连接后，可以获得多个web资源

## http请求与响应

- http请求

  - 客户端--发请求（Request）--服务器

  - 浏览器请求体的一些参数说明

    ```
    REquest URL：http://www.xxx.com ##响应地址
    Request Method：GET ##请求方法
    Status Code:200 OK ##请求码
    Remote(远程) Address:111.111.111.111:443 ##远程地址
    ```

  - 请求头

    - 请求方式大致有：GET，POST，HEAD，DELETE，PUT，TRACT...
      - GET：请求所携带的参数比较少，大小有限制，会在浏览器的URL显示出来，高效
      - POST：请求说携带的参数无限制，大小没有限制，会在浏览器的URL显示出来，不高效

  - 消息头

    ```
    Accept：告诉浏览器，网页所支持的数据类型
    Accept-Encoding:支持哪种编码格式 编码格式有:GBK,UTF-8,ISO8859-1,GB2312
    Accept-Language:告诉浏览器,它的语言环境
    Cache-Control:缓存控制
    Connection:告诉浏览器:请求完成后是保持连接还是断开连接
    HOST:主机
    ```

    

- http响应

  - 服务器--响应--客户端

  - 浏览器响应体的一些参数说明

    ```
    Cache-control:private  ##缓存控制
    Connection:keep-Alive(保持连接) ##连接 
    Content-Encoding:gzip ##编码
    Content-type:text/html ##类型
    ```

    

  - 响应体

    ```
    Accept：告诉浏览器，网页所支持的数据类型
    Accept-Encoding:支持哪种编码格式 编码格式有:GBK,UTF-8,ISO8859-1,GB2312
    Accept-Language:告诉浏览器,它的语言环境
    Cache-Control:缓存控制
    Connection:告诉浏览器:请求完成后是保持连接还是断开连接
    HOST:主机
    Location:让网页重新定位
    Refresh:告诉客户端,多久刷新一次
    ```

    

  - 响应状态码

    - 200:请求响应成功
    - 4xx:找不到资源
    - 3xx:请求重定向,到新的地址去
    - 5xx:服务器代码错误，502：网关错误

    

    ## 常见面试题：

    当你的浏览器中地址栏输入地址并回车的一瞬间到页面能够展示出来，经历了什么。

    

    

    

    