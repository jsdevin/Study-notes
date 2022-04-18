

# Promise 是异步编程的一种解决方案

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061622797.png" width="60%" height="50%"/>
</div>

<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061622412.png" width="60%" height="50%"/>
</div>

# Promise初体验

- 一个resolve()对应一个then()，resolve()是代表函数，实质上还是得靠then()，可以说resolve()是形式函数，then()是执行函数。这样子做的话，会使得逻辑十分清晰，而且可以避免进入回调地狱。
	- 如果是多次嵌套，可以在then()函数中return下一次的new Promise()函数，在then()函数外执行下一次的then()函数。
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061625623.png" width="60%" height="50%"/>
</div>

	- 失败的时候调用reject，reject()对应的函数是catch()
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061626985.png" width="60%" height="50%"/>
</div>

# Promise 三种状态

- 我们开发中有异步操作时，就可以给异步操作包装一个Promise
- 异步操作之后会有三种状态
	- pending : 等待状态，比如正在进行网络请求，或者定时器没有到时间  
	- fulfill : 满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()  
	- reject : 拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()。

# Promise 链式调用

- 我们在看 Promise 的流程图时，发现无论是then还是catch都可以返回一个Promise对象  
- 所以，我们的代码其实是可以进行链式调用的  
- 这里我们直接通过Promise包装了一下新的数据，将Promise对象返回了  
	- Promise.resolve() : 将数据包装成Promise对象，并且在内部回调了resolve() 函数  
	- Promise.reject() ： 将数据包装成Promise对象，并且在内部回调reject函数
- 原版写法
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061624727.png" width="60%" height="50%"/>
</div>

- 【简化版一】data代表了第一次setTimeout里面的resolve括号内的内容，后面的Promise.resolve是那一堆的简化写法。
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061629306.png" width="60%" height="50%"/>
</div>

- 【简化版二】在简化版一 的基础上，更加简洁欸，直接把Promise.resolve 省略
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061630692.png" width="60%" height="50%"/>
</div>


# Promise.all() 解决多次访问问题


<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061630764.png" width="60%" height="50%"/>
</div>
