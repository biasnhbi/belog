---
title: eclipse创建meven项目
date: 2021-05-23 11:05:34
tags: 编程学习
categories: 编程后端

---

这里不说eclipse和maven的安装与配置,主要来记录eclipse如何创建一个maven项目

# eclipse的设置

在window下拉框的选值中选择`Preferences`选项，即可进入设置菜单，如下图所示。![shezhi](/asset/shezhi.png)

在左侧找到maven选项，点击下拉箭头，选择`User Settings`选项。可见到如下页面![shezhi (2)](/asset/shezhi (2).png)

在`Global Settings`中选择maven安装文件夹中放在conf文件夹的`Settings.xml`文件。

# **检查镜像库**

在`window`选项的下拉框中，选择`Show View`中的`Other`，点击![镜像库](/asset/镜像库.png)

然后选择Maven中的`Maven Repostitories`![image-20210523112730017](/asset/image-20210523112730017.png)

之后就能看到在`settings.xml`中设置的镜像了![镜像库 (3)](/asset/镜像库 (3).png)

# 在eclipse创建Maven项目

在`File`菜单中选择`New`，之后选择`Maven Project`![创建项目](/asset/创建项目.png)

勾选`Create a simple project(skip archetype selection)`[跳过骨架选项]![image-20210523114507146](/asset/image-20210523114507146.png)

PS:如果是javaweb项目不要勾选，选择org.apache.maven.archetype.maven-![image-20210523120121110](/asset/image-20210523120121110.png)

输入以下信息![image-20210523115215306](/asset/image-20210523115215306.png)

创建成功![image-20210523115313723](/asset/image-20210523115313723.png)

# 创建web项目时遇到的问题

1.在通过maven创建web项目时，出现`The superclass "javax.servlet.http.HttpServlet" was not found on the Java Build Path`错误![image-20210523164140437](/asset/image-20210523164140437.png)

解决方法：

1. 项目右键，选择`Build Path`中的`Configure Build Path`![image-20210523164250406](/asset/image-20210523164250406.png)
2. 点击之后会进入`Java Build Path,`然后点击`Add Library`![image-20210523164523493](/asset/image-20210523164523493.png)
3. 进入`Add Library`后选择`Server Runtime`![image-20210523164723097](/asset/image-20210523164723097.png)
4. 选择服务器容器,没有的需要自行添加![image-20210523164840560](/asset/image-20210523164840560.png)
5. 然后错误消息就会消失，至此大功告成

# **meven中，一些项目文件夹的作用**

![image-20210523172025667](/asset/image-20210523172025667.png)

![image-20210523172406637](/asset/image-20210523172406637.png)

<font color='red'>PS：index.jsp是运行web程序时首次访问的网页,URL中不需要加入文件名</font>

# **eclipse创建meven父子项目**

1. 首先得创建一个普通的meven项目作为父项目,与`在eclipse创建Maven项目`中创建普通项目的步骤一致。
2. 创建一个meven module项目，作为子项目，与`在eclipse创建Maven项目`步骤一致，只是选择`New`之后是选择`Maven module`

<font color='red'>PS:父项目创建时,打包形式需要选择pom,不然后面的子项目不可创建</font>

