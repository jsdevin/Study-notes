---
title: vue基础
date: 2021-09-28 20:27:27
categories: Vue
tags: Vue
---

# Vue 基础   --总结使用区的详解
##### v-bind、v-on、v-for、v-model
* 作用于内容的指令mustache、v-once、v-html、v-pre、v-cloak
  * mustache指令其实就是最常用的 `{{t}}`
  * v-once指令控制的双大括号的数据只会渲染一次，即不会随着数据的改变而改变。
  * v-html = "属性名"该指令能将传入的html元素正确转义
    * 第一行是无指令控制，第二行是有指令控制
     ![](https://api2.mubu.com/v3/document_image/2bb0a5e8-64ba-4cfa-8bbf-3d3f8ef8fe19-11752736.jpg)
  * v-pre该指令效果是使得 vue 的 `{{属性名}}` 不解析，原封不动直接输出`{{属性名}}`这个原型
  * v-cloak指令联合setTimeout方法能够控制事件延迟发生。
  * 用了箭头函数的知识，后面那个1500是延迟的毫秒数。
   ![](https://api2.mubu.com/v3/document_image/302d9397-3737-4cd8-a756-e25c20fa51da-11752736.jpg)
* v-bind 动态改变属性
  * 语法糖 : 就是指简写模式. v-bind的语法糖是:
  * v-bind动态绑定属性, 注意:这里绑定的是属性
    * 用v-bind指令能使得scr的属性的路径变成一个可改变的变量,它的值一般是由date里面的对象赋值(实际开发中来自于服务器).
     ![](https://api2.mubu.com/v3/document_image/5cd14979-3365-4e87-8d26-17334b9856fa-11752736.jpg)
  * v-bind 动态绑定class名-- `{}`、[]、调用方法
    * 对象方式：class = "`{key1:value1,key2:value2}`" 这里使用的是键值对，通过控制键值对的value值是true还是false，来控制类名key是否调用
    * 数组方式：class = "[ class1,class2,class3 ]" 直接设置类名即可，默认是调用的。这个方法好像没什么优势，毕竟还不如传统方法
    * 方法方式：class = "方法名()" 这里的方法名代表的方法直接在vue的methods中设置即可，语法是x1 : function()`{ //进行相应的操作}`
  * v-bind 动态绑定style属性 --- `{}` 、[]
    * 对象语法 `{}`
      * v-bind:style = "`{font-side:变量1，color:变量2}`"
      * 这里的变量1、变量2是定义在data中的，这样子就可以实现动态控制，不需要写死于标签中。
      * 这种方法下，data中变量1、变量2只需要写css属性的值就行，因为在标签中已经写了属性名
    * 数组语法
      * v-bind:style = "[变量3，变量4]"
      * 这种方法data中的变量3、变量4需要用 `{属性名1：属性值1，属性名2：属性值2，属性名3：属性值3，...}` 这样子来定义。如变量3：`{font-size : "100px"}`
* 计算属性 computed
  * computer和methods的用法一样。一模一样的使用，只是一般来说，属性的计算定义在computed中，方法的计算定义在methods中
   ![](https://api2.mubu.com/v3/document_image/b9ea2997-8f27-48e2-ba81-edca3d84953d-11752736.jpg)
* computed和methods的比较
  * computed的代码执行一次就会进行缓存，当重复调用时，不需要再去执行代码，直接利用缓存即可。
  * methods只能调用一次执行一次，相对较笨所以一般定义属性的话，还是写在computed中好。
* v-on事件监听
  * v-on的语法糖是@
  * v-on的对象一般都是事件，如@click= "del()"
  * 好习惯：methods中的事件调用的时候都带着()
  * v-on的一些修饰符（后缀）
    * .stop 阻止事件冒泡。
      * 使用方法：@click.stop = "btnclick()"，这样子子标签按钮事件触发后，不会冒泡到父元素div
       ![](https://api2.mubu.com/v3/document_image/2fc23ca6-1488-4e5b-af74-d003e41273c1-11752736.jpg)
    * .prevent 阻止默认事件
    * .once 只调用一次，重复调用无效。
    * 使用方法都是@事件.修饰符 = "方法名()"
* v-if 、v-else-if 、v-else
  * 简单，一眼就懂得的东西就不记录笔记了。
   ![](https://api2.mubu.com/v3/document_image/d5c1872b-2210-4f53-9a39-026acc47eed0-11752736.jpg)
  * v-else-if 一般都很少用，因为复杂的运算判断都在methods中实现。直接使用 v-if 和v-else就能满足。
* key 属性可以控制某个元素标签的输入值不能复用
  * 这里的input标签输入的value值，当发生切换的时候，不会保留，会进行清空处理。
   ![](https://api2.mubu.com/v3/document_image/abbe9247-f04e-41c3-9e99-74175238e282-11752736.jpg)
* v-show
  * 直接看，甚至可以不看，因为v-show的功能v-if都有
   ![](https://api2.mubu.com/v3/document_image/328376db-8e10-4c94-865e-8b612d9a9b44-11752736.jpg)
* v-for遍历
  * 遍历数组
    * 简单如斯
     ![](https://api2.mubu.com/v3/document_image/e1d34dad-7309-416e-a6b1-bf286b0512d9-11752736.jpg)
  * 遍历对象
    * 简单如斯
     ![](https://api2.mubu.com/v3/document_image/3d08a66f-984b-419a-9754-41f3090b52bc-11752736.jpg)
* 用v-for结合 :key进行插值---用:key能实现性能优化
  * :key = "item" 中item能和输出的值一一对应。
   ![](https://api2.mubu.com/v3/document_image/5d7688ee-5256-4795-8d76-a6ea4181bfdb-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/8ded884c-dcd3-4689-bfc7-75a4266f34ab-11752736.jpg)
  * 用splice方法进行插值，splice方法本身是用来进行删除的，但是也能用于插值
  * （第一个参数）2表示从第几个索引开始插值，（第二个参数）0 表示删除0个元素，（第三个参数）第三个值表示要插入的值。
    * 第二个参数是可以不为0的，如果不为0，就表示要删除多少项。删除与否不会影响后面的插值操作。
  * 总结
  ![](https://api2.mubu.com/v3/document_image/ce21b40e-04d4-4360-87a3-130f8bd5472a-11752736.jpg)
* v-model双向数据绑定
  * 原理
    * v-model其实原理就是v-bind和v-on的集合，但是一般没人管原理，会用就行。当个记录
     ![](https://api2.mubu.com/v3/document_image/2723e88c-2876-4d8b-b50f-b7becd8cddf2-11752736.jpg)
    * v-bind是绑定属性的，用它来绑定输入框input标签的value属性；v-on是绑定事件的，绑定输入事件，当用户输入时，会使data中的那个接受输入值的变量A发生改变，然后判断变量A 的值和标签中value值是否一致，如果一致则触发v-on，使得input事件执行，实现数据的更新。
  * 单选框、多选框、下拉菜单[Vue.js 表单 | 菜鸟教程 (runoob.com)](https://www.runoob.com/vue2/vue-forms.html)，其实都没什么，就只需要再data中建立一个空属性用于接受就行了。和html中的没有太多差别，就是多了一个v-model用来双向绑定数据而已。
* v-model 的修饰符
 ![](https://api2.mubu.com/v3/document_image/6806260a-4eee-4665-af4e-1d2e1e116106-11752736.jpg)

##### 组件化
* 组件的创建注册与使用
  * 创建 Vue.extend(`{模板}`)
   ![](https://api2.mubu.com/v3/document_image/240d45cf-a270-4839-9915-4cec585d4a0d-11752736.jpg)
  * 注册 Vue.component("自定义的标签名"，组件构造器的名字)
   ![](https://api2.mubu.com/v3/document_image/996e8f42-2e1e-4db2-b4ba-a6311f27ea8e-11752736.jpg)
  * 使用
    * 使用的时候必须在已经挂载vue的标签中，比如下图的 id 为 app 的标签。
     ![](https://api2.mubu.com/v3/document_image/0ed0d1da-4482-446a-ab56-ae1e69b69c67-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/ca1a4858-643a-4afd-bdbb-10579d2c206e-11752736.jpg)
  * 学了后面的组件化语法糖之后，这里的方法就不怎么使用了，但这里的方法时组件化的原理，语法糖只是简化了操作而已。
* 父子组件
  * 如名字，一个父组件，一个子组件。
  * 子组件的创建还是老样子，但是注册的时候，放到父组件的Vue.extend创建中使用 components 方法注册
   ![](https://api2.mubu.com/v3/document_image/d983bda2-9d3b-4a1c-b845-f43f5bddb560-11752736.jpg)
  * 父组件的创建中，要另外添加一个components方法，用于注册子组件（如图），同时要在模板template中，在想要呈现的相应位置中添加组件一自定义的标签`<cpn></cpn>`.
   ![](https://api2.mubu.com/v3/document_image/b9b37755-0a9e-4753-8edd-c059cebe4e1b-11752736.jpg)
  * 父组件的注册可以是全局组件注册，也可以是局部组件注册。
  * 全局组件注册就是直接使用Vue.component()方法。
  * 局部组件就是在vue实例中使用components:`{}` 方法 （new Vue 的地方就是vue实例）
* 组件化的语法糖
  * 全局组件的语法糖 Vue.component('自定义标签名'，`{模板}`)
   ![](https://api2.mubu.com/v3/document_image/0b7989eb-308a-4ca8-ad27-21b42e4eade6-11752736.jpg)
  * 局部组件的语法糖 在script标签的Vue实例中使用components:`{'自定义标签名'：{模板} }`
   ![](https://api2.mubu.com/v3/document_image/04a0aba0-776a-484f-9a33-e133d820e39a-11752736.jpg)
* 模板的分离化
  * 在使用组件化语法糖的基础上，template属性后面`" "`里的模板内容，需要另外在body中创建一个template标签，将`" "`里面的内容放入template标签中。同时需要给template标签设置一个id，然后在template属性后面，引用对应id作为属性值即可实现模板分离化。
   ![](https://api2.mubu.com/v3/document_image/a52aab52-9602-4cb5-83be-4e3528a17eba-11752736.jpg)
* 组件内容 `{{ }}` 的写法  
  * 组件的内容一般来说不会写死，写死就不能实现数据的动态变化了。
  * 和 html 的标签一样，可以使用 `{{ 变量名 }}` 来设置动态内容。但是这个变量必须设置在组件的注册component方法中。
  * 这里的data必须是使用函数，也就是说有返回值，不然当多个对象同时引用一个数据时，会发生同步更新，这一般和开发目的相反，一般都是各自保持不变，只有当需要时才会同步更新数据（这种情况很少）。面试题常见点
   ![](https://api2.mubu.com/v3/document_image/fcd6c5ca-691a-4d63-952e-d7965380e718-11752736.jpg)
* 父子组件的 数据传输 与 相互访问-- 数据传输 props、this.$emit()
  * props父传子
    * props的用法 -- 父子组件的联合使用
     ![](https://api2.mubu.com/v3/document_image/0b1ae913-b190-4b14-8fc6-1dbbfe164f93-11752736.jpg)
    * props的类型 -- 数组、对象
      * 数组
        * 数组里面的是自定义的属性名，v-bind 会在父组件模板的自定义标签中绑定它。然后用父组件的数据赋值，实现父传子
         ![](https://api2.mubu.com/v3/document_image/98958a38-3a54-4e11-bc90-dd9a2a4db0b0-11752736.jpg)
      * 对象
        * 这里的propA、propB、...指的是自定义的属性，也就是被v-bind绑定的那个玩意
         ![](https://api2.mubu.com/v3/document_image/2f73829c-349e-4766-8945-132d2b17fcd4-11752736.jpg)
        * 上面的Number啊，String啊都是传入的数据类型，如果有写到，只能传入这些。同样，type中的值也是，如果有表明，就只能传入对应类型的数据。
        * required为必须属性，如果为 true，就必须要传入该propX对应的数据。
          * 如果没有传入，就会报错，但是其它内容也能正常运行。
           ![](https://api2.mubu.com/v3/document_image/6c8be681-91d9-4dc2-86ec-6d19a853865e-11752736.jpg)
           ![](https://api2.mubu.com/v3/document_image/2b30ca94-d4ee-4368-a615-cf43713fde67-11752736.jpg)
        * default是默认值，当数据传入不成功或者没有对应数据时，就显示默认值。
          * 默认值可以理解为最低级的显示，只有什么都没有时，才会显示出来。
  * this.$emit ('自定义事件'，遍历的参数（方便将数据传出去）)子传父
    ![](https://api2.mubu.com/v3/document_image/3bae8786-0153-4ee1-acc2-88aa22742f7e-11752736.jpg)
  * 父子组件的通信中不能使用驼峰标识，如果需要区别出不能单词，就要修改驼峰式为杆 式。比如cMuvie，就要修改为c-movie.
  * 项目实例：计数器
   ![](https://api2.mubu.com/v3/document_image/5ce34b2e-eec2-4c73-8fe9-0ad98ff3bc27-11752736.jpg)
  * 父子组件之间的访问与获取数据-- this.$refs 、this.$parent
    * 父访问子 this.$refs.xxx.属性
      * 这里的 ref 作用和 id 差不多
       ![](https://api2.mubu.com/v3/document_image/7039124f-8694-4a19-b283-7677a08d1ef6-11752736.jpg)
      * 很少用的一种方法，知道就行。 this.$children
       ![](https://api2.mubu.com/v3/document_image/79af094b-e8d3-48ac-bf4e-c2d0189e4cb5-11752736.jpg)
    * 子访问父 this.$parent、this.$root
      * 在子组件中用 this.$parent 可以直接获取上一级组件的任何数据。
       ![](https://api2.mubu.com/v3/document_image/0b760705-b20f-449c-a01f-ef8733d94c7a-11752736.jpg)
      * 在子组件中用 this.$root可以直接获取根组件（是vue实例那个组件）的任何数据
* 插槽的合理使用 slot
  * 插槽的语法糖是` # `
  ![](https://www.hualigs.cn/image/6163e8527523b.jpg)
  * 位置 --- 放在 template 标签中
    * slot标签直接放置在template标签中
     ![](https://api2.mubu.com/v3/document_image/3c643111-380f-4f68-9404-25221d69a3ea-11752736.jpg)
  * 赋值
    * 自定义值 ---- cpn 标签中
      * 位置：写在自定义的子组件标签中
       ![](https://api2.mubu.com/v3/document_image/fcb6ed51-56ac-4b56-9753-8cb41fdefa57-11752736.jpg)
    * 默认值 ---- slot 标签中
     ![](https://api2.mubu.com/v3/document_image/2b52c04d-9fe0-4b45-a072-3d3fd9442dad-11752736.jpg)
    * 注意：自定义的值优先级大于默认值。
  * 具名插槽的赋值
    * 多个插槽时，要给某一个指定的插槽赋值，我们只需要给slot标签设置name值，然后在子组件cpn标签中绑定slot = 'name的值' 属性就行
    * 想要更改谁就直接绑定它slot标签中的name值。不讲顺序。
     ![](https://api2.mubu.com/v3/document_image/5632b474-7ae9-4525-b7fe-59719174dd95-11752736.jpg)
  * 作用域插槽
    * 作用域插槽 no see
      * 判断data中的 isShow 属性为 true 还是 false.
    * 作用域插槽的使用
     ![](https://api2.mubu.com/v3/document_image/a81b2b46-e6e8-4354-8016-1c280862039e-11752736.jpg)

##### ES6的模块化的导出与导入
* 前提条件 index.html、导出.js 、导入.js
  * 一个 index.html 主文件
    * 用来接受所有的模块js,包括模块的导入与导出，这里用script标签导入模块js到 index.html 时，必须声明type为module
     ![](https://api2.mubu.com/v3/document_image/ceebd8ce-2213-4094-93e8-eb837aa76d00-11752736.jpg)
  * JS导出文件 aaa.js，aaa1.js ......
    * 
  * JS导入文件 bbb.js，bbb1.js.......
    * 
* 导出 export
  * 两种方式导出
  * 一种是先声明变量，然后统一使用export`{ 变量名1，变量名2，变量名3...}`
  * 另一种是在声明变量时，直接在 var 前面加上 export 导出
  * 可供导入时自定义名字的导出方法。----- 用上 default (一个 js 模块文件只能有一个default)。export default function()`{ ... }`
  * 对象，函数，类，自定义模块等的导出都是一样的
   ![](https://api2.mubu.com/v3/document_image/74fc51be-3522-45fe-bd39-47ec829d1cdf-11752736.jpg)
* 导入 import
  * 一个一个导入 import`{ 导出的变量名1，导出的变量名2，导出的变量名3.....}` from'./export.js'
  * 全部导入 import * as 对象名 form './export.js'
    * \* 可以理解为全部的意思
   ![](https://api2.mubu.com/v3/document_image/e5f101dc-18ca-4be0-9755-ef242464fa28-11752736.jpg)