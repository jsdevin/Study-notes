---
title: JS基础 扫盲版
date: 2021-09-26 15:25:15
categories: 前端三件套
tags: HTML+CSS+JavaScript
---

# JS基础语法

##### 强制类型转换
* String()
  * 作用：强制其它类型转换为String
  * 使用toString()方法。语法： 要转换的变量.toStrin();
    * var x=12345;
    * y=x.toString(); //将x从Number转换成String
  * 使用String()方法。 语法：String(要转换的变量)；
    * var x=123456;
    * y=String(x); //调用String()方法将x转换成String类型  
* Number()
  * 作用：强制将String转换成Number
  * 使用Number()方法， 语法：Number(要转换的变量)；
    * var x="45678";
    * y=Number(x);
* Boolean()
  * 作用：强制转换Boolean
  * 使用Boolean()方法， 语法：Boolean(要转换的变量)；
    * x=32546;
    * a=Boolean(x);

##### 用户输入类
  * prompth()
    * 键盘输入事件。
    * 语法：prompt("这里控制弹出窗口引导用户从键盘输入文字或数字");

##### 循环类
* while()
  * 先判断条件是否成立，成立了再进行循环。
  * 语法：while(条件){循环的语句}
* do... while()
  * 先循环一次，再判断while的条件是否成立，成立了再进行下一个循环
  * do {循环的语句} while(条件)；

##### 枚举类
* in 运算符
  * 通过in运算符检查对象是否含有指定的属性，含有就返回true , 不含有就返回false.
  * 语法: "属性名" in 对象;
* for···in 枚举方法
  * 语法：for（var 变量 in 对象）{语句} ;
  * 花括号中的语句执行多少次，对象中就含有几个属性。
    ![](https://api2.mubu.com/v3/document_image/6ed9fd27-18f4-445a-a91f-75eade10eec3-11752736.jpg)

##### 数组类 --增删改
* push()
  * 该方法可以在数组对象最后加上一个或者多个元素，并返回新的数组长度。
  * 语法: 数组名.puch("白龙马","唐僧")；
* pop()
    * 该方法可以删除数组最后一个元素，并将这个被删掉的元素返回
    * 语法：数组名.pop();
* shift()
  * 可以删除数组的第一个元素，并将被删掉的这个元素作为返回值返回。
  * 语法：数组名.shift();
* unshift()
  * 在数组开头依次添加一个或者多个元素，并将新的数组长度返回
  * 添加元素之后，索引会重新对应元素。原来的索引不会对应原来的元素。
  * 语法： 数组名.unshift("白龙马","唐僧");
* slice()
  * 其作用是从数组中提取指定索引范围的元素
  * 该方法不会改变原本的数组，而是将提取的元素封装到新的数组中
  * 语法： 数组名.slice(x,x+n)
    * 提取元素中包含索引为x的元素，但是不包含索引为x+n的元素。
    * x+n可以为负数，是负几就是倒数第几个，比如-1就是倒数第一个，-2就是倒数第二个。
* splice()
  * 其作用是删除数组中指定索引范围的元素
  * 使用该方法会影响到原数组，会将指定的元素从原数组中删除，然后将被删除的元素作为返回值返回。
  * 语法： 数组名.splice(开始删除位置的索引,删除的数量,"添加在x前面的内容")
* concat()
  * concat()可以将多个数组连接起来，也可以将数组和子字符串连接起来，封装到新的数组中
  * 而且该方法不会对原数组产生影响。
  * 语法：arr1.concat(arr2,arr3,"这是第一个字符串","这是第二个，可以无限加");
* join()
  * 该方法可以将一个数组转换成一个字符串，并且不会对数组产生影响，以字符串作为返回值
  * 在join()方法中，可以指定任意东西作为数组元素的连接符。语法: join("任意东西")
  * 连接符必须使用双引号引着，不使用就默认是用逗号连接。
  * 结果：孙悟空-猪八戒-蜘蛛精-唐僧
    ![](https://api2.mubu.com/v3/document_image/4b8bb1f2-9089-430d-a1c4-f6d312835c56-11752736.jpg)
* reverse()
  * 作用是颠倒数组中的元素顺序。.
  * 结果： {"0":"唐僧","1":"蜘蛛精","2":"猪八戒","3":"孙悟空","length":4}
     ![](https://api2.mubu.com/v3/document_image/332a9bf2-4dd4-4acc-afca-fc1edc424c01-11752736.jpg)

##### 时间类
* getDate()
  * 获取当前日期对象的日。（获取实参的具体是哪一日）
  * var d2 = new Date("03/09/2021 14:23:53");
  * var dg = d2.getDate();
  * console.log(dg); //9
* getDay()
  * 获取当前日对象是周几.0表示周日，以此类推至6表示周六。
  * var d2 = new Date("03/09/2021 14:23:53");
  * var dg2 = d2.getDay();
  * console.log(dg2); //2
* getTime()
  * 获取当前对象的时间戳
  * 时间戳指的是从1970年1月1日 0时0分0秒开始到当前日期所花费的毫秒数（1s = 1000ms）
  * 计算机底层在保存时间时使用的都是时间戳

##### 数字运算类
* Math
  * Math和其它对象不同，它不是一个构造函数。
  * 它属于一个工具类不用创建对象，它里面封装了数学运算相关的属性和方法。
  * 比如：Math.PI表示圆周率。
* abs()
  * 可以用来计算一个数的绝对值。语法：Math.abs(数字)
  * console.log(Math.abs(2.3)); //2.3
  * Math.ceil()
  * 可以对一个数进行向上取整，小数位只要有值就会自动进1
  * console.log(Math.ceil(4.3)); //5
  * Math.floor()
  * 可以对一个数进行向下取整，小数部分会被舍弃掉
  * console.log(Math.floor(4.3)); //4
* Math.round()
  * 可以对一个数进行四舍五入取整。
  * console.log(Math.round(4.3)); //4
  * console.log(Math.round(4.6)); //5
* Math.random()
  * 可以用来生成一个0-1的随机数。
  * console.log(Math.random()); // 所有的其它范围都是在这个基础上变换来的。
  * 比如生成一个0-10的数。
    * console.log(Math.random()/*10);
  * 生成一个0-x的数
    * console.log(Math.random()/*x);
  * 高级使用
    * 生成1-10
      * console.log(Math.random()/*9+1);
    * 生成一个x-y之间的随机数
      * console.log(Math.random()/*(y-x)+x);
* Math.max() 、 Math.min()
  * var m1 = Math.max(10,31,41,53,36);
  * var n1 = Math.min(10,31,41,53,36);
* Math.pow(x,y)
  * 返回x的y次幂
  * console.log(Math.pow(5,3)); //125
* Math.sqrt()
  * 开平方运算。
  * console.log(Math.sqrt(81)); //9

##### 字符串类
* 注意事项
  * 创建一个字符串 var std = "hello"; 
  * 凡是字符串的方法，使用的时候都要在前面加上字符串的名字。语法：字符串名.方法()；
  * 在底层，字符串是以字符数组的形式保存的。上述字符串的保存结果是["h","e","l","l","o"]
* charAt()
  * 可以返回字符串中指定索引的字符。
    * var std = "hello";
    * var result = std.charAt(3);
    * console.log(result); // l
* charCodeAt()
  * 获取指定位置字符的字符编码（Unicode编码）
    * var std = "hello";
    * var result = std.charCodeAt(3);
    * console.log(result); //108 （l在Unicode编码表中的编码是108）
* String.fromCharCode()
  * 可以根据字符编码去获取字符
    * var result = String.fromCharCode(108);
    * console.log(result); // l
* concat()
  * 可以用来连接两个或多个字符串。作用和 + 一样（拼串）
    * var std = "hello";
    * var result = std.concat("你好","这是测试");
    * console.log(result); //hello你好这是测试
* indexof()
  * 该方法可以检索一个字符串是否含有指定的内容
  * 如果字符串含有该内容，则会返回指定内容第一次出现的索引 （因为有可能出现多次）
  * 如果没有找到指定的内容，就会返回-1
    * var std = "hello";
    * var result = std.indexOf("e"); //非数字类型的引用一定要有引号。。
    * console.log(result); //1
  * 可以利用第二个参数，指定开始找的起始位置。（找的时候包含这个位置）
    * var std = "hello";
    * var result = std.indexOf("e",3);
    * console.log(result); //-1
* lastIndexOf()
  * 该方法的用法和indexof()一样，不同的是indexif是前面开始往后面找,而lastIndexOf是从后面开始往前面找。
  * 但不管是从前面往后面找，还是从后面往前面找，每个数对应的索引都是固定的。
  * var std = "hello";
  * var result = std.lastIndexOf("e"); //1. 虽然找的方向不同，但每个数对应的索引都是固定的，如果无重复，返回值可能不会发生改变
  * var result2 = std.lastIndexOf("o"); //4.
  * console.log(result);
  * console.log(result2); 
  * 也可以指定开始查找的位置
  * var result3 = std.lastIndexOf("o",3); //-1
  * console.log(result3); 
* slice()
  * 可以从字符串中截取指定的内容，不会影响原字符串，而是将截取的内容返回。
  * 参数
    * 第一个参数：表示开始的索引（截取内容包括开始的位置）
    * 第二个参数：表示结束的索引（截取内容不包括结束的位置）
    * 如果省略第二个参数，则会截取到后面所有的。
    * 也可以传递一个负数作为参数，不过负数的话要从后面开始算起。
  * var str = "wshd9h0hanfafeq";
  * var result = str.slice(2,5);   // 字符串.方法();
  * console.log(result); //hd9
* substring()
  * 可以用来截取一个字符串，作用也slice()类似。
  * 参数
    * 第一个：开始截取位置的索引（包括开始位置）
    * 第二个：结束位置的索引（不包括结束位置）
  * 不同的是这个方法不能接受负数作为参数。
  * 如果传递了一个负数，则会默认变成 0
  * 而且解析器会自动调整参数的顺序，小的在前面，大的在后面。
  * var str = "wshd9h0hanfafeq";
  * var result = str.substring(2,-3);  // 字符串.方法（）;
  * console.log(result); //ws
* substr()
  * 用来截取字符串
  * 参数
    * 第一个参数表示开始截取的位置。（包括这个位置）
    * 第二个参数表示截取的长度。也表示截取的个数。
  * var str = "wshd9h0hanfafeq";
  * var result = str.substr(2,4);
  * console.log(result); //hd9h
* split()
  * 可以将一个字符串拆分为一个数组。
  * 参数
    * 需要一个字符串作为参数，解析器将会根据数组内的该字符串所处位置进行拆分。
  * var str = "abc,bks,hsn,hij,bcd";
  * var result = str.split("b");
  * console.log(result);
  ![](https://api2.mubu.com/v3/document_image/3eb7dcd8-a17d-47db-b18e-2171af146878-11752736.jpg)
  * 如果传递一个空串作为参数，则会将每个字符都拆分为数组的一个元素
  * var result1 = str.split("");
  * console.log(result1);
  ![](https://api2.mubu.com/v3/document_image/e13b3ede-f1b6-4d35-97f7-e092d1d5fd12-11752736.jpg)
* toUpperCase()
  * 将一个字符串转换为大写并返回。
  * var str = "sdbgndnfegrt";
  * var result = str.toUpperCase();
  * console.log(result); //SDBGNDNFEGRT
* toLowerCase()
  * 将一个字符串转换为小写并返回。
  * var str = "SDBGNDNFEGRT";
  * var result = str.toLowerCase();
  * console.log(result); ///sdbgndnfegrt

##### 正则表达式类
* 创建正则表达式的对象。
  * 语法：
  * var 变量 = new RegExp("正则表达式","匹配模式");
  * var reg = new RegExp("a");
  * var reg = new RegExp("a"); 这个正则表达式可以来检查一个字符串是否含有a,
  * 在构造函数中可以传递一个匹配模式作为第二个参数, 可以是：
    * i 表示忽略大小写
    * g 表示全局匹配模式
* 正则表达式的方法
  * test()
    * 使用这个方法可以用来检查一个字符串是否符合正则表达式的规则。
    * 如果符合就返回true,否则就返回false.
* 正则表达式的语法
  * 使用字面量来创建正则表达式
    * 语法： var 变量 = /正则表达式/匹配模式;
    * 区别：
      * 使用字面量的方式创建更加简单
      * 使用构造函数的方式创建更加灵活.
    * var reg = /a/i;
    * console.log(reg.test("absdsafaassd")); //true //这个test后面的参数是字符串。
* 正则表达式的小技巧
  * (1) 检查一个字符串中是否由 a 或 b
    * 使用 | 表示或者的意思。
    * var reg = /a|b/;
    * console.log(reg.test("abjobdu9gefipnav")); //true
  * 特殊标识符
    * []里的内容也是或的关系
    * [ab] == a|b
    * [a-z] == 任意小写字母
    * [A-Z] == 任意大写字母
    * [A-z] == 任意字母
    * [^ ] == 除了
  * (2)检查一个字符串中是否含有 abc 后 adc 或 aec
    * var reg = /a[bde]c/;
    * console.log(reg.test("bvidauacnadcojdbaaecoeb")); //true
    * 检测[^ ] ^除了语法
      * var reg1 = /[^ab]/ //除了ab以外还有东西。
      * console.log(reg1.test("ab279我是")); //true /*/
* 正则表达式的使用
  * (1) 利用正则表达式更好地帮助拆分字符串
    * split()
      * 可以将一个字符串拆分为一个数组。
      * 方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串
      * 根据任意字母将字符串拆分。
      * var str = "1d2d3f4h4b3b333h3b35b3b224n2f2"
      * var result = str.split(/[A-z]/);
      * console.log(result);
      ![](https://api2.mubu.com/v3/document_image/50f602df-6547-4ded-b199-e7986cf9911c-11752736.jpg)
  * (2)search()
    * 可以搜索字符串中是否含有指定内容
    * 如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
    * 它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串。
    * search()只会查找第一个，即使设置全局匹配也没用。
    * var str = "hello abd hei dav abd";
    * var result = str.search(/abd/);
    * console.log(result); //6 abd最先出现的索引是6
  * (3)match()
    * 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
    * 默认条件下我们的match只会找到第一个符合要求的内容，找到以后就停止检索
    * 我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容。
    * 可以为一个正则表达式设置多个匹配模式，且顺序无所谓
    * match（）会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果。
    * var str = "1a2b3c4d5e6f7g8h9j10k";
    * var result = str.match(/[A-z]/g); //A-z 必须要由[]括着才表示任意的字母.[]表示任意的什么什么
    * console.log(result);
    ![](https://api2.mubu.com/v3/document_image/65925703-5887-4ba2-b3da-9fe99b405564-11752736.jpg)
  * (4)replace()
    * 可以将字符串中指定内容替换为新的内容
    * 参数：
      * 第一个参数 表示可以接受一个正则表达式作为参数
      * 第二个参数 表示新的内容。
    * 默认只会替换第一个
    * var str = "1a2b3c4d5e6f7g8h9j10k";
    * var result = str.replace(/[A-z]/gi,","); //正则表达式不需要括号括着
    * console.log(result);
    ![](https://api2.mubu.com/v3/document_image/ce74f8c5-f73b-4f8d-b901-bc52d3ea981e-11752736.jpg)
  * (5)split()
    * 可以将一个字符串拆分为一个数组
    * 方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串
    * 这个方法即使不指定全局匹配，也会全都拆分。
    * 根据任意字母拆分
    * var str = "1a2b3c4d5e6f7g8h9j10k";
    * var result = str.split(/[A-z]/); //正则表达式不需要括号括着
    * console.log(result);
    ![](https://api2.mubu.com/v3/document_image/189ea26f-3699-40b5-91e9-b3de393da119-11752736.jpg)
  * 量词
    * 通过量词可以设置一个内容出现的次数。
    * 量词只对它前面的一个内容 或者 字母 起作用
    * {n} 表示前面一个内容或者字母重复n次
    * {m,n} 表示重复 m 到 n 次
    * {m, } 表示重复 m 次以上
    * `+` 至少一个 等价于 {1, }
    * `*` 0个或多个
    * ？0个或1个 等价于 {0,1}

##### DOM类 
* getElementsByTagName()
  * 方法，返回当前节点的指定标签名的后代节点
* childNodes()
  * 属性，表示当前节点的所有子节点
* firstChild()
  * 属性，表示当前节点的第一个子节点
* lastChild()
  * 属性，表示当前节点的最后一个节点。
* querySelector()
  * 获取指对应id的元素。
  * 语法：document.querySelector("/#demo");
* appendChild()
  * 在列表的后面添加项目。
  * 语法: 父元素节点.appendChild(子元素节点);
* insertBefore()
  * 在指定的节点前面插入新的节点
  * 语法：父节点元素.insertBefore(新节点元素，旧节点元素);
* repalceChild()
  * 可以使用指定的子节点替换子节点；
  * 语法：父元素节点.repalceChild(新节点元素，旧节点元素)；
* removeChild()
  * 删除特定子节点
* 获取元素当前的样式值
* (1) 语法：元素.currenStyle.样式名
  * 它可以用来读取当前元素正在显示的样式，如果没有设置到该样式，就获取默认值
  * currenStyle只有iE浏览器支持，可怜
* (2)getComputedStyle()
  * 而在其它浏览器中，可以使用 getComputedStyle方法 来获取当前元素的样式
  * 这个方法可以直接使用，前面不需要加元素,需要两个参数：
    * 第一个：要获取样式的元素
    * 第二个：目前写上null
  * 该方法会返回一个对象，对象中封装了当前元素对应的样式
  * 可以通过 对象.样式名 来读取样式
  * 如果获取的样式没有设置，则会获取到真实的值，而不是默认值
  * 比如:没有设置width，它不会返回auto，而是会放回一个实时屏幕大小的值
  * 该方法不支持iE8
  * var obj = getComputedStyle(box1,null);
  * alert(obj.width);
* (3)创建一个函数，使它无论在什么浏览器中都能获取指定元素当前的样式。
  ![](https://api2.mubu.com/v3/document_image/586d27ec-544b-440a-ada8-4e911d7b6e07-11752736.jpg)
* 长度尺寸问题
* clientWidth属性、clientHeight属性
  *  这两个属性可以获取元素的可见宽度和高度。
  *  这些属性都是不带px的，返回都是一个数字，可以直接用于计算。
  *  会获取元素的宽度和高度，包括内容区和内边距
  *  这些属性都是只允许读取，不允许修改的。
* offsetWidth属性 、offsetHeight属性
  *  获取元素的整个宽度和高度，包括内容区、内边距、边框
  *  其它特点和cliendWidth、cliendHeight一样
* offsetParent属性
  *  可以获取当前元素的定位父元素，注意这里的父元素必须要是有定位的且是最近的那个
  *  会获得离当前元素最近的开启了定位的祖先元素
  * 如果所有的祖先元素都没有开启定位，则会返回body.
* offsetLeft属性
  *  当前元素相对于其定位父元素的水平偏移量
* offsetTop属性
  *  当前元素相对于其定位父元素的垂直偏移量。
* scrollWidth 和 scrollHeight
  *  可以获取元素整个滚动区域的宽度和高度
* scrollLeft属性、scrollTop属性
  *  可以获取滚动条滚动的距离
* 当满足scrollHeight - scrollTop == clientHeight 时，
  * 说明垂直滚动条滑到底了
* 当满足scrollWidth - scrollLeft == clientWidth 时，
  * 说明水平滚动条滑到底了
* scrollHeight 是长屏幕的固定长度，这是定量
* clientHeight 是文本对象的固定长度，这是定量
* scrollTop 是文本对象滚动的距离，这是变量
* 当scrollHeight - scrollTop == clientHeight，说明文本对象已经滚动到底了，此时scrollTop是最大值，不能再发生变化
* onscroll
  * 该事件会在元素的滚动条滚动时触发
* disabled属性可以设置一个元素是否禁用
  * 如果是true,就表示禁用，
  * 如果是false,就表示不禁用。
* 事件对象
  * onmousemove
    * 该事件将会在鼠标于元素中移动是被触发
  * 事件对象的兼容性问题
    *  事件对象定义一个形参event就好，在IE8以上的浏览器中这个形参会由浏览器赋值。
    * 在IE8及以下爱的浏览器中，event作为window的属性，浏览器不会赋值给event
  * 解决兼容性问题的方法：
    * 多写一条语句 if(!event){ event = window.event; }
    * 或者 event = event || window.event
  * clientX 方法
    *  可以获取到鼠标指针的水平坐标
  * clientY 方法
    *  可以获取到鼠标指针的竖直坐标

##### BOM类 --- DOM、BOM 不完整，后续补充