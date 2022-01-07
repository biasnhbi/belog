---
title: redis中string类型的命令
date: 2022-01-07 13:51:45
tags: 学习
---

# redis中string类型的命令

## set  \<key>  \<value> 

- 功能：在数据库中添加键值对
- `key`：键名
- `value`：键值
- `expiration EX seconds`：超时秒数（可填，默认永久）
- `PX millisec`：超时毫秒数（可填，默认永久）
- 无论数据库中是否存在新建键值对，使用set命令都能新建键值对，原有的会被覆盖
- `expiration EX seconds`与`PX millisec`互斥

## get \<key>

- 功能：在数据库中查找指定键的值
- `key`：键名
- 注意：`get *`不能获取所有键值对，需要使用`keys *`

## append  \<key>  \<value>

- 功能：在指定键值对中，在值的末尾添加上给定的`value`值
- `key`：键名
- `value`：添加值

## strlen \<key>

- 功能：获取指定`key`的长度
- `key`：键名

## setnx \<key> \<value>

- 功能：在`key`==不存在==时，新建新的key
- `key`：键名
- `value`：键值

### 上面所有命令的使用示例

![image-20220107183203150](image-20220107183203150.png)

## incr \<key>

- 功能：指定`key`的值自增1
- `key`：键名
- 注意：`key`中==值的内容==必须为数字

## decr \<key>

- 功能：指定`key`的值自减1
- `key`：键名
- 注意：`key`中==值的内容==必须为数字

### 上述代码示例

![image-20220107182620099](image-20220107182620099.png)

## incrby \<key> \<increment>

- 功能：指定`key`的值自增指定`increment`值
- `key`：键名
- `increment`：自增值
- 注意：`key`中==值的内容==必须为数字
- 该操作为原子性操作(过程中出错，则全部出错)

## decrby \<key> \<decrement>

- 功能：指定`key`的值自减指定`decrement`值
- `key`：键名
- `decrement`：自减值
- 注意：`key`中==值的内容==必须为数字
- 该操作为原子性操作(过程中出错，则全部出错)

### 上述命令使用示例

![image-20220107184246345](image-20220107184246345.png)

## getrange \<key> \<start> \<end>

- 功能：获取指定位置的值，获取位置包括起始位置`start`和终止位置`end`
- `key`：键名
- `start`：起始位置
- `end`：终止位置

## setrange \<key> \<offset> \<value>

- 功能：从指定的起始位置开始，替换指定`key`中的值
- `key`：键名
- `offset`：起始位置
- `value`：替换值

### 上述命令使用示例

![image-20220107184759755](image-20220107184759755.png)

## mset \<key1> \<value1> \<key2> \<value2> ......

- 功能：创建多个键值对
- `keyx`：键名
- `valuex`：键值
- 与set一样，无论数据库中是否存在新建键值对，使用set命令都能新建键值对，原有的会被覆盖

## mget \<key1> \<key2> ......

- 功能：获取多个键值对的值
- `keyx`：键名

## msetnx \<key1> \<value1> \<key2> \<value2> ......

- 功能：创建多个键值对
- `keyx`：键名
- `valuex`：键值
- 与setnx一样，如果数据库中存在键值对，则全部键值对的创建都会失败，遵从原子性

## 上述命令使用示例

![image-20220107221341685](image-20220107221341685.png)

## setex \<key> \<second> \<value>

- 功能：创建一个带有过期时间的键值对
- key：要创建的键名
- second：过期时间（以秒计算）
- value：键值

## getset \<key> \<value>

- 功能：覆盖并返回旧的键值对的值
- key：要覆盖的键名
- value：新的键值

### 上述命令的使用示例

![image-20220107222502358](image-20220107222502358.png)

<font style=color:red>其中`ttl <key>`为显示键值对的过期时间</font>