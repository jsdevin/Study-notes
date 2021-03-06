---
title: vue-router
date: 2021-09-29 08:59:06
categories: Vue
tags: Vue
---
vue-router
## 路由基础
##### 什么是路由？
  * 路由说白了就是一种路径，每一种资源获取从出发地到目的地对应的路径。
  * 路由就是通过互联的网络把信息从源地址传输到目的地址的活动。
  * 路由是指数据包从来源到目的地的路径。
  * 路由中有一个非常重要的概念叫路由表，路由表本质上就是一个映射表，决定了数据包的指向。

##### 后端渲染（服务端渲染）
* 【jsp模式】用户输入搜索一个域名，然后浏览器就将它提交到服务器，服务器用jsp技术将它渲染好，再提交给浏览器，最后呈现出来。这里的后端渲染只将html、css提交给浏览器。--- 用到的技术是jsp(java server page)
* 后端路由
  * 后端处理url和页面之间的映射关系。说白了就是路径，每一个资源对应的路径。

##### 后端路由阶段
* 早期的网站开发整个html页面都是由服务器来渲染的
  * 服务器直接生产渲染好对应的html页面，返回给客户端进行展示即可
* 但是，一个网站，这么多页面服务器如何处理？
  * 每一个页面都有对应的网址，也就是url
  * url 会发送到服务器，服务器会通过正则对该url进行匹配，并且最后交给一个controller进行处理
  * controller 进行各种处理，最终生成一个html或者数据，返回给前端
  * 这就完成了一个 IO 操作
* 上面的这种操作，就是后端路由，
  * 当我们页面中需要请求不同的路径内容时，交给服务器来进行处理，服务器渲染好整个页面，并且将页面返回给客户端。
  * 这种情况下渲染好的页面，不需要单独加载任何的js和css，可以直接提交浏览器展示，这样也有利于SEO的优化。
* 后端路由的缺点
  * 一种情况是整个页面的模块由后端人员来编写和维护的。
  * 另一种情况是前端开发人员如果要开发页面，需要通过php或者java等语言来编写页面代码。
  * 而且通常情况下html代码和数据以及对应的逻辑会混在一起，编写和维护都很麻烦。
* 【总结】后端路由阶段页面由服务端完成渲染；前端人员要写页面需要掌握后端语言，不好。

##### 前后端分离阶段
* 基础
  * 前后端分离：后端只负责提供数据，不负责任何阶段的内容。
  * 前端渲染：浏览器显示的网页中的大部分内容，都是由前端写的js代码在浏览器中执行，最终渲染出来的网页。
* 随着ajax的出现，有了前后端分离的开发模式
* 后端只需要提供api来返回数据，前端通过ajax获取数据，并且可以通过js将数据渲染到页面中
* 这样做最大的优点就是前后端责任清晰，后端专注于数据上，前端专注于交互和可视化上。
* 并且当移动端出现后，后端不需要进行任何处理，依然使用之前的那一套api即可
* 目前很多网站依然采用这种模式开发。

##### SPA 单页面富应用阶段
* SPA 单页面富应用：整个网页只有一个html页面。
* 其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由。
* 前端路由的核心是什么？
  * 改变url，但是页面不进行整体的刷新。
* 如何改变url，但是页面不进行整体的刷新？
  * (1) 通过改变 url 的 hash 值
  * url 的hash值其实也就是指锚点(/#)，本质上是改变window.loaction 的 href 属性
  * 我们可以通过直接赋值location.hash来改变href，但是页面不进行刷新。
  * 演示
    * 这里是常规的演示，也就是页面会进行整体刷新的演示。
    * 页面跑起来之后，F12选择 network ，初始页面就是这样子
     ![](https://api2.mubu.com/v3/document_image/b4ffc770-8f6f-4cc4-a514-72ab38aeb02c-11752736.jpg)
    * F5 刷新一下，会获取大量数据。
     ![](https://api2.mubu.com/v3/document_image/e588109a-a790-4fae-98ba-47de40e1f81a-11752736.jpg)
    * 这里是修改hash值的演示
    * 初始状态
     ![](https://api2.mubu.com/v3/document_image/562c6b21-3d7c-4814-9a3a-27da5c71a69c-11752736.jpg)
    * 改变hash值(如下图一)，页面不刷新(如下图二)
     ![](https://api2.mubu.com/v3/document_image/f4c32b7b-a1c9-4e92-a270-d68d4202bd73-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/6d762d07-b20f-44a0-8563-4f2ef24871b7-11752736.jpg)
  * (2) 用 HTML5 中 history 模式的 pushState 方法
  * 控制台输入 history.pushState({}，‘’，‘要跳转的url’)；
  * 前面两个参数可以留空，第三个填入自己想要跳转的 url
  * 演示
    * 初始时
     ![](https://api2.mubu.com/v3/document_image/91f07436-0326-4837-936c-c589824771e1-11752736.jpg)
    * 用 history 的方法后
     ![](https://api2.mubu.com/v3/document_image/0c019482-641e-4d78-bf83-e4a124a080f1-11752736.jpg)
    * 这个 pushState() 的原理是压栈和出栈
  * (3) 用 HTML5 中 history 模式的 replaceState 方法
  * 这个方法用的是替换(也就是代替)的方法，这样子就不涉及压栈和出栈了
  * 演示
   ![](https://api2.mubu.com/v3/document_image/56a8a707-a25c-44b1-80d2-179633f11eda-11752736.jpg)
  * history.back() 等于返回上一步
  * history.forword() 等于下一步
  * history.go(-1) 等于返回上一步(也等于history.back())；history.go(-5) 等于返回上五步
  * history.go(1) 等于进行下一步(也等于history.forword())；history.go(7) 等于进行下七步
   ![](https://api2.mubu.com/v3/document_image/a9b04ca5-424f-4ff1-ba77-9a37a6eabd6a-11752736.jpg)

## 路由的安装与使用
##### 安装vue router : npm install vue-router --save
##### 路由的基本配置
* 配置的格式
  * 全览
   ![](https://api2.mubu.com/v3/document_image/49ad03d2-50bd-4d09-9d07-3c758be70cba-11752736.jpg)
  * 0.1【前提条件】导入路由 import VueRouter from 'vue-router'
  * 因为是配置路由的，所以路由是必不可少的，必须要导入)
  * 0.2【前提条件】导入Vue import Vue from 'vue'
  * 因为要用到Vue的相关方法
  . 通过Vue.use(插件)方法，安装插件 。 Vue.use(VueRouter)
  * 2. 创建VueRouter对象实例 const router = new VueRouter({ routes })，然后通过字面量的方法将 routes 定义在VueRouter对象实例外，引用到VueRouter对象实例内，可以使得 VueRouter对象实例更干净简洁。
  * 这个VueRouter实例对象的创建和Vue实例创建很相似。
  * 3.将步骤2创建的router对象传入到Vue实例中，也就是导出router对象。然后在main.js文件的Vue实例中进行挂载即可 export default router
  * 【补充】在Vue实例中挂载router
   ![](https://api2.mubu.com/v3/document_image/c69c1f3a-9be3-48f6-871a-670b3f455e2e-11752736.jpg)
  * 总结版一：导入router,导入vue，使用Vue.use(插件方法)安装插件，创建VueRouter实例对象，字面量方法在实例对象中创建routes，并将routes定义到对象外，最后导出VueRouter实例对象，在main.js文件的Vue实例中挂载VueRouter实例对象即可。
  * 总结版二：
    * 第一步：导入路由对象，并且调用Vue.use(VueRouter)
    * 第二步：创建路由实例，并且传入路由映射配置
    * 第三步：在Vue实例中挂载创建的路由实例
* 路由的配置文件的路径是src/router/index.js

##### 路由映射的配置和组件内容的呈现
* 第一步：创建路由组件
* 在 /src/components 目录下创建.vue文件，一个.vue文件就是一个路由组件
 ![](https://api2.mubu.com/v3/document_image/7df00339-6af4-4f7b-a3f0-ada780af4415-11752736.jpg)
* 第二步：配置路由映射 --- 即组件和路径的映射关系
* 先引入组件；然后在routes对象中配置映射关系。routes中一个组件的映射关系就用一个大括号，path属性需要写的是呈现在浏览器地址栏的最后一个单词，component属性需要写的是import引入组件时设置的组件名字。
 ![](https://api2.mubu.com/v3/document_image/9d40db51-fd44-4329-9c02-19b66571f173-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/32488071-fa13-4ed1-b7a1-aec5f6d14119-11752736.jpg)
* 第三步：使用路由，通过在App.vue文件的template标签中写入标签<router-link>和<router-view>
* router-link 标签本质上是a标签，这里的<router-link></router-link>标签中间是必需要有内容的，不然不能点击这个标签跳转。同时这个router-link标签必须写有一个 to 属性，to属性的属性值是routes对象中的component的值。
* router-view是一个位置标签，它写在哪，组件内容就在哪个位置显示。同时，router-view 标签是一个空标签，不能写有内容。
 ![](https://api2.mubu.com/v3/document_image/72dca98f-b934-4144-bf54-89ec341fa1f8-11752736.jpg)

##### 设置路由的默认值
* 当我们进入一个网站，最先看到的那一个网页就是默认值对应的网页，也就是默认对应的网页。
* 设置默认网页的方法：在 index.js 文件的routes对象中用一个括号代表默认网页的路径，括号对象的path属性设置为空，用redirect属性代替component属性，redirect属性对应的值就是路由的默认值，也是网站的默认页面。
  * 利用redirect重定向的功能，直接设置网站的默认页面，也就是设置路由的默认值。
   ![](https://api2.mubu.com/v3/document_image/90f6d133-d9a7-4e73-8ead-df582948f22f-11752736.jpg)
* hash 方法设置的路由会带有/#，有点麻烦，我们可以用history 方法设置路由，可以解决这个问题。
  * 如图是hash方法设置的路由
   ![](https://api2.mubu.com/v3/document_image/9e6cc54d-c04b-4d19-a531-c01783ba2ab0-11752736.jpg)
* 用 history 方法代替 hash 设置路由，然后有效去掉/#号的方法非常简单，只需要在 new VueRouter 那个实例对象中添加键值对mode : 'history' 即可。
  * 代码示例
   ![](https://api2.mubu.com/v3/document_image/824606c2-c074-463c-9158-33f94b744109-11752736.jpg)
  * 效果
   ![](https://api2.mubu.com/v3/document_image/f387fa6e-b08e-4d96-aee9-a0598ee61a40-11752736.jpg)

##### router-link 标签的补充
* 在前面的<router-link>标签中，我们只是使用了一个属性to，用于指定跳转的路径。
* <router-link>还有一些其他的属性 -- tag、replace、active-class
  * tag ：它可以指定<router-link>之后被渲染成什么组件，比如<router-link to = '/home' tag = 'button'> 会被渲染成按钮标签
   ![](https://api2.mubu.com/v3/document_image/36a1d6d1-e064-4ebf-b4fe-cd2bff8c68b8-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/105e8b5b-1025-40e4-9974-3e0d9e4a2e92-11752736.jpg)
  * replace ：它和 history.replaceState() 具有同样的功能，每一次路由的改变都是通过替换，不会留下任何 history 记录，所以如果加了replace属性，网页是不能后退的。
   ![](https://api2.mubu.com/v3/document_image/10df0e95-ef9f-4671-b61e-03155290db3e-11752736.jpg)
  * active-class：当<router-link>对应的路由匹配成功时(即事件触发时)，会自动给当前元素设置一个 router-link-active 的css样式class，设置active-class可以修改默认的名称。
    * 第一步：在app.vue文件的style标签中，添加.active的样式
     ![](https://api2.mubu.com/v3/document_image/59db5677-f9ca-4ec5-9c57-96e1f2c11dd2-11752736.jpg)
    * 第二步：在index.js文件的new VouRouter实例中，添加键值对 linkActiveClass: 'active'
     ![](https://api2.mubu.com/v3/document_image/41363d21-38ab-42bc-b59e-f80fbf4be8e7-11752736.jpg)
    * 这样子，当我们触发router-link事件时，就会自动为该事件设置对应的样式。
     ![](https://api2.mubu.com/v3/document_image/6c65e0f5-6b6a-407e-8da7-e44b803ad4cf-11752736.jpg)
* 用代码设置路由跳转
  * 在App.vue文件的模板template标签中，选择自己想要设置的元素标签，然后在设置@click= ‘ 方法名’ 属性，再在export default 对象中的methods属性中写出方法函数的实现方法。
   ![](https://api2.mubu.com/v3/document_image/2b13c5ff-f118-4090-ae9e-497ec3941b53-11752736.jpg)

##### 动态路由的设置
* 作用：设置动态路由的效果是地址栏的路径动态地添加后缀地址
* 【动态设置路由】27 行的值是地址栏具体需要添加的，每一个用户不用，则那个27行的值不同，则地址栏添加的路由(路径)就不同，实现动态路由的设置
 ![](https://api2.mubu.com/v3/document_image/7237b195-73f5-43f3-9f4a-4d58ee78535c-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/7aeb7d1a-dee9-4b65-a9aa-37eff468f0df-11752736.jpg)
* 在routes对象配置路径的时候多设置了 " ：参数 "，就可以在.vue文件中用$route方法获取当前添加的路径。
* index.js 文件的代码
 ![](https://api2.mubu.com/v3/document_image/8e708c56-1889-4e7c-8ad1-a0b871bd5c61-11752736.jpg)
* params 是参数的意思。this.$route.params.abc 是指当前路径的参数的 abc 这个英文代表的意义，用这语句就能获取到添加 的路径。
 ![](https://api2.mubu.com/v3/document_image/dbfdc650-a869-4108-bdce-4b4584bd305c-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/446e68c7-7a89-4179-81ff-730d0383e658-11752736.jpg)
* 总结如下
* app.vue文件中27行 userId 的值是devin，那么15行在user路径后面添加的路径就是devin；
* index.js文件35行设置的路径后面是 :abc，在前面我们app.vue文件为我们组件(User.vue)添加的路径是devin，那么这里的index.js中的abc代表的就是devin。
* User.vue 文件中用this.$route.params.abc 可以获取abc变量代表的值。
  * params 是参数的意思。this.$route.params.abc 是指当前路径的参数的 abc 这个英文代表的意义

##### 打包后的各个 js 文件放置的东西
* app.xxxxx.js ---- 业务代码
* manifest.xxxxx.js ----底层支撑
* vendor.xxxxxx.js ---- 第三方框架

##### 认识路由的懒加载
* 背景
  * 当打包构建应用时，javascript 包会变得非常大，影响页面的加载
  * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
   ![](https://api2.mubu.com/v3/document_image/2f3596a3-490f-40c3-a997-fd7ee8fe13c9-11752736.jpg)
* 懒加载的原理：需要时，再加载
* 懒加载做了什么？
  * 路由懒加载的主要作用是将路由对应的组件打包成一个个的js代码块
  * 只有在这路由被访问到的时候，才加载对应的组件。
* 路由懒加载的效果
  * 右边是路由懒加载的代码，有两个组件用懒加载的方式打包，就会在原先三个铁金刚js文件的基础上，再生成两个js文件，分别对应两个组件，等需要时再直接加载。
   ![](https://api2.mubu.com/v3/document_image/d64ee46f-3088-4d99-b15f-daba343dad31-11752736.jpg)
* 懒加载的方式
  * 直接学最新的写法 component : () => import ('../components/About.vue')
  * 但是为了方便管理，我们一般把需要懒加载的组件文件都写到起来，规律起来。 -- 只需要设置变量然后赋值() => import ('../components/About.vue') 即可

##### 路由的嵌套使用 --- 用children属性
* 路由的嵌套设置的步骤如下
* 【第一步创建.vue文件】首先想要路由嵌套，就得有需要被访问得组件文件，所以我们先创建组件文件。这里我们以创建两个vue文件HomeNews.vue文件和AboutMessage.vue为例
 ![](https://api2.mubu.com/v3/document_image/c92601a4-2d81-4cfe-aec9-5f512b276209-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/98946e13-f2f9-4ada-91e4-10472a5e4090-11752736.jpg)
* 【第二步配置嵌套路由】在index.js文件中，先用import引入组件文件，然后在routes对象中找到需要嵌套的页面路由，然后新增属性children : [ ] ，在中括号内之前配置一样的操作，分别配置path和component
 ![](https://api2.mubu.com/v3/document_image/74fba1cb-61a3-4616-8a07-9815f1d24a89-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/11520ef5-40ea-421b-9d7c-be675f591050-11752736.jpg)
* 【第三步在对应的一级页面的组件文件中设置rouer-link标签和router-view标签】
* 这里是在一级页面home中引入二级页面，那么我们只需要去Home.vue文件中设置rouer-link标签和router-view标签即可。
 ![](https://api2.mubu.com/v3/document_image/b6cb23c8-5728-4b8b-b1ab-ab01ca7373d5-11752736.jpg)
* 总的来说，和配置一级页面的原理是一样的。
  * 【路由配置的区别】一级页面的路由在routes对象中直接配置，二级页面的路由需要到对应的一级页面的路由配置对象（一个大括号）中添加children属性，然后在children属性值里面配置path和component
  * 【router-link标签和router-view标签写的文件的区别】一级页面的router-link标签和router-view标签写在app.vue文件中；二级页面的router-link标签和router-view标签写在对应的一级页面的组件文件中(如此例子中的Home.vue)。

##### 参数传递
* 【URL】扩展知识
  * 格式为 协议 : // 主机：端口/路径？查询
  * 英文为 scheme : // host : port / path?query/#fragment
  * 例子[https://localhost:8080/profile](https://localhost:8080/profile)
* 小量数据： --- 用params
  * 配置路由格式： /router/:id
  * 传递的方式：在path后面设置对应的变量值
  * 传递后形成的路径：/router/123 、 或者 /router/abc 等等
* 大量数据
  * 准备工作：为了演示传递参数，这里需要再创建一个组件，并且将其配置好
    * 第一步：创建新的组件Profile.vue
     ![](https://api2.mubu.com/v3/document_image/d60e2282-37e8-4fef-a917-f7ab441af7c7-11752736.jpg)
    * 第二步：配置路由映射
     ![](https://api2.mubu.com/v3/document_image/a07a681a-29b5-4244-ab1c-8500acfebd42-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/53007da8-2626-45dd-bece-a943ff968f58-11752736.jpg)
    * 第三步：添加跳转的<router-link>
     ![](https://api2.mubu.com/v3/document_image/e8e7c90a-706b-453d-b74d-f501784541c4-11752736.jpg)
  * 设置参数：用 v-bind 绑定属性to，然后在里面配置属性path，再配置对象query，query就是可以传递的参数。参数传递的 to 属性都要用v-bind绑定
   ![](https://api2.mubu.com/v3/document_image/4d4d0981-058a-4d9c-b652-e99a57195335-11752736.jpg)
  * 引用参数：使用 $route.方法进行查找。 -- 实现参数传递
    * $route 可以查找到当前的作用元素。则$route.query就可以查到正在作用的元素的query对象，$[route.query.name](http://route.query.name/)就能查找到对应的query对象的属性。
     ![](https://api2.mubu.com/v3/document_image/efbb5f3e-e508-4249-adfe-9d9eddbd72e9-11752736.jpg)
    * 一些特别的元素的参数传递 -- 例如button
    * 准备工作和引用参数的过程是一样的，不同的是设置参数的时候有一些变化
    * 设置参数
      * 用v-on绑定点击事件，然后在method中设置点击函数，函数的主要参数是path和query，query 相当于一个对象。
       ![](https://api2.mubu.com/v3/document_image/57a500b9-f9f5-419a-bca0-27a4024083dc-11752736.jpg)

##### $route 和 $router 是有区别的
* $router 为 VueRouter 实例，想要导航到不用URL，则使用$router.push
* $route 为当前router跳转对象里面可以获取name、path、query、params等、

##### 全局导航守卫
* 导航守卫也就是指在路由跳转的过程中(即由一个页面跳转到另一个页面的过程)，利用这个过程对将要跳转的目的页面进行修改。说白了就是对目的页面做修改
* 导航守卫的功能主要通过beforeEach()函数来完成。
* 导航钩子的三个参数解析
  * to : 即将要进入的目标的路由对象
  * from : 当前导航即将要离开的路由对象
  * next : 调用该方法后，才能进入下一个钩子
* 例如用导航守卫对页面标题的修改
  * 首先，我们可以在钩子当中定义一些标题，可以利用meta来定义。
   ![](https://api2.mubu.com/v3/document_image/a482eaf4-ec1d-4798-ad49-8f35ae836611-11752736.jpg)
  * 其次，利用导航守卫，修改我们的标题。目的达成
   ![](https://api2.mubu.com/v3/document_image/a0f4235f-dada-4231-a670-c2caa32e3fa4-11752736.jpg)
* 【补充】如果是后置钩子，也就是afterEach，不需要主动调用next()函数。上面我们使用的使用的导航守卫，被称之为全局守卫。
  * 路由独享的守卫
  * 组件内的守卫

##### keep alive 组件 --- 保留缓存状态，下次重新进入无需刷新
* keep-alive 是 vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染
  * 它们有两个非常重要的属性
  * include - 字符串或正则表达式，只有匹配的组件会被缓存
  * exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存
* router-view 也是一个组件，如果直接被包在 keep-alive 里面，所有路径匹配到的视图插件都会被缓存
* 可以通过create声明周期函数来验证
