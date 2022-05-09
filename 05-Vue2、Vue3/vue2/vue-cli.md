---
title: vue-cli
date: 2021-09-29 08:33:14
categories: Vue
tags: Vue
---

用 vue-cli2 初始化项目： `vue init webpack my-project-name`
用 vue-cli3 初始化项目： `vue create my_protect_name`
## 前提准备
##### 依赖：需要有 nodejs 环境，即是需要安装 nodejs
* 一般按照教程来说，前面肯定安装了nodejs的(如果没有请百度如何安装node)，检查nodejs版本的方法是在终端中执行命令 node -v
* 默认已经安装好了nodejs

##### 安装 Vue 脚手架 ： npm install -g@vue/cli
* 这里是全局安装了脚手架，对应的是目前最新版,
* 查看安装的vue-cli 是哪个版本，可以在终端中执行命令 vue --version

##### 上面安装的是 Vue cli3 的版本，如果想要按照 vue cli2 的方式初始化项目时是不可以的。
* 解决方法就是在终端中执行命令 `npm install -g@vue/cli-init` .
* vue cli3和旧版使用了相同的vue 命令，所以vue cli2被覆盖了，如果仍然想要使用旧版本的 vue init 功能，就需要全局安装一个桥接工具，安装方法就是在终端中执行命令 `npm install -g@vue/cli-init` .
* 安装桥接工具之后，vue cli 的版本还是vue cli3以上，但是我们可以使用vue cli2的命令来操作项目。命令不会被覆盖，桥接工具就这个好处。此时既可以用vue cli2来操作项目，也可以用vue cli3来操作项目

## vue cli2
##### 用 vue cli2 初始化项目 命令：`vue init webpackmy-project-name`
* 初始化时终端会弹出的任务以及如何填写
 ![](https://api2.mubu.com/v3/document_image/2a3d0ec5-419e-482e-988d-5ac89ae03854-11752736.jpg)
  * 1.名字 --- 要填写自己的文件夹名字（不能包含大写字母）
  * 2.项目名称 ----填写自己准备创建的项目名称
  * 3.项目描述、作者信息 ----回车跳过
  * 4.rootime
  * 5.vue-router ----目前先选no
  * 6.ESlint代码规范 ---no；
  * 如果这里选了yes，项目初始化完成后，可以去config/index.js中找useEslint的键值对，将true改为false即可。
  * 7.单元测试unit test ----no
  * 8.e2e测试 ----no
  * 9.使用npm安装
* 初始化项目完成后，出现的目录的详细解析
 ![](https://api2.mubu.com/v3/document_image/1cce74fc-c764-4d71-ae36-3b4bc25f1f24-11752736.jpg)

##### runtime-compiler 和 runtime-only 的区别 --- （template -> ast ->） render -> virtual dom -> UI
* 溯源：runtime-compiler 是vue1.0版本时的推荐模式，runtime-only 是vue2.0版本时的推荐模式。
* 对比不同模式下的new vue({ }) 中的代码，以及由此引来的渲染效果的差异
  * runtime-compiler 的 main.js 文件，其中new vue 里使用的是如图代码。
   ![](https://api2.mubu.com/v3/document_image/f01d3bf7-37a2-4bcc-8b62-a3ef0fc8d866-11752736.jpg)
  * runtime-only 的 main.js 文件，其中new vue 里使用的是如图代码。
   ![](https://api2.mubu.com/v3/document_image/38823a2e-8a81-45b0-9dfb-ade06e87e73e-11752736.jpg)
  * 【核心如下】不同模式的代码决定其不同的渲染方式。
  * runtime-compiler 的渲染方式：template -> ast -> render -> virtual dom -> UI；能处理template标签
    * template -> ast -> render -> virtual dom -> UI
      * ast 是抽象的意思，render是渲染函数，virtual dom是虚拟dom。
      * 个人理解：vue 先将template中的代码抽象出来，如何通过渲染函数render来渲染到虚拟dom上，最后部署到真实的dom即UI上。
  * runtime-only 的渲染方式：render -> virtual dom -> UI；不能处理template标签
    * 略过template -> ast 的过程(这个过程由 loader : vue-template-compiler 处理)，直接跳到render的过程。
  * runtime-only 渲染方式的性能更高，代码量更少，推荐使用runtime-only
  * 使用了runtime-only 的渲染方式，其不能处理template标签，那么.vue文件中的template标签由谁来处理呢？
    * 由在学 webpack 的 loader 时已经安装好的 vue-template-compiler 处理， vue-template-compiler 专门处理着玩意。
  * 如果习惯使用template进行开发，就选runtime-compiler；如果习惯使用.vue文件进行开发，就选runtime-only.

## vue cli3
##### vue cli 3 与 vue cli2的区别
* vue cli3 是基于 webpack 4 打造的，vue cli2是webpack 3
* vue cli3 的设计原则是 ‘0配置’，移除了配置文件根目录下的build、config等目录
* vue cli3 提供了vue ui 命令，提供了可视化配置，更加人性化
* 移除了static文件夹，新增了public文件夹，并且index.html移动到了public中。

##### 初始化项目 命令：vue create my_protect_name
* preset : 配置；default : 默认的 ；Manually : 手动的；
 ![](https://api2.mubu.com/v3/document_image/7e5e2796-6b34-43ce-b356-a33d88f86c18-11752736.jpg)
* 1.【选Manually、Babel】选 ‘Manually’，手动配置；然后选自己想要的配置
  * 弹出的配置中，如果想要选择，只需要移动上下键到所选项，按下空格即是选择。【这里学习建议先只选 Babel】
* 2.【选in dedicated config files】 “in dedicated config files” 意思是把所列出的部分配置单独放到一个文件；“in package.json” 意思是把所列出的部分配置放到 package.json 中。
* 3.Save this as a preset for future projects? ---- y
* 4.Save preset as ---- 随便写一个名字，这个名字会在下一次使用vue cli3创建项目时，在第一步选Manually时那一页供给选择。
  * 多次创建之后，可能回预留出很多名字，那么怎么删除呢？
  * 答案就是去C盘的用户(也可能是管理员)文件夹下，寻找 vuerc 文件，然后用记事本打开，删除里面名字对应的括号即可。无论是谁，都是去C盘找vuerc文件，与你项目的文件地址无关。
 ![](https://api2.mubu.com/v3/document_image/c1605308-30e0-4ec0-9666-74eaa9a0eeda-11752736.jpg)

##### 初始化完成后的目录解析
 ![](https://api2.mubu.com/v3/document_image/39d6bc47-b52a-4fd1-b7b9-1a78198b59f7-11752736.jpg)

##### 用vue cli3创建出来的 main.js 文件，挂载方法变成了.$mount('/#app')，但是效果是和原先vue cli2用 el 来挂载是一样的。
 ![](https://api2.mubu.com/v3/document_image/ce754996-69a3-48a3-a3a8-8ce6093301af-11752736.jpg)

##### 【怎么修改配置】用 vue cli3 创建的项目在目录中是看不到配置文件的，那么怎么修改配置呢？
  * 【推荐使用】方案一：用本地服务器。 ---- 任意目录终端下执行命令： vue ui
    * 这里的 GUI 是指用户界面
     ![](https://api2.mubu.com/v3/document_image/56d1112f-c508-4b67-9bd4-0b1ab87a2485-11752736.jpg)
    * 在左上方可以查看插件、依赖；也能实时修改配置和打包运行。
     ![](https://api2.mubu.com/v3/document_image/59dd5ebb-f13b-4c19-bc07-29cd8c5be0e7-11752736.jpg)
  * 方案二：node_modules/@vue/cli-service/webpack.config.js ---这里的webpack.config.js有引用。不建议用这个方案修改
   ![](https://api2.mubu.com/v3/document_image/82f67b74-9c95-48e2-9108-b09a29aba334-11752736.jpg)
  * 方案三：创建 vue.config.js 文件，使用module.exports = { } 函数修改
   ![](https://api2.mubu.com/v3/document_image/72a9d3c4-e74d-4d25-b0a4-52a98e8807c1-11752736.jpg)

### vue-cli 主要记得初始化项目的命令就完事了