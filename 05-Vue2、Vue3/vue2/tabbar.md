---
title: tabbar
date: 2021-09-29 09:22:40
categories: Vue
tags: Vue
---
tabbar
## TabBar实现思路
* 如果在下方有一个单独的TabBar组件，要如何封装？
  * 自定义TabBar组件，在APP中使用
  * 让TabBar处于底部，并且设置相关的样式
  ![](https://api2.mubu.com/v3/document_image/b6cd5f09-2cb4-4963-a20c-814d1fdcd842-11752736.jpg)
* TabBarz中显示的内容由外界决定
  * 定义插槽
  * flex布局平分TabBar
* 自定义TabBarItem，可以传入照片和文字
  * 定义TabBarItem，并且定义两个插槽：图片和文字
  * 给两个插槽外层包装div，用于设置样式
  * 填充插槽，实现底部TabBar的效果

## TabBar和TabBarItem的组件封装
* 【首先】代码迁移 --- 将app.vue中关于tabbar的代码全部迁移到新的文件中
  * 迁移前
   ![](https://api2.mubu.com/v3/document_image/b6cd5f09-2cb4-4963-a20c-814d1fdcd842-11752736.jpg)
  * 迁移后
   ![](https://api2.mubu.com/v3/document_image/a48d0115-9de8-4d69-8178-9101963c083b-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/cfbc7ca4-1f99-421e-b4b0-7a654b497545-11752736.jpg)
* 个人理解
  * css中的 flex : 1可以均分父元素的宽度，但是有一个前提条件，那就是父元素必须设置css样式 display : flex，否则flex : 1 无法发挥作用，必须需要二者合作匹配。
  * flex ：1 可以理解为flex : auto ，自动均分父元素宽度
  * 封装的一大思想是使用slot插槽来控制展现位置，然后业务代码写在组件.vue文件中
* 迁移代码的时候，我们把互相相关的代码迁移到一个新文件(新的.vue文件)中。
* 对于css代码，我们是直接将相关的整体迁移的，比如TabBar.vue 文件，将id为tab-bar的相关代码直接迁移即可。
 ![](https://api2.mubu.com/v3/document_image/7080d0aa-9044-485b-a32d-da50b8379072-11752736.jpg)
* 对于template标签里面的代码，通常的处理方法是将里面的代码全部提取出来，然后放一个或多个插槽标签slot，然后将提取出来的代码再放置到一个新的.vue文件中。注意：此时的放置入的新的文件，也要迁移原本属于其的css代码。
* 关于迁移css代码的一些注意点：有些css代码迁移完成后，原本文件中还用到这些css代码的话，就必须在style标签中import新生成.vue文件以引入css代码使用。说白了就是，需要用的，如果没有，就import进来引用。
* 关于slot插槽的一些注意事项：插槽可以有name属性，其具有唯一性，能让插槽在别的文件匹配的时候发挥奇效，精准渲染。
  * 这里用name值，在别的文件匹配的时候就使用slot属性来匹配
   ![](https://api2.mubu.com/v3/document_image/04edd4e3-67aa-4877-bc97-4d6aea450a22-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/0d6fa965-d770-4943-8e65-a5e7e99fec47-11752736.jpg)

## 给TabBarItem传入active照片
* 这里传active照片实质上就是控制显示的照片，也就是说在多个照片中选择一个显示出来，通常使用v-if 和v-else解决。
* 以一种图标有两个图片为例，显示的时候是一个图片，不显示的时候是另外一个图片
 ![](https://api2.mubu.com/v3/document_image/617e7030-438a-4e38-85fc-704a58eb9d87-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/1e05ab0b-d872-44b8-ba4f-878a5104b2c5-11752736.jpg)
* 我们只需要用div包住slot标签，然后在div标签中用v-if和v-else来控制即可，这里的isActive 这个变量是在 data 中定义即可。

## TabBarItem 和路由结合
* 先创建路由 ---在终端中输入代码 npm install vue-router --save
* 在根目录下创建文件夹router，router文件夹下创建index.js文件，index.js文件的代码如图所示（格式），然后在main.js中导入文件
 ![](https://api2.mubu.com/v3/document_image/9b03e4bc-9db3-410b-a289-8570c1223933-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/a4667d41-0e4f-4c93-be2e-dd15360ba303-11752736.jpg)
* 在根目录下创建文件夹views，在views文件夹下创建代表着各个视图的文件夹，比如首页home，分类category，购物车cart，档案profile，然后分别创建对应文件夹下的文件
 ![](https://api2.mubu.com/v3/document_image/93d297b2-604a-471e-8f1c-7bad7c353b2d-11752736.jpg)
* 在index.js中引入.vue文件，然后配置路由
 ![](https://api2.mubu.com/v3/document_image/0f20eae3-c0e6-429f-a67c-3c957e1628ac-11752736.jpg)
* 再设置监听事件@click，当导航栏被点击的时候，会发生点击事件
  * 这里的监听事件最好还是回到最初的那个组件文件，这样子改变一个的话，就全部都能改变
   ![](https://api2.mubu.com/v3/document_image/88771c43-9150-4ed6-9b41-e72a2b7259ce-11752736.jpg)
* 然后确定点击事件跳转的页面，这里最好是动态确定，不然会把它写死。动态确定的关键是让点击的那个事件传入参数，确定点击的是谁，然后才好跳转，这里比较适合使用prop组件。props组件能使得点击谁，就将谁的路径信息获取出来
  * 在app.vue表明path页面
   ![](https://api2.mubu.com/v3/document_image/5cd4990f-72eb-43ab-949e-50cd44bfb695-11752736.jpg)
  * 在根源处设立path对象接受传入的path，然后在点击事件Click1中，用 this.$router.replace(this.path) 方法将页面跳转到props传入的path路径。
   ![](https://api2.mubu.com/v3/document_image/dc3bcc57-e301-4ec0-b34c-713bb88a0d2c-11752736.jpg)
* 切换成history，使导航栏更美观。
 ![](https://api2.mubu.com/v3/document_image/2fd8dc78-74ed-41ff-a919-e4dc0d8a6bba-11752736.jpg)

## TabBarItem 的颜色动态控制
* 前面的路径已经设置好了，只需要将isActive做判断就行
 ![](https://api2.mubu.com/v3/document_image/9cedf26e-e514-42fd-b9d7-7541c49f62b9-11752736.jpg)
* isActive 如果写在data中，会被写死，这样子不适合动态变化，所以将之写至computed中，然后做判断，this.$route.path 能获得当前正在访问的路径，indexOf能做判断，将前面的和括号里的参数做判断，如果相同就返回true，否则返回false.
 ![](https://api2.mubu.com/v3/document_image/f1f6ef2f-d081-4e64-8d3d-1d35e300c63e-11752736.jpg)

## 知识回顾补充
##### 抽取template中的代码到新的.vue文件
* 将template中的代码抽取出来，放到一个新的 .vue文件中，再在components中注册组件，然后将原来.vue文件中script标签中的import引用 移到新的.vue文件中。在原来的.vue文件中，要用import引入新的.vue文件，再在原来.vue文件中的components注册组件，然后在原来的.vue文件中template标签写下新的组件标签。
  * 新的文件
   ![](https://api2.mubu.com/v3/document_image/a9bbb4af-f2c5-4200-a0a1-639354edad82-11752736.jpg)
  * 原来的文件
   ![](https://api2.mubu.com/v3/document_image/38b4aa27-8281-4e35-87e8-4a28a1983756-11752736.jpg)

##### 文件夹起别名 --- 利于写路径
* 在build/webpack.base.conf.js 下的resolve中的alias写别名
 ![](https://api2.mubu.com/v3/document_image/f8f02201-e88b-4034-a28b-bfeba30c6619-11752736.jpg)
* 使用 -- 使用import引入的时候可以直接使用别名，不使用import引入的时候需要使用~来编译解析。
 ![](https://api2.mubu.com/v3/document_image/655bbd9f-41ac-4e82-8209-cd8a3e1ca4d5-11752736.jpg)
* [Vue给文件起别名——使用、报错及解决方法_Wzw的博客-CSDN博客](https://blog.csdn.net/weixin_51370367/article/details/114689506)