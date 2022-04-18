## 环境准备
* 【安装 axios】 npm install axios@0.18.0 --save
* 【引入axios】 import axios from "axios"

## axios 的基本使用
* 语法：axios({接口}).then( res => {响应})
 ![](https://api2.mubu.com/v3/document_image/88dd5247-2b15-4cea-8d20-be929b9fe352-11752736.jpg)

## 利用axios发送并发请求
* 语法：axios.all([axios(接口网址1),axios(接口网址2)]).then(响应)
 ![](https://api2.mubu.com/v3/document_image/923e70ea-e405-468c-8e22-19bdbfe696e7-11752736.jpg)

## 全局配置
* 语法：axios.defaults.带配置的属性 = 配置的值
 ![](https://api2.mubu.com/v3/document_image/d8e4179f-3271-4723-9a9d-de1fb977686c-11752736.jpg)

## axios模块封装
* ppt文化
  ![](https://api2.mubu.com/v3/document_image/47e2d091-3fb8-453d-b4bf-aed97684ddef-11752736.jpg)
  ![](https://api2.mubu.com/v3/document_image/e2685ef1-adad-4c9a-b3db-fe92e8f80ade-11752736.jpg)
  ![](https://api2.mubu.com/v3/document_image/969ec2fc-5076-4e2f-ac10-d5e07ddf8392-11752736.jpg)
* 背景：因为 axios 是第三方库，存在不稳定性，如果我们每一个组件文件都引用axios，当axios库出现什么问题倒闭的时候，我们就要逐个逐个组件文件去修改axios的遗留代码。而且功能也要逐个逐个文件去用新的第三方库来写，这样就会留下极大的潜在问题。所以要将axios的代码封装到一个文件中，将来axios库出问题就只需要修改这个封装好的文件即可。

##### 如何创建axios实例？怎么使用axios实例？有什么好处？
* 创建-使用方法如图。好处：能独立出来，使用实例的时候url默认继承的是创建实例的时候的url，不是全局的url
 ![](https://api2.mubu.com/v3/document_image/85e2c34f-7029-4888-ae28-8e9355c467c0-11752736.jpg)

##### 【正式封装】这里的封装方式比ppt中的好
* 在request.js文件中封装axios，在main.js中使用封装的axios
 ![](https://api2.mubu.com/v3/document_image/9c1bc23b-ecae-4666-bdb6-d38ad2d3b517-11752736.jpg)
 ![](https://api2.mubu.com/v3/document_image/cfc3fc1f-eac3-487c-93c4-f7b4aaf891f1-11752736.jpg)

## axios 拦截器
* ppt
 ![](https://api2.mubu.com/v3/document_image/163280113585448a6.jpg)
* 使用axios拦截器，可以在发送请求时拦截，也可以在发送请求成功后的响应时拦截。
  * 发送请求时拦截会有两种结果：一种是发送请求成功后被拦截，一种是发送请求失败后被拦截
  * 响应时拦截会也会有两种结果：一种是响应成功后拦截，一种是响应失败后拦截
* 拦截的目的，就是对一些数据的增删改查。比如发送成功后，被拦截下来，就可以进行一些数据的改变，数据的更新，再return出去和别人进行响应，就实现了数据的增删改查。
* 如何使用拦截器
 ![](https://api2.mubu.com/v3/document_image/725ba342-5184-4d3c-8e65-c3cacaa2d570-11752736.jpg)