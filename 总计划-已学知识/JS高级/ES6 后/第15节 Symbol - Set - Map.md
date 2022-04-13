

# Symbol

## Symbol是什么？ 

- Symbol是ES6中新增的一个基本数据类型，翻译为符号。
- Symbol即使多次创建值，它们也是不同的：Symbol函数执行后每次创建出来的值都是独一无二的。

```JavaScript
const s1 = Symbol()
const s2 = Symbol()

//s1、s2是使用Symbol函数创建的两个独一无二的变量
```


## 为什么需要Symbol ？

- 我们知道，对象的属性名是字符串形式，很容易造成属性名的冲突。
- 比如原来有一个对象，我们希望在其中 **添加一个新的属性和值** ，但是我们在不确定它原来内部有什么内容的情况下，很容易造成冲突，从而覆盖掉它内部的某个属性。
- Symbol就是为了解决上面的问题，用来生成一个独一无二的值。
	- Symbol值是通过Symbol函数来生成的，生成后可以作为属性名。
	- 也就是在ES6中，对象的属性名可以使用字符串，也可以使用Symbol值。

## Symbol作为属性名

- 我们也可以在创建Symbol值的时候传入一个描述description：这个是ES2019（ES10）新增的特性。

```JavaScript
const s1 = Symbol('这里的引号内是写description的部分的')
const s2 = Symbol('这里是引号内是写description的部分的')
```


- 使用Symbol在对象中表示唯一的属性名

```JavaScript
const s1 = Symbol('属性1')
const s2 = Symbol('属性2')

// 写法一：属性名赋值
const obj = {}
obj[s1] = 'aaa'
obj[s2] = 'bbb'

// 写法二：定义字面量时直接使用
const info = {
  [s1]: 'ccc'
  [s2]: 'ddd'
}

//写法三： 略。

```


## 相同值的Symbol

- 前面我们讲Symbol的目的是为了创建一个独一无二的值，那么如果我们现在就是想创建相同的Symbol应该怎么 来做呢？
	- 我们可以使用Symbol.for方法来做到这一点
	- 并且我们可以通过Symbol.keyFor方法来获取对应的key

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56d9166324974dda8f15e1e32761b3b6~tplv-k3u1fbpfcp-zoom-1.image "")

# Set、WeakSet

- 在ES6之前，我们存储数据的结构主要有两种：数组、对象。
- 在ES6中新增了另外两种数据结构：Set、Map，以及它们的另外形式WeakSet、WeakMap。

## 什么是Set

- Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是 元素不能重复.
- 创建Set我们需要通过Set构造函数。也就是使用new Set() 来创建
- 我们可以发现Set中存放的元素是不会重复的，那么Set有一个非常常用的功能就是给数组去重：

```JavaScript
const arr = [10, 20, 30, 30, 50, 10]
const set1 = new Set(arr)

console.log(set1) //{10, 20, 30, 50} // 注意：new Set() 结果产生的是一个对象

console.log([...set1]) //[10, 20, 30, 50] //可以用展开语法来将它转换为数组
```


## Set的常见方法

1. add(value)：添加某个元素，返回Set对象本身
2. delete(value)：从set中删除和这个值相等的元素，返回boolean类型
3. has(value)：判断set中是否存在某个元素，返回boolean类型
4. clear()：清空set中所有的元素，没有返回值
5. forEach(callback, [, thisArg])：通过forEach遍历set
6. size()：返回Set中元素的个数

```JavaScript
const set1 = new Set()

// 1.add(value) 添加元素
set1.add(10)
set1.add(20)
set1.add(30)
set1.add(50)
console.log(set1) // {10, 20, 30, 50}

// 2.delete(value) 删除和value值相等的元素
set1.delete(10)
console.log(set1) //{20, 30, 50}

// 3.has(value) 判断是否含有某个元素
console.log(set1.has(20)) //true

// 4.clear() 清空所有元素
set1.clear()
console.log(set1) // 空

// 5.forEach()
const set2 = new Set([11, 22, 33])
set2.forEach(item => {
  console.log(item) 
})  //结果：11,22,33

// 6.size() 返回 Set 中元素的个数
console.log(set2.size) // 3

```


## 什么是WeakSet

- 和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构
- 那么和Set有什么区别呢？
	- 区别一：WeakSet中只能存放 **对象** 类型，不能存放基本数据类型；
	- 区别二：WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收
- WeakSet不能遍历
	- 因为WeakSet只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。
	- 所以存储到WeakSet中的对象是没办法获取的

## WeakSet的常见方法

1. add(value)：添加某个元素，返回WeakSet对象本身
2. delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型
3. has(value)：判断WeakSet中是否存在某个元素，返回boolean类型

```JavaScript
const wset = new WeakSet()

// 1.add(value) 添加元素
const obj1 = {name: 'devin'}
const obj2 = {name: 'dddd'}

wset.add(obj1)
wset.add(obj2)
console.log(wset) //{{name: 'dddd'}, {name: 'devin'}}

// 2.delete(value) 删除元素
wset.delete(obj2)
console.log(wset) //{{name: 'devin'}}

// 3.has(value) 判断是否含有某个元素
console.log(wset.has(obj1)) //true
console.log(wset.has(obj2)) //false
```


# Map、WeakMap

## 什么是Map

- Map是另一个新增的数据结构，用于存储 **映射** 关系。
- 但是我们可能会想，在之前我们可以使用对象来存储映射关系，他们有什么区别呢？
	- 事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）；
	- 某些情况下我们可能希望**通过其他类型作为key**，比如对象，这个时候会自动将对象转成字符串来作为key；
- 那么我们就可以使用Map

## Map的常用方法

1. set(key, value)：在Map中添加key、value，并且返回整个Map对象
2. get(key)：根据key获取Map中的value
3. has(key)：判断是否包括某一个key，返回Boolean类型
4. delete(key)：根据key删除一个键值对，返回Boolean类型
5. clear()：清空所有的元素
6. forEach(callback, [, thisArg])：通过forEach遍历Map
7. size：返回Map中元素的个数

```JavaScript
// Map是可以将对象作为key的

const obj1 = {name: 'devin'}
const obj2 = {name: 'dddd'}
const map = new Map()

// 1.set(k, v) 添加元素
map.set(obj1, '这里填写的是obj1的value值')
map.set(obj2, '这里填写的是obj2的value值')
console.log(map) // {{name: 'devin'} => 这里填写的是obj1的value值, {name: 'dddd'} => 这里填写的是obj2的value值}

// 2.get(key) 根据key获取Map中的value
console.log(map.get(obj1)) //这里填写的是obj1的value值

// 3.has(key) 判断是否含有某个key
console.log(map.has(obj1)) //true

// 4.delete(key) 根据key删除一个键值对
console.log(map)
map.delete(obj2) // {{name: 'devin'} => 这里填写的是obj1的value值, {name: 'dddd'} => 这里填写的是obj2的value值}
console.log(map) // {{name: 'devin'} => 这里填写的是obj1的value值}

// 5.clear() 清空所有元素
map.clear()
console.log(map) //空

// 6.forEach() 遍历 Map
const map2= new Map()
map2.set(obj1, '1111')
map2.set(obj2, '22222')

map2.forEach((item, key) => { // 这里的item会获得value值，key会获得key对象。顺序颠倒了
  console.log(key, item)
})  // 结果：{name: 'devin'} 1111 ; {name: 'dddd'} 22222

// for of 遍历
for(const item of map2) {
  console.log(item[0], item[1]) //item[0] 是key对象，item[1]是value值
} //{name: 'devin'} 1111 ; {name: 'dddd'} 22222

// for of 遍历结合解构
for(const [key,value] of map2) {
  console.log(key, value)
} //{name: 'devin'} 1111 ; {name: 'dddd'} 22222
```


## 什么是WeakMap

- Map类型的另外一个数据结构称之为WeakMap，也是以键值对的形式存在的.
- 那么和Map有什么区别呢？
	- 区别一：WeakMap的key**只能使用对象**，不接受其他的类型作为key；
	- 区别二：WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象；
- WeakMap是不能进行遍历的。因为没有forEach方法，也不支持for of遍历。
- vue3的响应式原理中使用到WeakMap

## WeakMap的常用方法

1. set(key, value)：在Map中添加key、value，并且返回整个Map对象
2. get(key)：根据key获取Map中的value
3. has(key)：判断是否包括某一个key，返回Boolean类型；
4. delete(key)：根据key删除一个键值对，返回Boolean类型

```JavaScript
const obj1 = {name: 'devin'}
const obj2 = {name: 'dddd'}
const weakMap = new WeakMap()

// 1.set(k, v) 添加元素
weakMap.set(obj1, '这里是obj1 的value值')
weakMap.set(obj2, '这里是obj2 的value值')
console.log(weakMap) //{{name: 'dddd'} => 这里是obj2 的value值, {name: 'devin'} => 这里是obj1 的value值}

// 2.get(key) 根据key获取Map中的value
console.log(weakMap.get(obj1)) //这里是obj1 的value值

// 3.has(key) 判断是否含有某个key
console.log(weakMap.has(obj1)) //true

// 4.delete(key) 根据key删除一个键值对
console.log(weakMap) //WeakMap {{name: 'dddd'} => 这里是obj2 的value值, {name: 'devin'} => 这里是obj1 的value值}
weakMap.delete(obj2)
console.log(weakMap) //WeakMap {{name: 'devin'} => 这里是obj1 的value值}
```




