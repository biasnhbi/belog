---
title: springboot链接redis的一些tips
date: 2022-01-17 18:07:19
tags: redis
---

今天做博客项目时，遇到了需要连接redis的情况，当时出现了这个情况。

![image-20220117180932233](image-20220117180932233.png)

简单的说，就是连不进去……

然后一通面向百度编程，找到了问题。

阿里云的安全组忘了设置了……

# 流程

1. 进入工作台，找到安全组。![image-20220117181326054](image-20220117181326054.png)
2. 进入安全组菜单，创建一个安全组（或者在现有的安全组操作）![image-20220117181518024](image-20220117181518024.png)
3. 手动添加或者快速添加一个redis端口，快速添加里有添加redis选项![image-20220117181543077](image-20220117181543077.png)
4. 编辑redis.conf文件中的bind选项，注释掉或者改为0.0.0.0![image-20220117181837863](image-20220117181837863.png)
5. 修改protected-mode为no，关闭保护模式![image-20220117181942550](image-20220117181942550.png)
6. 开启daemonize守护进程模式，允许后台运行![image-20220117182030039](image-20220117182030039.png)

如果是liunx的话，就可以在防火墙操作，可能用得到的命令如下

```xml

1.查看防火墙状态：
firewall-cmd --state 
2.启动防火墙
systemctl start firewalld
3.关闭防火墙
systemctl stop firewalld
4.检查防火墙开放的端口
firewall-cmd --permanent --zone=public --list-ports
5.开放一个新的端口
firewall-cmd --zone=public --add-port=8080/tcp --permanent
6.重启防火墙
firewall-cmd --reload
7.验证新增加端口是否生效
firewall-cmd --zone=public --query-port=8080/tcp
8.防火墙开机自启动
systemctl enable firewalld.service
9.防火墙取消某一开放端口
firewall-cmd --zone=public --remove-port=9200/tcp --permanent
10禁止firewall开机启动
systemctl disable firewalld.service 
```

