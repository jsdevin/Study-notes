---
title: Promise
date: 2021-09-29 09:32:19
categories: Vue
tags: Vue
---
Promise
## Promise 是异步编程的一种解决方案
* 这里是简单的介绍
 ![](https://api2.mubu.com/v3/document_image/1631091868310ecb5.jpg)
 ![](https://api2.mubu.com/v3/document_image/1631091872832f5de.jpg)

## Promise初体验
* 一个resolve()对应一个then()，resolve()是代表函数，实质上还是得靠then()，可以说resolve()是形式函数，then()是执行函数。这样子做的话，会使得逻辑十分清晰，而且可以避免进入回调地狱。
  * 如果是多次嵌套，可以在then()函数中return下一次的new Promise()函数，在then()函数外执行下一次的then()函数。
   ![](https://api2.mubu.com/v3/document_image/0023eced-164e-4e7c-bb12-9716a5292628-11752736.jpg)
* 失败的时候调用reject，reject()对应的函数是catch()
 ![](https://api2.mubu.com/v3/document_image/fd1a8d9d-d728-4489-802b-dbe11c9b6faf-11752736.jpg)

## Promise 三种状态
* 当我们开发中有异步操作时，就可以给异步操作包装一个Promise
* 异步操作之后会有三种状态
  * pending : 等待状态，比如正在进行网络请求，或者定时器没有到时间
  * fulfill : 满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()
  * reject : 拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()。

## Promise 链式调用
* 我们在看 Promise 的流程图时，发现无论是then还是catch都可以返回一个Promise对象
* 所以，我们的代码其实是可以进行链式调用的
* 这里我们直接通过Promise包装了一下新的数据，将Promise对象返回了
  * Promise.resolve() : 将数据包装成Promise对象，并且在内部回调了resolve() 函数
  * Promise.reject() ： 将数据包装成Promise对象，并且在内部回调reject函数
* 原版写法
 ![](https://api2.mubu.com/v3/document_image/811bb4cc-a12d-4058-bf0f-578f4371eec5-11752736.jpg)
* 【简化版一】data代表了第一次setTimeout里面的resolve括号内的内容，后面的Promise.resolve是那一堆的简化写法。
 ![](https://api2.mubu.com/v3/document_image/89dbf3a9-aa96-4bc6-89a6-35bb673c5001-11752736.jpg)
* 【简化版二】在简化版一 的基础上，更加简洁欸，直接把Promise.resolve 省略
 ![](https://api2.mubu.com/v3/document_image/e6f99fc8-5047-444b-b48e-13e3d7f38718-11752736.jpg)
## Promise.all() 解决多次访问问题
![](https://api2.mubu.com/v3/document_image/f227f440-82be-43d2-95f7-95e3194ee907-11752736.jpg)