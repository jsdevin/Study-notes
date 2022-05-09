webpack本身就很重要，而且webpack还可以帮助理解vue cli
### webpack 的介绍与安装 --- 前端模块化开发工具
##### 前端模块化
  * webpack的一个核心就是让我们进行模块化开发，并且可以帮助我们处理模块间的依赖关系。这里说的模块化开发，其实就是把一个个文件看作成一个个模块来使用。比如js文件、css文件、json文件、图片等都可以被当作模块来使用。

##### 打包的理解
  * 打包就是将webpack中的各种资源模块进行打包合并成一个或多个包。
  * 并且在打包的过程中，还可以对资源进行处理，比如压缩文件，将scss转换成css，将ES6语法转换成ES5语法，将TS转换成JS等等操作

##### webpack的安装
  * 首先需要安装Node.js
    * [Node.js 安装配置 | 菜鸟教程 (runoob.com)](https://www.runoob.com/nodejs/nodejs-install-setup.html)
  * 然后全局安装 webpack，这里推荐安装的webpack版本是3.6.0，因为vue vli依赖该版本
    * cmd命令窗口中执行代码 `npm install webpack@3.6.0 -g`
  * 局部安装webpack
    * 为什么全局安装了webpack之后还要局部安装
      * 在终端直接执行webpack命令，使用的确实是全局安装的webpack
      * 但在package.json中定义了scripts时，其中包含的webpack命令，那使用的就是局部webpack（需要依赖--save-dev）n,所以必须要安装。
      * 安装方式
        * cmd命令窗口中
        * 执行命令1 ： cd 对应目录
        * 执行命令2 ：`npm install webpack@3.6.0 --save-dev`

### grunt/gulp 和 webpack 的对比--- 侧重过程 VS 侧重模块化开发
* grunt/gulp 的核心是 task
  * 【定义任务 task】我们可以配置一系列的task，并定义task要处理的事务（例如ES6转ES5，图片压缩，scss转css等）
  * 【执行任务task】之后让grunt/gulp来依次执这些已经定义好的task，让整个流程自动化
  * 所以grunt/gulp也叫做前端自动化任务管理工具
* webpack 的核心是模块化
* grunt/gulp和webpack的不同
  * grunt/gulp强调的是前端流程的自动化，核心是任务。主要功能是使得任务自动化，即流程自动化。
  * webpack强调的（核心）是模块化开发管理。文件压缩、文件类型转换只是它的附带功能。
  * 总结：二者各有特点，grunp/gulp更注重的是任务流程的自动化，而webpack更注重的是模块化开发管理。
* 什么时候使用哪个工具进行打包
  * 如果我们的工程模块依赖非常简单，甚至没有模块化的概念，只需要简单的合并、压缩，十使用grunp/gulp即可
  * 如果整个项目使用了模块化管理，并且依赖非常强，使用webpack.
  * 总结：不涉及模块化用grunt/gulp，涉及模块化用webpack.

### webpack 的使用 ---src、dist的父目录的终端中输入打包命令`webpack ./src/main.js ./dist/bundle.js`
* 【要求】把主文件夹下的 scr 文件夹的 main.js 文件打包到文件夹dist，并将文件命名为bundle.js
* 【已知信息】通常情况下，scr文件夹是放打包前的文件的，dist文件夹是放打包之后的文件的。不管src文件夹中包含多少个js文件，都只需要打包main.js，其它js文件有引用也无所谓，webpack会自动打包。
* 【实现方法】在src、dist的父目录的终端中输入打包命令webpack ./src/main.js ./dist/bundle.js
 ![](https://api2.mubu.com/v3/document_image/84895194-040a-422a-9e6a-322fbf908dcb-11752736.jpg)
* 全部信息(包括方法)
 ![](https://api2.mubu.com/v3/document_image/83c4d7e4-bc3e-4804-9a4b-c2b9f69bf383-11752736.jpg)

### webpack.config.js 和 package.json 的配置
##### webpack.config.js 里配置的是默认的打包路径
  * 其中module.exports = {} 的括号内是填写路径的地方
  * 最开始的样子
   ![](https://api2.mubu.com/v3/document_image/2b686ae1-73fb-4f1d-ba95-6983af0a381c-11752736.jpg)
  * entry 是入口，这里是写被打包的文件(一般时main.js)的地址，通常地址是直接写对应目录的 .src/main.js
  * output 是出口 , 需要包括路径地址和文件名
  * 这里的出口地址path是绝对路径，通常绝对路径是动态获取的，需要引用nodejs的path模块。
  * 引用 nodejs 的 path 模块来设置绝对路径的方法：
    * 【初始化父目录】在webpack.config.js的父目录的终端中输入npm init
      * 初始化 webpack.config.js 的父目录
     ![](https://api2.mubu.com/v3/document_image/b1107f82-4171-4fbe-99c1-5aaf8174d500-11752736.jpg)
    * 【填写推送的 package name、entry point 的信息】
      * package name 随意填写，entry point 目前填写 index.js 即可。其它那些信息不需要填写，直接敲回车键跳过。一路敲回车键之后，最终会生成一个名字是package.json 的文件。
     ![](https://api2.mubu.com/v3/document_image/8f998ea5-73c0-45c0-a4e5-4621338771d7-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/a62b5240-effa-43c7-81b7-165d029c620c-11752736.jpg)
    * 【确认是否自动生成 package.json 文件】
      * package.json 是和 webpack.config.js 同一文件夹下的同一等级的文件，而且其信息是我们上一步所填写的，除此之外还有 属性 author 和 license ，前者是写作者，后者写开源与否。
     ![](https://api2.mubu.com/v3/document_image/83bfdd4f-64f4-450d-b1c3-d5c8faa5a772-11752736.jpg)
    * 【安装依赖】在 package.json 的父目录的终端中输入npm install
      * 命令执行完毕之后会生成文件 package-lock.json
     ![](https://api2.mubu.com/v3/document_image/b03066e8-a8f5-44c7-b60b-41100516d70f-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/eb456327-0ad2-4c92-a3d6-33245ad55708-11752736.jpg)
    * 【设置出口的绝对路径】path.resolve(__dirname,'dist')
      * 绝对路径：path.resolve(__dirname,'dist')
      * resolve 是 nodejs 中的一个获取路径的函数，__dirname 是获取当前文件的全局变量。
     ![](https://api2.mubu.com/v3/document_image/af398fb8-2465-4fb3-aba3-fc8762520b4f-11752736.jpg)
    * 【测试打包】 直接在 webpack.config.js 的父目录的终端中输入命令webpack即可成功打包。
     ![](https://api2.mubu.com/v3/document_image/f3b84a3c-1809-49d6-a735-356e7f925835-11752736.jpg)
    * 配置完成
  * filename 通常是 bundle.js ，这个可以任意填写。

##### 一些理解
* package.json 是在配置 webpack.config.js 的过程中产生的。其不需要配置什么。
* 配置 webpack.config.js 的目的是使得打包更加便捷方便。其结果是使得打包命令由 webpack ./src/main.js ./dist/bundle.js 变成了 webpack。命令省去了打包的入口路径和出口路径，大大地提高开发效率，一次配置，方便整个程序员生涯。
* 但是
* 一般来说，如果打包命令是 webpack ，当碰到名字特别特别长的附带东西的话(比如webapck -save -dev)，输入命令就会特别麻烦，而且这些命令都是重复输入的，所以我们就有了高级的命令。

##### 高级命令的设置
* 在 package.json 文件中的 scripts 属性中，创建"build" : "webpack"，这样之后，我们直接在package.json 父目录的终端中输入npm run build就相当于输入 webpack 打包了。这个命令在后面后面学东西多了之后会比命令webpack好用很多。
 ![](https://api2.mubu.com/v3/document_image/7a07593b-3e34-47eb-b877-e1abb0876394-11752736.jpg)
* 高级命令的本质其实还是 webpack ，它相当于快捷键，输入一个特殊的命令来调用webpack。
 ![](https://api2.mubu.com/v3/document_image/061b3c96-e88b-4de0-a811-8dfe9a06be26-11752736.jpg)
* 下面是打包时用的webpack版本是本地的还是全局的问题，我们是需要用本地的版本打包。
  * 首先应该看我们本地的(也就是父目录)中是否安装了webpack，标准很简单，如果有node_modules文件夹，那就是安装了，如果没有，那就是没有安装。
   ![](https://api2.mubu.com/v3/document_image/ee362d8b-3e9f-4ac5-af46-7fac1f4f367e-11752736.jpg)
  * 高级命令会优先用本地的webpack版本帮我们打包，如果本地(也就是父目录)不安装webapck，那就会用全局的webpack版本来帮助我们打包。 【这里的版本两个字是让我们区分开命令webpack和webpack包版本而已，阅读时可以省略】
    * 注意：如果没有package.json 文件中的 devDependencies 键值对，那么只要是在终端中打包的，都是使用全局的webpack版本进行
  * 我们是希望使用本地的webpack版本 来打包的，因为本地的webpack版本是可控，通常时安装在父目录中，而且不同的目录可以安装不同版本的webpack，这样子更适合在公司中使用网络上git下来的项目，因为不同项目可能打包时用的webpack包的版本不同。
  * 【本地安装webpack版本】例如安装3.6.0版本。 在对应的 webpack.config.js 的父目录的终端下输入命令 `npm install webpack@3.6.0 --save-dev` 并执行
  * 安装成功后在 package.json 文件中会自动出现如图红框中的键值对，其意思是开发时本地执行的webpack版本时3.6.0
   ![](https://api2.mubu.com/v3/document_image/f5a7715a-8b79-459d-8460-88976a996665-11752736.jpg)
  * 有了上面这个键值对之后，我们在终端中输入命令 npm run build 时，优先使用的webpack版本就是本地的了。

### loader的引入 -- 将css、less、图片等文件转换为可打包的模块
##### css 文件的处理
* 引入处理 css 文件的 loader 即可。css-loader、style-loader 。
* 引入 loader 的教程。以 css-loader 为例
* 【第一步】先在 main.js 文件中写入 require 语法，路径写到需要引入的 css 文件。
 ![](https://api2.mubu.com/v3/document_image/c981a252-9fde-4e68-b26e-46037f2a3be1-11752736.jpg)
* 【第二步】安装特定 loader ，例如 css-loader
  * （1）去 webpack 的[中文官网](https://www.webpackjs.com/loaders/)，点击右上角的LOADERS，然后在左侧选择样式。
   ![](https://api2.mubu.com/v3/document_image/17099909-f6a4-4844-8481-ba35b42409b8-11752736.jpg)
  * （2）点击红色框中的蓝体字，跳转到新页面
   ![](https://api2.mubu.com/v3/document_image/cbb08362-2c71-486c-b879-79a9255456b7-11752736.jpg)
  * （3）在新页面中复制红框中的代码命令到 css 文件的祖先文件夹(这里是爷辈文件夹)的终端中执行
   ![](https://api2.mubu.com/v3/document_image/c1a33055-9e5d-47ea-90e3-57161023f151-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/1493d9a5-8961-45f2-ad19-96b3db8d66cd-11752736.jpg)
  * （4）将要在 webpack.config.js 文件中输入的代码复制到 webpack.config.js文件中。
   ![](https://api2.mubu.com/v3/document_image/c37f0136-a9d4-4036-8d5a-6f7c4a021155-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/ef1a1eaa-42b8-4f53-a4dc-80735bd12a46-11752736.jpg)
  * 安装成功
* style-loader 的引入也是一样的方法。不过如果在安装 css-loader 时已经配置了webpack.config.js 的话，这里安装 style-loader 就不需要配置了，因为都是一样的。
* **css-loader 只负责对（解析好的）css 文件进行加载**
* **style-loader 负责将样式添加(解析)到DOM中**
* 使用多个loader时，是从右向左依次读取的，所以顺序不能随意调换。
 ![](https://api2.mubu.com/v3/document_image/6b271c3c-a539-4977-b814-eeee74e9d84c-11752736.jpg)
* 遇到问题 ----如下
* 报错一：Module build failed: TypeError: this.getOptions is not a function
* 上面英文的意思：模块构建失败:TypeError: this。getOptions不是一个函数
* 原因：css-loader 和 style--loader 的版本过高导致的，降低版本就行
* 解决方法 ： 先卸载原先版本，再安装合适的版本
  * 这里推荐一组版本配置，css-loader : 2.0.2,；style-loader : 0.23.1
  * 卸载
  * css-loader 的卸载：npm uninstall --save-dev css-loader
  * style-loader 的卸载：npm uninstall --save-dev style-loader
  * 安装
  * css-loade 的安装 ：`npm install css-loader@2.0.2 --save-dev`
  * style-loader 的安装 ：`npm install style-loader@ 0.23.1 --save-dev`

##### less 文件的处理
* `引入 loader 的教程。看上面的`
* 总体思想：用require语法引入要操作的 less 文件，再安装对应loader，然后复制用法处的代码到 webpack.config.js ，最后打包就行了
* （1）用require语法引入要操作的 less 文件
 ![](https://api2.mubu.com/v3/document_image/bcc4389c-618e-4354-9708-afbe35a72d43-11752736.jpg)
* （2）安装对应loader : npm install --save-dev less-loader@4.1.0 less@3.9.0
* 这里的 less-loade 和 less 版本要合理搭配，配置过高容易报错。
* （3）将官网给出的代码粘贴到 webpack.config.js
 ![](https://api2.mubu.com/v3/document_image/aac1f187-1ee5-4514-9ef4-a85e21d1a0c3-11752736.jpg)
* （4）用npm run build 打包即可

##### 图片的处理
* 图片其实一般都是放在 css 文件中
* 需要先安装的 loader 有：url-loader、file-loader，再将用法处的部分代码粘贴到webpack.config.js 中，然后稍微加一些东西，最后打包即可。
 ![](https://api2.mubu.com/v3/document_image/b3d12af7-6c88-44a7-b559-96f91d2fe91e-11752736.jpg)
* 图片小于 8 KB，只用到url-loader；图片大于 8 KB，两个都需要用到。
* 【加入 publicPath : 'dist/' 效果】 当图片大于 limit 的值，打包时会在 dist 文件夹中自动生成一个图片，这里设置 publicPath : 'dist/' 之后就能准确获取。
 ![](https://api2.mubu.com/v3/document_image/16497792-826e-4710-b4e0-0cbcd45ad56a-11752736.jpg)
* 【加入name键值对】如图，可以确保图片的唯一性，方便认识
 ![](https://api2.mubu.com/v3/document_image/74f3e235-31ef-451c-a45b-a768a6d32e77-11752736.jpg)

### ES6语法 转换成 ES5 语法 --- babel-loader
* 前言：如果你仔细阅读 webpack 打包的 js 文件，会发现写的ES6语法并没有转成ES5，那就意味着可能一些对ES6还不支持的浏览器没有办法很好的运行我们的代码。一般来说，如果希望将ES6的语法转成ES5，就需要使用到babel，但是在webpack中，我们直接使用babel对应的loader就可以了。
* 安装特定的 babel 就可以使得 js 文件中的ES6语法转换成ES5语法，安装方法如下：
* 【第一步】安装 babel ：在父目录的终端中执行命令npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
* 【第二步】配置webpack.config.js :
 ![](https://api2.mubu.com/v3/document_image/dd0ead23-3dbb-4fbf-98a1-b4703cc2b208-11752736.jpg)
* 【第三步】终端处运行 npm run build 打包，即可实现ES6转换成ES5

### webpack 配置 vue --- vue-loader、vue-template-compiler
##### 使用终端安装 vuejs 依赖
* 我们希望在项目中使用vuejs，就必须对其有依赖，所以需要先进行安装
* 注意：我们后续在实际项目中也会使用 vue ，所以并不是开发时依赖，而是全程依赖。 --save-dev 是开发时依赖，--save是全程依赖。
* vuejs 的安装：在父目录的终端中执行命令 `npm install vue@2.5.21 --save`
 ![](https://api2.mubu.com/v3/document_image/10558d10-48c2-4f20-8e69-fc8eb21df96d-11752736.jpg)
* 2.5.21版本搭配后面的 vue-loader 14以下的版本不会报错

##### 使用 vue 进行开发
* vue 使用前的必不可少的准备工作 （引入 vue依赖 并打包测试是否能够正常使用）
  * 如图，先 import 引入vue，再写入代码最后打包测试。
   ![](https://api2.mubu.com/v3/document_image/694afeb3-2a5f-4104-87a4-92e329acbb02-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/7c046610-64ae-448f-aef4-99bea00ff7c1-11752736.jpg)
  * 打包会可能出现的报错
   ![](https://api2.mubu.com/v3/document_image/ef9acada-566e-4dd5-92a1-a588acb04919-11752736.jpg)
  * 需要知道的知识： runtime-only，runtime-compiler
    * runtime-only 模式的 vue : 其代码中不可以有任何的 template
    * runtime-compiler 模式的 vue : 其代码中可以有 template，因为有 complier 可以用于编译 template
  * 报错的原因：我们使用的 vue 版本是 runtime-only 模式
  * 解决办法：在 webpack.config.js 中输入如图所示代码（注意其所处位置），再次打包即可解决。 ---- 图中代码的效果是将 vue 由 runtime-only 模式转换成了 runtime-only 模式
   ![](https://api2.mubu.com/v3/document_image/76647ebe-5d54-4908-bee3-ffa8ee8499ab-11752736.jpg)
  * 解决之后再次打包测试，成功后就能开始进行 vue 开发了。
* el 和 template 的关系 ---- 有 template 就呈现 template 的内容，没有 template 就呈现 el 的内容
  * 必须知道的知识： el 在 vue 的开发中是必不可少的，必须要挂载一个标签在html文件中作为呈现，否则 vue 的开发代码永远都是在 js 文件中，无法跑到 html 文件中呈现给客户。
  * 二者共存时，template 会替代 el 上挂载的标签，然后呈现在页面上。
   ![](https://api2.mubu.com/v3/document_image/a47fa967-9c85-4397-bb94-b1cd88e9037d-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/63fa1aeb-5fb2-4ad9-95ab-b1c58cb9446b-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/e6e5d801-16c7-461e-8883-35002853b74f-11752736.jpg)
  * 只有 el 时，直接呈现 el 挂载的信息
   ![](https://api2.mubu.com/v3/document_image/d4f22446-5a8a-44c0-8d9b-94e3e1611924-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/fcdbfc01-9fb5-467a-aff4-ef4920725d3d-11752736.jpg)
* .vue 文件的使用
  * 安装 loader 并测试确保能正常使用
  * 需要安装 loader : vue-loader、vue-template-compiler
  * 安装命令（在终端中执行）：`npm install --save-dev vue-loader@15.4.2` vue-template-compiler@2.5.21
  * @后面的数字是推荐版本
  * 安装完之后打包，报错（一）。
   ![](https://api2.mubu.com/v3/document_image/0d5b5fed-c8d1-44c4-a20b-c89249df2b4a-11752736.jpg)
    * 原因： vue-loader 版本在 14 之后要配合插件使用，我们只需要安装14之前的vue-loader的版本即可解决
    * 在package.json文件中将 vue-loader 版本改为13.0.0 。在终端执行命令npm install，此时 ^ 符号会自动为我们寻找一个合适的大于13小于14版本
     ![](https://api2.mubu.com/v3/document_image/f366bcd7-0d9f-4438-8609-fbbb5a3f776f-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/3322792a-6088-4d2e-98cd-1e82298cb7e9-11752736.jpg)
     ![](https://api2.mubu.com/v3/document_image/d36ae2ee-6fd8-4419-9956-531a3489d806-11752736.jpg)
    * 报错二
     ![](https://api2.mubu.com/v3/document_image/d112e36f-c6af-484e-94aa-4e386f487820-11752736.jpg)
      * mismatch 是不匹配的意思，就是不能搭配
      * 原因：vue 的2.6.14版本和vue-template-compiler 2.5.21版本不搭配，不能正常运行
      * 解决方法：将 vue 的版本降为2.5.21即可。
      * （1）先卸载原先版本的 vue 。 ---终端中执行命令：npm uninstall --save vue
      * （2）安装 2.5.21 版本的 vue 。 ---终端中执行命令：`npm install --save vue@2.5.21`
    * 安装完之后(版本图如下) ， 打包即可。
     ![](https://api2.mubu.com/v3/document_image/289c7407-731d-423d-95f6-a7eaa9189096-11752736.jpg)
  * .vue 文件里面引入.vue文件
    * 先创建好需要引入的.vue文件，然后用 import 引入 .vue 文件，再在 components处注册组件，最后在 template 标签里面写下 <组件名/> 标签 即完成引入。
     ![](https://api2.mubu.com/v3/document_image/f0129509-b998-46c1-b86b-2cb8e1960858-11752736.jpg)
    * 省略文件后缀名的方法
     ![](https://api2.mubu.com/v3/document_image/aadf8bac-a039-4e99-84c9-995a2a1add25-11752736.jpg)

### plugin 的引入 -- 扩展型插件
##### 认识plugin
* plugin 是什么？
  * plugin 是插件的意思，通常是用于对某个现有的架构进行的扩展
  * webpack中的插件，就是对webpack现有的功能的各种扩展，比如打包优化，文件压缩等等
* loader 和 plugin 的区别
  * loader 主要是用于转换某些类型的模块，它是一个转换器
  * plugin 是插件，它是对webpack本身的扩展，是一个扩展器

##### plugin 的使用过程
* 步骤一：通过npm安装需要使用的plugins （某些webpack已经内置的插件不需要安装）
* 步骤二：在webpack.config.js中的plugins中配置插件

##### 为打包的文件添加版权声明 --- BannerPlugin 插件
* 注意：BannerPlugin 是webapck自带的插件，只需要引入webpack模块即可。
* 添加webpack.config.js 文件的配置
  * 如图
   ![](https://api2.mubu.com/v3/document_image/8008c5e9-e0df-412b-bbdd-a30b13b4c505-11752736.jpg)
  * 效果
   ![](https://api2.mubu.com/v3/document_image/3aacffb6-6743-45b9-9ae6-d928c0ffa546-11752736.jpg)

##### 打包 html 文件 --- html-webpack-plugin 插件
* 安装 html-webpack-plugin 插件
  * 执行命令：`npm install html-webpack-plugin@3.2.0 --save-dev`
  * 3.2.0 版本测试是不会出问题的。高版本可能会出现问题
* 在webpack.config.js中添加配置
  * 添加图中配置即可实现插件的功能
   ![](https://api2.mubu.com/v3/document_image/7cf6bef3-b89a-4161-ac7e-de4472121d21-11752736.jpg)
* 打包测试结果：
 ![](https://api2.mubu.com/v3/document_image/2f75b49c-847e-402b-bff9-ad31dd703282-11752736.jpg)
* 【好的方面】在 dist 文件夹自动生成 index.html 文件用来展示；自动生成script标签并引入js文件。
* 【需要修改的方面】生成的 html 文件中，缺少了 vue 挂载内容的 id 为 app 的 div 标签；script 标签中中 src 路径包含着dist/ (此处的dist/可以不要，因为已经是在同一个文件夹中了)
* 解决方法：(1)给 HtmlWebpackPlugin 赋一个参数，打包时会以这个为模板打包；(2)去掉publicPath 键值对即可。
 ![](https://api2.mubu.com/v3/document_image/d04f5a33-bbfb-437c-835e-51e3f6f27d2a-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/a5fe65ba-1a05-46af-a2b0-c70fc70797a7-11752736.jpg)

##### 压缩 js 文件 --- uglifyjs-webpack-plugin 插件
* 安装插件：`npm install uglifyjs-webpack-plugin@1.1.1 --save-dev`
  * 这里使用的版本时1.1.1，是为了和CLI2保持一致
* 添加webpack.config.js 的配置
  * 如图，引入模块后new一下初始化即可。
   ![](https://api2.mubu.com/v3/document_image/78553c1a-d4d0-41b0-a6fb-70310f863514-11752736.jpg)

##### 搭建本地服务器 ---devserver 插件
* webpack提供了一个可选的本地开发服务器，这个服务器基于nodejs搭建，内部使用的是express框架，可以实现我们想要的让浏览器自动刷新我们修改后的结果。
* 【安装插件】不过它是一个独立的模块，在webpack中使用之前需要先安装它。 命令：`npm install --save-dev webpack-dev-server@2.9.1`
* 【添加 webpack.config.js 配置】
 ![](https://api2.mubu.com/v3/document_image/7da3c437-004a-47db-ab87-e434c047fcd6-11752736.jpg)
* 【设置快捷键】 我们在终端中使用命令，会从全局中寻找插件，如果不设置的话，会报错，因为dev-server插件安装在局部中
 ![](https://api2.mubu.com/v3/document_image/b7a5a428-c667-4dec-ba2e-b7a3737bc43f-11752736.jpg)
* 【运行本地服务器】 命令：npm run dev
* PS：自动跳转(浏览器)本地服务器页面
  * 在webpack-dev-server 后面加上--open
   ![](https://api2.mubu.com/v3/document_image/51021c41-f8ef-4f95-a07a-4fb007660a90-11752736.jpg)
   ![](https://api2.mubu.com/v3/document_image/d765bb21-c6a4-4d3a-a089-3ff060a7a20f-11752736.jpg)

##### webpack配置文件的分离 --- webpack-merge插件
* 先创建 base.config.js 文件，把webapck.config.js里所有的代码复制过来
 ![](https://api2.mubu.com/v3/document_image/1bb8e4d9-3a43-4c66-aa5a-6a61310720a6-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/eab56489-28da-4b57-bf8f-f702401c4840-11752736.jpg)
* 再创建 dev.config.js 文件，只留下本地服务器的配置，（开发有本地服务器就够 了）
 ![](https://api2.mubu.com/v3/document_image/5286e1b9-86e2-4097-856b-f37f3cf49377-11752736.jpg)
* 最后创建 prod.config.js 文件，只留下压缩 js 代码的插件配置
 ![](https://api2.mubu.com/v3/document_image/a11fb9a9-c4ca-43b4-a616-70ad4abea0e1-11752736.jpg)
* 【安装插件将 base.config.js 和 prod.config.js 合并】 webpack-merge插件
  * 执行命令：`npm install --save-dev webpack-merge@4.1.5`
  * 注意版本！！不建议随便改
* 【配置 prod.config.js 文件 】 合并得出产品
  * webpack-merge 将两个蓝框的内容联合在一起，成为了一个完整的配置，相当于webpack.config.js，成为了一个完整的产品
   ![](https://api2.mubu.com/v3/document_image/3d08a616-50f6-462d-a9bc-a4fa19eac080-11752736.jpg)
* 【配置 dev.config.js 文件 】
  * 配置前
   ![](https://api2.mubu.com/v3/document_image/302888d5-3844-4492-bea4-47a43269024f-11752736.jpg)
  * 配置后
   ![](https://api2.mubu.com/v3/document_image/132e48f6-d1f0-49b2-bed3-a129a43a2d76-11752736.jpg)
* 【删除 webpack.config.js 后快捷键失效】
  * 删除 webpack.config.js 后快捷键无法寻找到有效的路径(因为原来的默认路径终点文件webpack.config.js 已被删除)
  * 解决方法：在快捷键后面添加新的有效路径即可
    * 修改前
     ![](https://api2.mubu.com/v3/document_image/2941a512-bea3-40d3-af21-5838398ed952-11752736.jpg)
    * 修改后如图。build 对应的是打包，需要prod上线的配置，不需要本地服务器；dev 对应的是打开本地服务器，需要的是有本地服务器的配置。
     ![](https://api2.mubu.com/v3/document_image/d7e25e8a-00d3-43a5-ac07-95defd93bf80-11752736.jpg)
* 【打包后文件跑到 build 文件夹里面，且新建了一个dist文件夹】解决方法
  * 解决前
   ![](https://api2.mubu.com/v3/document_image/65fa4173-34c7-4d02-bad8-e9b7bce5580f-11752736.jpg)
  * 解决后。理由 ： ../ 能先返回上一层，然后再寻找dist文件夹。
   ![](https://api2.mubu.com/v3/document_image/96632514-6187-4ca5-a4bb-a33b543ff134-11752736.jpg)

##### 【补充】npm run build 和 npm run dev 的调用过程
* npm run build 的调用过程
 ![](https://api2.mubu.com/v3/document_image/f1bff279-a196-4773-8d44-deb7fce4db76-11752736.jpg)
* npm run dev的调用过程
 ![](https://api2.mubu.com/v3/document_image/cfb5f8f6-bcc5-4e63-a00b-5a1ae609eada-11752736.jpg)