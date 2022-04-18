---
title: JS高级(ES6+)
date: 2021-09-26 17:17:24
categories: 前端三件套
tags: HTML+CSS+JavaScript
---

# JS进阶知识(ES6+)

##### 数据类型
* 知识点
 ![](https://api2.mubu.com/v3/document_image/1620638167770b5e2.jpg)
* **第一问常出现在面试题中**
* 解释undefined
  * var a；
  * console.log(a); //undefined
* 解释null
  * var a = null；
  * console.log(a); //null

##### 数据、变量、内存
* 知识点一
 ![](https://api2.mubu.com/v3/document_image/16206408602485840.jpg)
 ![](https://api2.mubu.com/v3/document_image/16206408683441075.jpg)
* 相关问题
 ![](https://api2.mubu.com/v3/document_image/162069593668988fe.jpg)
 ![](https://api2.mubu.com/v3/document_image/1620696885955c608.jpg)
 ![](https://api2.mubu.com/v3/document_image/1620701006495cfd0.jpg)
  * [最后一张图的解析](https://www.cnblogs.com/bigsoft-185025529/articles/10164275.html)
  * 对象名 = { 属性...}；该语句会创建一个对象，每创建一个对象就会产生一个新的地址值，使得指针改向，指向那个新的地址值
  * 最后一条语句结果是13
  * fn2函数里创建新的obj对象后，在函数内就成了局部变量，调用完之后立刻销毁，对a无影响。
* 知识点二
 ![](https://api2.mubu.com/v3/document_image/16207049061749ac7.jpg)
* [解析](https://www.cnblogs.com/bigsoft-185025529/articles/10164275.html)
* 举例结果：3 Tom
 ![](https://api2.mubu.com/v3/document_image/1620704147712ccd6.jpg)
  * 函数内 a = a+1，理解为创建了一个新的对象a。类似于a={属性1，属性....}
* 知识点三
 ![](https://api2.mubu.com/v3/document_image/162070484850219a0.jpg)

##### 对象
* 知识点
 ![](https://api2.mubu.com/v3/document_image/16207055905410fa0.jpg)
 ![](https://api2.mubu.com/v3/document_image/16207056043415d49.jpg)
* 一些注意点
 ![](https://api2.mubu.com/v3/document_image/1620705919216d60d.jpg)

##### 函数
* 知识点一 *函数介绍*
 ![](https://api2.mubu.com/v3/document_image/1620715012562e494.jpg)
* 知识点二 *回调函数*
 ![](https://api2.mubu.com/v3/document_image/1620717218322bd33.jpg)
* 知识点三 *立即执行函数*
 ![](https://api2.mubu.com/v3/document_image/1620717999180ef65.jpg)
 ![](https://api2.mubu.com/v3/document_image/1620718004287fcba.jpg)
  * 立即执行函数里面的内容只能通过 window.$ 绑定函数来传输出去。
* 知识点四 *this*
 ![](https://api2.mubu.com/v3/document_image/16207221302098d75.jpg)

##### 原型对象_原型链_面试题
* 原型对象
  * 在HBuild中弄过来，之前学的很详细。
* 显式原型和隐式原型
  * 显式原型prototype：构造函数和function声明函数中才有
  * 隐式原型__proto__：在实例中才有
  * 知识点
   ![](https://api2.mubu.com/v3/document_image/1620883973668f1c2.jpg)
  * 知识点讲解
   ![](https://api2.mubu.com/v3/document_image/1620883998303a204.jpg)
  * 用内存来辅助理解
   ![](https://api2.mubu.com/v3/document_image/1620884604938758c.jpg)
  * 通过实例调用原型例题中，找test()方法，先在实例对象中找，找不到再去实例对象的隐式原型中找。

##### 原型链
* 原型链是什么：我们把__proto__ 与prototype 的链条关系称为“原型链”
 ![](https://api2.mubu.com/v3/document_image/1620915067284ca71.jpg)
* [原型链的详细介绍](https://zhuanlan.zhihu.com/p/35790971)
* 原型链的终点：构造函数的原型的原型为null时，到达终点。Object.prototype.__proto__ === null
 ![](https://api2.mubu.com/v3/document_image/1620925094575d9e0.jpg)
  * 构造函数是Foo(),Object()
  * 实例对象是f1，f2
  * 实例对象.__proto__ = 构造函数.prototype
  * 这里的Object指function声明的函数，只有它有prototype。
* 属性添加读取问题
  * 知识点
   ![](https://api2.mubu.com/v3/document_image/1620924114523bcc6.jpg)
  * 代码运行结果
   ![](https://api2.mubu.com/v3/document_image/1620924198693e655.jpg)
  * 总结：读取属性才用到原型链，设置属性不需要。
* 探索instanceof
  * 这个不重要。
   ![](https://api2.mubu.com/v3/document_image/1620926501363117d.jpg)
* 原型面试题
  * 图一 ：1，undefined，2，3
   ![](https://api2.mubu.com/v3/document_image/1620955327695a2f2.jpg)
  * A.prototype={n=2,m=3}是将一个新的对象的地址值赋值给A.prototype。即图中与❌相反的箭头。
  * 题二：a() 报错 a() b()
   ![](https://api2.mubu.com/v3/document_image/1621299320586c998.jpg)
  * 解决方法：
   ![](https://api2.mubu.com/v3/document_image/162130024375289ad.jpg)
  * 题中的f.a()相当于上图中的f1.a()
  * 题中的F.a()相当于上图中的Foo.a()
  * 反向的箭头不能通过；有null优先执行输出null。

##### 执行上下文和执行上下文栈
* 变量提升
 ![](https://api2.mubu.com/v3/document_image/162130093536137fa.jpg)
* 变量声明提升
 ![](https://api2.mubu.com/v3/document_image/1621300996839ee77.jpg)
  * 解析：在fn函数体内，在console语句之前有隐藏的var a声明变量a，但是还没赋值，到后面的var a=4 才赋值。故console语句返回的说undefined
* 函数声明提升
 ![](https://api2.mubu.com/v3/document_image/1621301546170ef92.jpg)
  * 只有用函数声明创建的函数对象，才能实现函数提升。
* 全局执行上下文
 ![](https://api2.mubu.com/v3/document_image/162130744772576f5.jpg)
  * 其实就是在基础js教程中说的全局变量和局部变量。
* 全局执行上下文栈
 ![](https://api2.mubu.com/v3/document_image/1621308245664ffa8.jpg)
  * 先执行后移除：先执行上下文创建的对象，后移除。（如左上角图。先执行的放在下面，后执行的放在上面，当移除对象时，先移除较上的）
* 面试题
* 题一
 ![](https://api2.mubu.com/v3/document_image/1621308909584de96.jpg)
 ![](https://api2.mubu.com/v3/document_image/1621308942456223a.jpg)
  * 解析递归执行顺序：蓝线所示
   ![](https://api2.mubu.com/v3/document_image/1621308977529ba2b.jpg)
  * 先执行后移除（先压栈后出栈）
* 题二
 ![](https://api2.mubu.com/v3/document_image/1621309699143a3ca.jpg)
* 题三
 ![](https://api2.mubu.com/v3/document_image/16213095003838ac5.jpg)
  * c = 1 使得 c 最后不是函数，不能调用c(2)，上面用function创建c等于白忙活，无用，所以报错了

##### 分号的生存
  * 什么情况可以不加，什么情况必须加
   ![](https://api2.mubu.com/v3/document_image/16207228357270f2a.jpg)
  * 括号开头的前一句要加分号，其它不用加。举例：立即执行函数的前一句要加分号。