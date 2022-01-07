---
title: javaweb笔记之meven安装及使用
date: 2021-05-22 16:16:56
tags: 学习
categories: 编程后端

---

# **meven是什么**

meven是项目架构管理工具，是管理和导入jar包的。

# **meven的核心思想**

约定大于配置。

meven规定好了如何编写java项目，要按照这个规定来，不要违反

# **安装meven**

下载地址:[Maven – Download Apache Maven](http://maven.apache.org/download.cgi)

![meven下载](/asset/meven下载.png)

下载完解压即可：

## 目录详解

bin目录是执行文件

boot是启动所需jar包

conf是启动所需配置

lib是依赖所需的jar包

## settings.xml文件中各个元素基本作用

pluginGroups是查件组，可以放插件

proxies用来配置不同的代理

servers配置服务器的一些服务

localRepository是设置本地仓库的路径

mirrors是配置镜像的，下载完需要配置国内的镜像

- 可配置阿里云镜像，详细配置为

  ```xml
  <mirror>
          <id>alimaven</id>
          <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
   <mirrorOf>,!jeecg,!jeecg-snapshots</mirrorOf>
      </mirror>
  ```

  

## meven环境变量配置

## ![meven环境变量](/asset/meven环境变量.png)

在系统变量配置MAVEN_HOME和M2_HOME

- MAVEN_HOME设置为MAVEN文件夹的地址；
- M2_HOME设置为MAVEN文件夹中bin文件夹的地址。

在path变量中要设置%MAVEN_HOME%\bin地址

设置完成后需要在命令提示符上输入mvn -v验证是否安装并配置成功，安装并配置成功会显示maven地址。![maven版本](/asset/maven版本.png)

# **在maven建立本地仓库**

在localRepository元素中输入自定的仓库文件夹路径即可