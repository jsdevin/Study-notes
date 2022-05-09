---
title: Vue总结(常用语法和命令)
date: 2021-09-30 20:36:48
categories: Vue
tags: Vue
---

##### v- 系列
* v-bind 作用是可以动态**绑定属性**，语法糖是 `:`
* v-on 作用是动态**绑定事件**，语法糖是 `@`
* v-for 作用是**遍历**，语法是 `<li v-for = "item in objects">{{item}}</li>`
* v-model 作用是**双向数据绑定**，语法是 `<input v-model="message">`，这里的message对象是在new Vue的data属性中定义的。

##### 组件
* 创建全局组件的语法糖是 `Vue component('自定义标签名',{template模板})`
* 创建局部组件的语法糖是 `'自定义标签名'：'#tm1'` ，在new Vue实例的components的大括号中输入语法糖代码，其中#tm1代表的是id为tm1的template模板

##### 父子组件的数据传输
* props **父传子** 。[使用演示](https://api2.mubu.com/v3/document_image/0b1ae913-b190-4b14-8fc6-1dbbfe164f93-11752736.jpg)
* this.$emit (‘自定义事件’，函数的参数item) **子传父** 。 [使用演示](https://api2.mubu.com/v3/document_image/3bae8786-0153-4ee1-acc2-88aa22742f7e-11752736.jpg)

##### vue-cli 用来初始化项目
* 用 vue-cli2 初始化项目： `vue init webpack my-project-name`
* 用 vue-cli3 初始化项目： `vue create my_protect_name`

- - - 
- - -

### 下面的没有什么便捷的命令了，都是些知识，多用自然熟，传送门贴上，方便从本页面传送到指定知识点

##### vue-router 用来设置页面的跳转路径
* [所有知识点传送门](https://devinlin000.github.io/2021/09/29/VUE/vue-router/)
* 路由的基本配置 [配置文件index.js的基本格式](https://api2.mubu.com/v3/document_image/49ad03d2-50bd-4d09-9d07-3c758be70cba-11752736.jpg)

##### tabbar 是封装组件
* [所有知识点传送门](http://localhost:4000/2021/09/29/VUE/tabbar/)

##### Promise 用来解决调用问题
* [Promise的基本使用](https://api2.mubu.com/v3/document_image/fd1a8d9d-d728-4489-802b-dbe11c9b6faf-11752736.jpg)
* [Promise的链式调用](https://api2.mubu.com/v3/document_image/e6f99fc8-5047-444b-b48e-13e3d7f38718-11752736.jpg)
* [Promise.all()解决多次访问问题](https://api2.mubu.com/v3/document_image/f227f440-82be-43d2-95f7-95e3194ee907-11752736.jpg)

##### Vuex 管理全局共享的对象和方法，追踪记录数据的改变
* [所有知识点传送门](https://devinlin000.github.io/2021/09/29/VUE/Vuex/)

##### Axios 基于promise的可用在浏览器和node.js中的异步通信框架；主要作用是实现AJAX异步通信
* [所有知识点传送门](https://devinlin000.github.io/2021/09/29/VUE/axios/)