# JS 模块化
## 什么是模块化
1. 到底什么是模块化、模块化开发呢？
    事实上模块化开发最终的目的是将程序划分成**一个个小的结构**
    这个结构中编写属于自己的逻辑代码，**有自己的作用域**，不会影响到其他的结构
    这个结构可以将自己希望暴露的**变量、函数、对象**等导出给其结构使用，
    也可以通过某种方式，导入另外结构中的变量、函数、对象等
上面说提到的结构，就是模块；按照这种结构划分开发程序的过程，就是模块化开发的过程。

## 为什么需要模块化开发
1. 没有模块化带来了很多的问题：比如命名冲突的问题。在A文件中创建的变量，如果在B文件中重新创建赋值，可能会发生不可预料的后果
```js
// A.js
var flag = true

// B.js 
// 在不知道A文件存在flag变量的情况下，重新创建flag变量，并且赋值了相反值
var flag = false 

// main.js 
// 如果main.js 同时引入了A.js和B.js 
if(flag) { // flag 会带来不可预料的后果
  ...
}
```

## CommonJS、AMD、 CMD
CommonJS 可能还有点用，AMD、CMD 已经淘汰了。现在都是在用 ESMoudle, 这里就直接跳到ESMoudle，需要再回头学CommonJS

## ESMoudle
1. ES Module模块采用export和import关键字来实现模块化：
   export负责将模块内的内容导出
   import负责从其他模块导入内容

2. 采用ES Module将自动采用严格模式：use strict

3. export 导出方式很多， import 导入方式也很多，这里只记录推荐使用的。
```js
// 1. 将所有需要导出的标识符，放到export后面的 {}中. 这里的 {} 不表示对象，
export {
  name,
  age
}

// 2. 这里的{}也不是一个对象，里面只是存放导入的标识符列表内容
import {标识符列表} from '模块
```

4. export和import可以结合使用。好处： 将暴露的所有接口放到一个文件中，这样方便指定统一的接口规范，也方便阅读
```js
export { sum as B} from './A.js'

```
5. default 默认导出。 ```default export {} ```. 注意：在一个模块中，只能有一个默认导出（default export）

### ES Moudle 的解析流程（ES Moudle原理）
1. [ES Module是如何被浏览器解析并且让模块之间可以相互引用的呢？](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
2. **简单介绍**。 ES Module的解析过程可以划分为三个阶段：
   - 阶段一：构建（Construction），根据地址查找js文件，并且下载，将其解析成模块记录（Module Record）
   - 阶段二：实例化（Instantiation），对模块记录进行实例化，并且分配内存空间，解析模块的导入和导出语句，把模块指向对应的内存地址
   - 阶段三：运行（Evaluation），运行代码，计算值，并且将值填充到内存地址中
![](https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204121944884.png)

## 包管理工具详解
npm、 yarn、 cnpm、 npx 
这部分的笔记太杂，了解就行了，直接下一个，需要使用时回头再看。
