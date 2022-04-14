# arguments 

## 什么是arguments ？

- arguments 是一个类数组。这意味着它不是数组类型，而是对象类型。
- arguments 只有数组中的length、数组下标等特性，而没有数组的一些方法
- arguments 在什么位置？
	- 在函数的参数那里，是内置的且是隐藏的。如果函数没有定义参数，而外面调用函数的时候又传输值进来，那么就会封装到arguments类数组中。
	```JavaScript
	function foo(隐藏的arguments类数组) {
	  ...
	}
	
	//如果执行foo(a,b,c), 那么结果就是arguments = [a,b,c]
	```
	

## 为什么要有arguments ？

- 这是ES6之前的语法了，其实ES6之后推荐使用的箭头函数，箭头函数是没有内置arguments的。ES6之后就不再推荐使用带有arguments的函数了。
	- 如果我们在箭头函数中使用arguments，它会去上层作用域查找，如果上层作用域中也没有，就会去上上层作用域查找，直到找到为止。注：最外层作用域也就是全局作用域是有arguments的。
- 但是我们还是得知道为什么ES6之前要有arguments这种类数组。
	- 原因就是为了应付处理参数传输多了的情况。
	- 比如定义的函数只有两个形参，那么应该一次只能传输两个值，但是如果一次传输了四个呢，多了的怎么办？
	- 为了解决这个问题，引进arguments，这时候多了的就会存进arguments.
	```JavaScript
	function fn(x,y) {
	  ...
	}
	
	fn(10,20,30,40) //执行结果：x=10,y=20,arguments = [30,40]
	
	
	```
	

## 怎么运用arguments ？

- 将arguments转换为Array
	- 1）遍历然后用push封装到一个新的数组中
	- 2）Array.prototype.slice.call(arguments)
	- 3）[].slice.call(arguments)
	- 4）Array.from(arguments)
	- 5）**[ ...arguments ]**  解构方法！最好用的是这个，建议直接使用这个

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/20220112174938.png """ width="60%" height="50%"/>
</div>

# 纯函数

- 函数式编程中有一个非常重要的概念叫纯函数

## 什么是纯函数？

### 概念

- 确定的输入，就一定会产生确定的输出。
- 函数在执行的过程中，没有任何副作用。

### 副作用的理解

- 在执行一个函数时，除了返回函数值之外，还对调用函数产生了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储等，就叫产生了副作用。
- 后果：副作用容易产生非常多的bug。

### 例子

#### 例子一

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/20220112213417.png """ width="60%" height="50%"/>
</div>

- slice是纯函数，因为它不会对原函数造成造成影响；而splice不是纯函数，因为它对原数组进行了修改，当下一次输入同样的输入时，不能产生同样的输出。

#### 其它例子

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/20220112214338.png """ width="60%" height="50%"/>
</div>

sum是纯函数；add不是纯函数，因为中途foo被改变了，那么同样的输入就得不到同样的输出。printInfo是纯函数。

## 为什么使用纯函数？

纯函数在函数式编程中非常重要，因为我们编写的时候保证了：“同样的输入，必定会得到同样的输出；没有副作用！”。这样子，我们在封装他们的时候，就没有后顾之忧，不需要考虑什么全局变量发生改变等内容。

 







