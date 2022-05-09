---
title: Vuex
date: 2021-09-29 09:37:19
categories: Vue
tags: Vue
---
vuex
## vuex的初介绍
* 很玄妙，看看就行
 ![](https://api2.mubu.com/v3/document_image/163124149238411d0.jpg)

## 安装vuex : npm install vuex --save-dev
## 单界面到多界面状态管理切换
* 单界面的状态管理
  * state状态的改变，会引起view呈现的内容发生变化，呈现的信息发生变化，就会引起人们更进一步产生行动action，行动action的执行，也会使得state状态发生改变。由此不断循环。
   ![](https://api2.mubu.com/v3/document_image/16312429718042e4f.jpg)
* 多界面状态管理：vuex相当于大管家的作用，其中devtools插件能反馈出每次被修改的东西
 ![](https://api2.mubu.com/v3/document_image/1c5159e5-d870-4790-98a7-3f805485c883-11752736.jpg)

## devtools插件 和 mutation方法
* 为什么需要devtools? --- 开发的时候更方便看到每一次变化的值。
* devtools 是一个由vue官方提供的浏览器插件，可以帮助我们追踪每次通过mutation方法修改的共享值。安装方法如下
  * 安装方法：谷歌浏览器搜索devtools找到vue官方的那个插件下载即可。谷歌应用商店打不开的可以去github找梯子
   ![](https://api2.mubu.com/v3/document_image/1bc2f6a6-1d37-4696-971c-dc78ca66b70d-11752736.jpg)
* devtools 的使用 ： 在浏览器页面按F12进入开发者工具页面，在和控制台(console) 同级的导航中，找Vue即可。
  * 不同的浏览器可能存在的位置会有些许偏移，自行查找即可
   ![](https://api2.mubu.com/v3/document_image/514dccfc-0a6c-4175-9cac-276a074b41e9-11752736.jpg)
  * vue2 还是使用devtools 5.3.4版本较好。
* mutations 放置的是方法，就是改变state中的共享值的方法。ps：mutations中的方法都需要由参数，形参设置为state比较好，容易联想。
 ![](https://api2.mubu.com/v3/document_image/b828a8a0-f1ef-40ad-9bbe-11a00377f15a-11752736.jpg)
* mutations的作用就是帮助将下图一的那个循环走完，这样子state对象中的共享值每次改变的时候，都可以通过devtools插件追踪到，这在大型项目中非常重要
 ![](https://api2.mubu.com/v3/document_image/1c5159e5-d870-4790-98a7-3f805485c883-11752736.jpg)
* ppt文化
 ![](https://api2.mubu.com/v3/document_image/d5a989a9-c150-4aca-89d7-dec0ee7d33cb-11752736.jpg)
* mutations 联合 devtools 发挥作用(改变共享值的同时可以追踪改变过程)的过程
  * 根据需求，定义好共享值和改变共享值的方法
   ![](https://api2.mubu.com/v3/document_image/d3a6a7da-8570-4508-a5af-bdce11330732-11752736.jpg)
  * 可以在多个组件中引用state对象中的共享值，且不需要引入文件
   ![](https://api2.mubu.com/v3/document_image/f8587e8c-fe59-4f47-8221-7d3905909fae-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/73cd22d6-47c9-4a5b-85cd-4b9413523a97-11752736.jpg)
  * 【借用mutations的方法改变state的共享值】先定义好methods中的函数，然后在函数内使用this.$store.commit('increase') 就可以借用mutations中的increase方法
   ![](https://api2.mubu.com/v3/document_image/5fb556ad-995e-4e8c-8598-725928af1e05-11752736.jpg)
  * 在浏览器调试的时候就可以追踪到改变过程
    * 右边的state是每次过程后的共享值
     ![](https://api2.mubu.com/v3/document_image/c6eeba47-2f81-4dca-8236-078d9b88e674-11752736.jpg)

## getters --- 共享的方法
* getters 对象的性质和state一样，也是共享型，可以直接通过$store.getters.xxx 引用。
* getters 的作用通常是对需要多次引用的数据进行处理，getters 中的方法一定要有形参state
 ![](https://api2.mubu.com/v3/document_image/039c8e7a-a3c0-4353-8eba-22835193e0be-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/8b1ef97a-fde3-472a-8dd5-a86c910dcd48-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/4fd235f5-93de-49e1-93a4-948a45f55a39-11752736.jpg)

## 从method中传递参数到mutation
* 首先我们需要知道的是，在vue框架中，能改变vuex的store对象的状态(改变它的共享值)的唯一方式：提交mutation(也就是使用mutation方法)。
 ![](https://api2.mubu.com/v3/document_image/f988eced-747f-4e43-b6f3-283fc8210b85-11752736.jpg)
* mutation包括两部分
  * 字符串的事件类型（type）
     ![](https://api2.mubu.com/v3/document_image/98c2b28a-56a6-4bcf-9f96-7f5faf128ac0-11752736.jpg)
  * 一个回调函数，该回调函数的第一个参数就是state
   ![](https://api2.mubu.com/v3/document_image/ebdf5751-a952-487b-9108-e6c895e6388a-11752736.jpg)
* 传递参数
  * 做一个+5的功能
  * 将numb变量传到index.js的mutation对象中使用。注意：这里也可以是将一个对象传到mutation去
   ![](https://api2.mubu.com/v3/document_image/95109f61-7a5a-4d47-a9d9-cf8c536c792c-11752736.jpg)
  * 使用method处传来的参数
   ![](https://api2.mubu.com/v3/document_image/b2c721ad-bb7a-474e-bb24-5864c5cbb752-11752736.jpg)
  * ppt 文化
   ![](https://api2.mubu.com/v3/document_image/d428f3fc-ea59-45e8-9822-c991e27b1ae1-11752736.jpg)

## mutation 响应式规则 --- 使增删state共享值生效
##### 【增】增加共享对象的属性
* 前提条件是先设置一个state共享对象
 ![](https://api2.mubu.com/v3/document_image/ccd9a893-8473-4f02-9add-6c925ba3e987-11752736.jpg)
* 先在index.js中设置好增加共享对象属性的方法Vue.set()，第一个参数是作用的state的对象，第二个参数是想要增加的属性，第三个参数是属性值
 ![](https://api2.mubu.com/v3/document_image/bc7a704b-bd69-401b-b37b-dd5cc83e2577-11752736.jpg)
* 然后在.vue组件文件的method中设置好方法函数使用mutation的方法，最后直接在template标签中使用method的方法即可增加共享对象的属性了
 ![](https://api2.mubu.com/v3/document_image/dea84e6c-445e-404d-a99d-7a899c7509e7-11752736.jpg)

##### 【删】删除共享对象的属性 ---原理同上
* 这里直接使用上面增加对象属性时设置好的对象好了
 ![](https://api2.mubu.com/v3/document_image/fedefea3-7f65-4274-8071-ffc950120461-11752736.jpg)
* 先在index.js中设置好删除共享对象属性的方法Vue.delect()，第一个参数是作用对象，第二个参数是作用的属性(需要删除的属性)
 ![](https://api2.mubu.com/v3/document_image/ce44fd8c-2f43-4551-9b2e-477a8e2eab5e-11752736.jpg)
* 然后在.vue组件文件的method中设置好方法函数使用mutation的方法，最后直接在template标签中使用method的方法即可删除共享对象的属性了
 ![](https://api2.mubu.com/v3/document_image/aac363ab-075a-4de4-8bb3-33301ea2ff50-11752736.jpg)
* ppt文化
 ![](https://api2.mubu.com/v3/document_image/51bcc9b5-9987-40bd-ad58-72cbffd72eb6-11752736.jpg)

## mutation 常量类型 -- 概念
* ppt文化
 ![](https://api2.mubu.com/v3/document_image/a2678c2a-76fc-4a2c-94a1-405404012e7d-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/66c96b42-c168-48ba-b436-eb434917aeba-11752736.jpg)
* 大型项目中 mutation 方法名字越来越多，在组件method使用的时候容易出错，为了解决这个问题，vue提出了常量类型，就是将mutation 方法的名字全都写到一个文件，然后引用到index.js设置mutation方法，同时也引用到.vue文件的method中使用。设置方法如下
* 【新建存储名字的专属文件】在store文件夹下新建一个mutation-types.js文件
* 【存储名字】将 mutation 方法的名字写到mutation-types.js文件中
 ![](https://api2.mubu.com/v3/document_image/e11c7c62-7551-439b-a76f-2d46500f432a-11752736.jpg)
* 【引入名字并使用】在 index.js 和 .vue文件中引入mutation-types.js获取名字，并在mutation和method中使用
  * 需要注意的是：mutation-types.js 导出对象使用的方法是export const ，所以在 index.js 和 .vue文件中引入时引入的是一个对象，需要使用的名字都要写成那个对象的属性值
   ![](https://api2.mubu.com/v3/document_image/afedc5f7-9a1e-4409-84d1-7fd0dc50b691-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/1fc3b8b2-0e1e-4858-914e-c8d14c9bc939-11752736.jpg)
  * ps：如果是export default ，那就引入时直接import 名字 就行。
* 【使用截图】
 ![](https://api2.mubu.com/v3/document_image/b0bed816-9361-4559-a5ab-ef838f4aceb5-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/6373fb98-548b-4708-9033-f0f975cf95b0-11752736.jpg)

## actions --- 异步操作的集合
* ppt文化
 ![](https://api2.mubu.com/v3/document_image/ff4ba8e0-94ae-49ea-a59e-9c2a6a9f45f4-11752736.jpg)
* vuex 的核心
 ![](https://api2.mubu.com/v3/document_image/8f9e69e6-0404-40c6-b7b2-bc3da25742e5-11752736.jpg)
* mutation里面所有的方法都不能是异步操作的，如果需要异步操作，就在要action里面设置方法，[ state -> actions -> mutations ]这样子才能使用devtools插件追踪到变化
* 使用异步操作的步骤
* 【根据需求准备mutations方法】先根据需求在mutations里面设置好方法实现需求
 ![](https://api2.mubu.com/v3/document_image/76a55c94-f32d-4fe9-aca4-0776a19537e3-11752736.jpg)
* 【使用actions方法引用mutations方法】然后再在actions里面设置方法引用 mutations
  * 这里引用 mutations 方法的代码时context.commi("mutations的方法名")
   ![](https://api2.mubu.com/v3/document_image/ad5ba5cd-af68-431c-806b-dc2b8bcd0061-11752736.jpg)
* 【在method中布置actions方法】在.vue文件的method中设置函数使用actions中的方法
  * actions方法引用的方式是this.$store.dispatch("actions的方法名")
   ![](https://api2.mubu.com/v3/document_image/c4cde0e0-4096-41df-a0aa-bfebf96c26ae-11752736.jpg)
* 【在temolate标签中展示】在template标签中设置标签使用method方法
 ![](https://api2.mubu.com/v3/document_image/016e965f-e085-4155-a4a9-45bab8a2d8ef-11752736.jpg)
* 另一个功能
* 传递参数：actions 这里的传递参数通常是指在.vue文件的method中通过dispatch方法将信息传到index.js中的actions方法中去
  * 【图一】method中的关于actions的dispatch方法的第二个参数就是要传递的信息；【图二】payload 是形参名，其他任何名字也可以作为形参名，只是payload 有负载的意思，vuex 中通常使用payload做传递参数的形参
   ![](https://api2.mubu.com/v3/document_image/46aa6b45-3137-4c22-996e-62e172c69bc5-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/1de27a3d-4de7-437f-b110-d6d455529632-11752736.jpg)
* 另另一个功能 --- 返回promise
* 可以使用这个功能判断是否成功完成action方法
  * 配置actions方法，并作成功访问的话会返回的记号。需要知道的是这里返回的Promise，会返回到method中那个dispatc提交方法后面
   ![](https://api2.mubu.com/v3/document_image/98a77ef6-4fa0-4226-83d8-1d37a7b590aa-11752736.jpg)
  * 配置then()方法验证是否成功完成
   ![](https://api2.mubu.com/v3/document_image/15e9f7d0-7f3c-452d-ac63-55552c617eaf-11752736.jpg)

## module
* ppt文化 --- module看这个就完事了
  * 1. module的出现是为了简化代码，否则根state，mutations，getters将会变得非常混乱
   ![](https://api2.mubu.com/v3/document_image/55a2fd08-e7fc-4e09-a274-044ef9d7c01d-11752736.jpg)
  * 2. modules 中需要设置不同的modle值，比如module A，module B，module C。每一个module值都包含state，mutations，getters这三个属性，这三个属性的使用方法大体和根state，mutations，getters的使用方法一样。
   ![](https://api2.mubu.com/v3/document_image/8075c9e6-b49b-4a68-bab5-5276ea14ed17-11752736.jpg)
  * 3. 除了state，mutations，getters这三个属性外，每一个module值也同样有actions属性。
   ![](https://api2.mubu.com/v3/document_image/a932c42a-3c0c-4f6a-9a80-8ed8a3f02406-11752736.jpg)
  * 【个人总结，不一样对】如上图，子module中的 mutations，getters，actions 可以接受从根state的传来的参数；子module中的 getters 和根 getters 一样都是全局共享型，可以直接引用；子module中的 actions 只能使用子module中的 mutations 中的方法。子module可以引用子module
* 对象的解构
  * 上面的代码是定义对象，下面的代码是解构对象。
   ![](https://api2.mubu.com/v3/document_image/f5fcc021-d65c-4222-8141-d5f5f8a300c8-11752736.jpg)
  * 语法：const { 获得被解构对象的属性且不需要讲究顺序 } = 被解构的对象
* 分解 index.js 代码，写在不同文件中
  * 代码更加简洁
   ![](https://api2.mubu.com/v3/document_image/9a48235d-0105-42be-ac19-715e207b8dee-11752736.jpg)