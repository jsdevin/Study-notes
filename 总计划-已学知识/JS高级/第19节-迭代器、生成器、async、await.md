# 迭代器、生成器、async、await

# 迭代器

## 什么是迭代器
通俗点说，迭代器就是一个帮助我们对某个数据结构（比如数组）进行遍历的工具。实质上，迭代器是一个具体的对象，并且这个对象需要实现```迭代器协议```。 **实现迭代器协议，就是要实现它的一个next() 函数** 

### next() 介绍
1. next() 函数。 它的参数可以 0 个或 1 个，它的返回值是一个包含```done```属性和```value```属性的对象。（这两个属性很重要）
2. done(Boolean) 属性。 判断是否耗尽元素（是否迭代完毕）。如果没有迭代完毕，Boolean 值为false, 如果迭代完毕， Boolean 值为true.
3. value 属性。迭代器获取到的数据。这里任何东西都可以放。
- 实现一个迭代器对象的代码演示
```js
const arr = ['a', 'b', 6]
let index = 0 // 这个index是为后面遍历作准备的

const arrIterator = { // 创建一个专属的迭代器对象
  // 迭代器对象要实现迭代器协议，也就是实现next()函数
  next: function() {
    if(index < arr.length) {
      return { // next() 函数的返回值是一个包含done属性和value属性的对象
        done: false, 
        value: arr[index++]
      }
    }else {
      return {
        done: true,
        value: undefined
      }
    }
  }
}

console.log(arrIterator.next()) // {done: false, value: 'a'}
console.log(arrIterator.next()) // {done: false, value: 'b'}
console.log(arrIterator.next()) // {done: false, value: '6'}
console.log(arrIterator.next()) // {done: true, value: undefined}
```

## 可迭代对象
迭代器对象终究是太麻烦，所以引入了新的东西 -> 可迭代对象。
1. 可迭代对象的概念：
当一个对象实现可迭代协议的时候，它就是一个可迭代对象。这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 ```Symbol.iterator``` 访问该属性

代码演示：
```js
const info = {
  arr: ['a', 'b', 6],

  [Symbol.iterator]: function() { // 实现可迭代协议，不可迭代对象info转换为可迭代对象
    let index = 0
    return {
      next: () => {
        if(index < this.arr.length) { // 箭头函数的this绑定的是父级作用域的
          return { // next() 函数的返回值是一个包含done属性和value属性的对象
            done: false, 
            value: this.arr[index++]
          }
        }else {
          return {
            done: true,
            value: undefined
          }
        }
      }
    }
  }
}

for(const i of info) { // info 实现了[Symbol.iterator]方法，才能成为可迭代对象，才能使用 for-of。不实现该方法这里会报错
  console.log(i)
}
// a
// b
// 6
```

## 原生的迭代器对象
所谓原生的迭代器对象，就是已经实现了可迭代协议，并且是JS的内置对象，直接就能使用for - of 方法的对象。
- String、Array、Map、Set、arguments对象、NodeList集合

## 迭代器中断时的监听
迭代器在某些情况下会在没有完全迭代的情况下中断, 比如遍历的过程中通过break、continue等， 如果我们想要监听中断的话，可以添加return() 方法

代码演示：
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310204199.png"/>
</center>

执行结果：
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310206156.png"/>
</center>

## 迭代器其它东西
**需要用时再深入学**
1. 自定义类的迭代

# 生成器
1. 生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执
行等。```生成器是一种特殊的迭代器```
2. 生成器函数也是一个函数，但是和普通的函数有一些区别
   1. 首先，生成器函数需要在function的后面加一个符号：*
   2. 其次，生成器函数可以通过yield关键字来控制函数的执行流程：
   3. 最后，生成器函数的返回值是一个Generator（生成器）：

代码演示：
```js
function* foo() {
  const value1 = 100 
  console.log(value1)  
  yield value1

  const value2 = 200 
  console.log(value2) 
  yield // 这里没有传值，会返回undefined
  
  const value3 = 300
  console.log(value3)  
  yield value3

  console.log('函数执行结束了')
}

const generator = foo() // 生成一个生成器

// 调用next() 可以执行函数中的东西； 如果不希望next返回的是一个undefined，这个时候我们可以通过yield来返回结果
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
```
结果：
<center><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310217984.png"/></center>

## return 函数

可以通过return函数给生成器函数传递参数，return传值后这个生成器函数就会结束，之后调用next不会继续生成值了

代码演示：
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310226955.png"/>
</center>

运行结果：
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310228032.png"/>
</center>

## 生成器的其它东西
**需要用时再深入学**
1. 通过 next() 传值
2. 抛出异常 – throw函数
3. 替代迭代器
4. 自定义类迭代 – 生成器实现
5. 异步处理
6. 自动执行generator函数

# async 异步函数
1. async 关键字用于声明一个异步函数
2. async 异步函数可以有很多中写法
```js
  async function foo1() {}

  const foo2 = async function() {}

  const foo3 = async () => {}

  class Person {
    async foo() {}
  }
```
3. 异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行,但是在碰到await关键字时会暂停，在执行完await后面的表达式时，才会继续往下执行
4. 异步函数有返回值时，和普通函数会有区别： 
  情况一：异步函数也可以有返回值，但是异步函数的返回值会被包裹到Promise.resolve中；
  情况二：如果我们的异步函数的返回值是Promise，Promise.resolve的状态会由Promise决定；
  情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定
5. 如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递

# await
1. async 函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的
2. await 关键字有什么特点呢？
   通常使用 await 时后面会跟上一个表达式，这个表达式会返回一个Promise;
   那么 await 会等到Promise的状态变成fulfilled状态(将Promise执行完毕)，之后再继续执行异步函数
3. 如果 await 后面是一个普通的值，那么会直接返回这个值。实质上是调用Promise.resolve(普通值)
4. 如果 await 后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值
5. 如果 await 后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值

# 参考文章
[MDN 的 async](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)  
[MDN 的 await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)  
coderwhy 深入JS高级  
JavaScript 高级程序设计第 4 版 第 7 章  