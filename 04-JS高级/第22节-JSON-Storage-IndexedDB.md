# JSON
## 什么是 json
json 是一种非常重要的数据(文件)格式，是一种可以在服务器和客户端之间传输的数据格式。

## 怎么使用 json
1. JSON的顶层支持三种类型的值:
    简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型
    对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；
    数组值：数组的值可以是简单值、对象值、数组值；
```js
// 简单值
123
"aaa"

// 对象值
{
  "name": "jsdevin",
  "age": 18,
  "friend": {
    "name": "ddd"
  }
}

// 数组值
[
  123,
  "aaa"
  {
    "name": "jsdevin"
  }
]
```

## json 序列化 （JS复杂类型 <-> json 字符串）
1. stringify方法：将JavaScript类型转成对应的JSON字符串
2. parse方法：解析JSON字符串，转回对应的JavaScript类型
```js
const obj = {
  name: 'devin'
}

// 1. 将js中的对象类型转换为json中的字符串类型
const objString = JSON.stringify(obj)
localStorage.setItem('info', objString) // localStorage.setItem(key,value)：将value存储到key字段

// 2. 获取json字符串，然后将之转换为对象
// localStorage.getItem(key):获取指定key本地存储的值 
const itemString = localStorage.getItem("info") 
const info = JSON.parse(itemString)
console.log(info) 

// 运行结果： {name: 'devin'}
```

3. Stringify 的参数 **replace**。JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，如果指定的 replacer 是数组，则可选择性地仅包含数组指定的属性
![](https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122123982.png)

4. Stringify的参数 **space** 。 Stringify的第三个参数是 space。
```js
const obj = {
  name: 'devin'
}

const objString = JSON.stringify(obj, null, 2)
console.log(objString) 

// 结果： {"name": "devin"}
```

如果对象本身包含toJSON方法，那么会直接使用toJSON方法的结果: 

```js
const obj = {
  name: 'devin', 
  toJSON: function() {
    return "dddd"
  }
}

// 将js中的对象类型转换为json中的字符串类型
const objString = JSON.stringify(obj, null, 2)
console.log(objString)  // "dddd"
```

5. parse方法。JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122136782.png"/>

6. 影响: 使用JSON序列化，我们生成的新对象和之前的对象并不是同一个对象，相当于是进行了一次深拷贝。
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122139136.png"/>

# Storage
## 什么是 Storage
1. WebStorage 要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式:
   - localStorage：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留
   - sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122219030.png"/>

## localStorage 和 sessionStorage的区别
1. 关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除
2. 在页面内实现跳转，localStorage会保留，sessionStorage也会保留
3. 在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留

## Storage常见的方法和属性
1. Storage.length：只读属性。返回一个整数，表示存储在Storage对象中的数据项数量
2. Storage.key()：该方法接受一个数值n作为参数，返回存储中的第n个key名称
3. Storage.getItem()：该方法接受一个key作为参数，并且返回key对应的value； 
4. Storage.setItem()：该方法接受一个key和value，并且将会把key和value添加到存储中。如果key存储，则更新其对应的值；
5. Storage.removeItem()：该方法接受一个key作为参数，并把该key从存储中删除；
6. Storage.clear()：该方法的作用是清空存储中的所有key

# IndexDB
## 认识indexedDB
1. indexedDB 是什么
  我们能看到DB这个词，就说明它其实是一种数据库（Database），通常情况下在服务器端比较常见；  
  在实际的开发中，大量的数据都是存储在数据库的，客户端主要是请求这些数据并且展示；  
  有时候我们可能会存储一些简单的数据到本地（浏览器中），比如token、用户名、密码、用户信息等，比较少存储大量的数据；  
  那么如果确实**有大量的数据需要存储**，这个时候可以选择使用IndexedDB 
2. IndexedDB是一种底层的API，用于在客户端存储大量的结构化数据。
   它是一种事务型数据库系统，是一种基于JavaScript面向对象数据库，有点类似于NoSQL（非关系型数据库）
   IndexDB本身就是基于事务的，我们只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列事务即可

## indexDB 的连接数据库
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122247892.png"/>

## IndexedDB的数据库操作
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122248180.png"/>

# Cookie
## 认识Cookie
1. Cookie（复数形态Cookies），类型为“小型文本文件，某些网站为了辨别用户身份而存储在用户本地终端
（Client Side）上的数据。浏览器会在特定的情况下携带上cookie来发送请求，我们可以通过cookie来获取一些信息

2. Cookie总是保存在客户端中，按在客户端中的存储位置，Cookie可以分为内存Cookie和硬盘Cookie
    - 内存Cookie由浏览器维护，保存在内存中，浏览器关闭时Cookie就会消失，其存在时间是短暂的
    - 硬盘Cookie保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理

3. 如果判断一个cookie是内存cookie还是硬盘cookie呢？
    - 没有设置过期时间，默认情况下cookie是内存cookie，在关闭浏览器时会自动删除
    - 有设置过期时间，并且过期时间不为0或者负数的cookie，是硬盘cookie，需要手动或者到期时，才会删除
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122233463.png"/>

## cookie常见的属性
1. cookie的生命周期： 默认情况下的cookie是内存cookie，也称之为会话cookie，也就是在浏览器关闭时会自动被删除。我们可以通过设置expires或者max-age来设置过期的时间。
    - expires：设置的是Date.toUTCString()，设置格式是;expires=date-in-GMTString-format
    - max-age：设置过期的秒钟，;max-age=max-age-in-seconds (例如一年为60*60*24*365)
2. cookie的作用域：（允许cookie发送给哪些URL）
    - Domain：指定哪些主机可以接受cookie。如果不指定，那么默认是 origin，不包括子域名。如果指定Domain，则包含子域名。例如，如果设置 Domain=mozilla.org，则 Cookie 也包含在子域名中（如developer.mozilla.org）
    - Path：指定主机下哪些路径可以接受cookie。例如，设置 Path=/docs，则以下地址都会匹配：```/docs``` 、 ```/docs/Web/```、 ```/docs/Web/HTTP```

## 客户端设置cookie
1. js直接设置和获取cookie：```console.log(document.cookie)```
2. 这个cookie会在会话关闭时被删除掉：
```js
document.cookie = "name=devin"
document.cookie = "age=18"
// 设置过期时间就是本地cookie，不设置就是内存cookie
```
3. 设置cookie，同时设置过期时间（默认单位为秒数）```document.cookie = "name=devin;max-age=10"```

学习自 coderwhy !!