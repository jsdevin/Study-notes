# flex 布局

### 认识flex 布局

  * 两个重要概念

    * 开启了 flex 布局的元素叫flex container
    * flex container 里面的直接子元素叫做flex items
  * 设置 display 属性为 flex 或者 inline-flex 可以成为 flex container

    * 设置为 flex ： flex container 以 block-level 形式存在 --块元素
    * 设置为 inline-flex ： flex container 以 inline-level 形式存在 ---同行元素

### flex 布局模型

  * 主轴 main axis --- 默认是水平向右
  * 交叉轴 cross axis --- 默认是竖直向下的
  * 主轴和交轴的初始方向都是可以人为改变的，使用的是flex-direction 属性

### 【父】flex container 相关属性

1. flex-direction --- 决定主轴的方向
    * flex-item 默认都是沿着主轴main start 开始往main end 方向排布
    * flex-direction 决定了主轴的方向，有四个取值
      * row --- 默认值，自左向右
      * row-reverse ---自右向左(reverse是相反的意思)
      * column --- 将主轴(main axis)由水平变成竖直，且是从上到下
      * column-reverse ---从下到上
  
2. Justify-content --- 决定了 flex items 整体在主轴上的对齐方式(理解为items整体贴在哪里的意思)

    * flex-start (默认值) ： 与 main start 对齐，也就是贴开始的地方

      ![](https://api2.mubu.com/v3/document_image/8fd478ba-5edf-4e3c-9c7d-85544e56ef44-11752736.jpg)
    * flex-end : 与main end 对齐，也就是贴末尾

      ![](https://api2.mubu.com/v3/document_image/dd750d94-fbcd-48d4-9ab3-804b5760c783-11752736.jpg)
    * center : 居中对齐，效果和margin : 0 auto相同，但这个flex更加便捷

      ![](https://api2.mubu.com/v3/document_image/4c3a69e1-764e-4198-afaf-4a751f557d45-11752736.jpg)
    * space-between ：flex item 之间距离相等，贴紧两端

      ![](https://api2.mubu.com/v3/document_image/4e29d4b1-bf96-4563-bf5b-cd04f109f9ab-11752736.jpg)
    * space-evenly ： flex item 之间距离相等，不贴紧两端，但等分空白处

      ![](https://api2.mubu.com/v3/document_image/ac1ba8d0-1d2c-48fa-bc3e-64f26cbe4bc7-11752736.jpg)
    * space-around ： flex item 之间距离相等，不贴紧两端，(每个)flex-item相互之间的空白距离是flex-item 与main start、main end的二倍

      ![](https://api2.mubu.com/v3/document_image/e617314c-13b8-42c2-993a-7f3e5b6aa74d-11752736.jpg)
    * 总览

      ![](https://api2.mubu.com/v3/document_image/148ba2af-1b65-4e6e-90d1-0733ba40b3e7-11752736.jpg)
3. align-items --- 决定了 flex item 在cross axis (交叉轴)上的对齐方式

    * stretch : 当flex item在交叉轴方向的size为auto时，会自动拉伸至填满 flex container
    * normal : 在弹性布局中，效果和stretch一样
      ![](https://api2.mubu.com/v3/document_image/06a5b40d-9d1b-45a2-b3dc-f540aaa41f29-11752736.jpg)
    * flex-start ： 与 cross start 对齐

      ![](https://api2.mubu.com/v3/document_image/94759d96-6a9f-4d38-b692-05bf55c1e1c3-11752736.jpg)
    * flex-end ： 与 cross end 对齐

      ![](https://api2.mubu.com/v3/document_image/ba4c3fb4-0210-4903-9303-b601591c6059-11752736.jpg)
    * center ： 居中对齐

      ![](https://api2.mubu.com/v3/document_image/f4f3aa8c-ed30-45ea-bb33-d899de8fddf4-11752736.jpg)
    * baseline ： 与第一行最下面的基准线对齐

      ![](https://api2.mubu.com/v3/document_image/f48ca431-1e8b-49d0-a4e5-370ff09b5466-11752736.jpg)
    * 总览

      ![](https://api2.mubu.com/v3/document_image/b8280fd2-68c5-4452-84da-a6af9a817adc-11752736.jpg)
4. flex-wrap --- 决定 flex container 是单行还是多行

    * nowrap ：单行(强制所有内容都在一行)

      ![](https://api2.mubu.com/v3/document_image/2eb0d680-3a93-426a-8d6c-a9906056c826-11752736.jpg)
    * wrap ：多行

      ![](https://api2.mubu.com/v3/document_image/28c7387f-de78-4f09-921a-36effaf7de94-11752736.jpg)
    * wrap-reverse : 多行，但是交叉轴反向

      ![](https://api2.mubu.com/v3/document_image/51ebda76-3346-4747-8138-c3eeaee4d56e-11752736.jpg)
5. flex-flow --- 是flex-direction 和 flex-wrap的缩写

    * 两个值，分别是设置flex-direction(设置主轴方向)的值和设置flex-wrap(决定单行\多行)的值，不分先后顺序。

      ![](https://api2.mubu.com/v3/document_image/39e0e19c-69d3-4525-880f-45a6bcd38c62-11752736.jpg)
6. align-content --- 决定了 flex items 整体在交叉轴上的对齐方式

    * 用法和 Justify-content 相同，可以对应着看 Justify-content 的值

      ![](https://api2.mubu.com/v3/document_image/ee53ff40-c56e-4f2e-8699-179760fead6a-11752736.jpg)
    * 初始状态

      ![](https://api2.mubu.com/v3/document_image/b0b348f3-1689-4ebd-843a-309c8ce914f8-11752736.jpg)
    * flex-start

      ![](https://api2.mubu.com/v3/document_image/8f357572-2d5b-4c85-a483-34fb89a471f0-11752736.jpg)
    * flex-end

      ![](https://api2.mubu.com/v3/document_image/73997bc7-4490-4daa-b05a-37b03d8561cf-11752736.jpg)
    * center

      ![](https://api2.mubu.com/v3/document_image/4b8271b8-c7c2-43c8-b578-d2aebc6ae9f3-11752736.jpg)
    * space-between

      ![](https://api2.mubu.com/v3/document_image/d210c31e-2beb-4dff-b2e8-120e3c219510-11752736.jpg)
    * space-around

      ![](https://api2.mubu.com/v3/document_image/98a8e410-27a6-4be9-a087-e6013fc9fb00-11752736.jpg)
    * space-evenly

      ![](https://api2.mubu.com/v3/document_image/ce51d1b4-e7c6-4a18-9546-731a3a1be520-11752736.jpg)
    * 总览

      ![](https://api2.mubu.com/v3/document_image/74144c2f-367a-4b38-95eb-aaec12bae6b4-11752736.jpg)
      ![](https://api2.mubu.com/v3/document_image/24c963fa-6b5f-4057-a1b5-c569b21e5f81-11752736.jpg)
### 【子】flex items 相关属性

1. align-self --- 设置单个 item 在交叉轴上的对齐方式

     * item 设置的对齐方式会覆盖container设置的，它的值和 align-items 的值一样，效果也一致

       ![](https://api2.mubu.com/v3/document_image/64334e03-a3ba-46e6-8c06-be52fcad0d54-11752736.jpg)
     * (stretch) 默认状态，会继承flex container 的 align-items设置的值。

       ![](https://api2.mubu.com/v3/document_image/709dea5c-807a-46b9-b3e1-4700e7677a58-11752736.jpg)
     * 下面的都是对第二个 item 设置 align-seft 属性
     * flex-start

       ![](https://api2.mubu.com/v3/document_image/a018a488-c17c-4e28-915f-2178c5a6f7e3-11752736.jpg)
     * flex-end

       ![](https://api2.mubu.com/v3/document_image/10b84ac5-5ce9-4f57-b5ce-4216bf425918-11752736.jpg)
     * center

       ![](https://api2.mubu.com/v3/document_image/d9414ede-3f48-464d-9a5a-04f60bdec50b-11752736.jpg)
     * baseline

       ![](https://api2.mubu.com/v3/document_image/9d400cb7-8d42-4850-b248-8c641a5ce38c-11752736.jpg)
2. flex-grow --- 决定了item如何扩展(item如何占据主轴方向上剩余的空白空间)

     * flex-grow 的值是非负数，可以为正整数或者正小数，默认值为0
     * 注意：只有在主轴方向上有空白空间时，flex-flow 才能产生效果
     * 如果 items 的 flex-grow 的值的总和sum大于1，那每个item 最终的宽度值 = 原来的 + 剩余的/*(自己的grow值/sum)

       * 其实就是原来的+等比例分得的。原先每个item的宽度为100px，剩余100px空白，这里代码flex-grow 的值是1，3，1，那分配就按照1：3：1

         ![](https://api2.mubu.com/v3/document_image/6bd6c3ed-880c-454e-b6a2-159c19e1ba32-11752736.jpg)
     * 如果 items 的 flex-grow 的值的总和sum 小于1，那每个item最终的宽度值 = 原来的 + 剩余的/*自己的grow值。 --- 这种小于1的情况分完之后还会有剩余的

       * 原先每个item的宽度为100px，剩余100px空白，这里 flex-grow 代码的小数分别是 0.1 ， 0.3 ， 0.3，则剩余空白为100/*(1-0.1-0.3-0.3)

         ![](https://api2.mubu.com/v3/document_image/d7fa307f-594b-46e1-84d7-f6f01615aab7-11752736.jpg)
     * flex-grow 设置是不会超过父元素的宽度的，最多就是等于父元素宽度
3. flex-shrink --- 决定 item 如何收缩

     * 和 flex-grow 一样，只是一个效果是扩展，一个效果是收缩

       ![](https://api2.mubu.com/v3/document_image/3d246192-60cc-4ddf-af2e-24a711ab2393-11752736.jpg)
     * 收缩的计算公式：最终的宽度 = 原来的宽度 - (超出父元素的宽度/*自己的felx-shrink的值所占的比例)

       * 首先我们先算出超出父元素的宽度 l1 = 300/*3-400 = 500px，以 item1 为例，其flex-shrink的值占所有item的flex-shrink的值的比例为 1/(1+2+2)，所以其只需要缩小超出宽度的1/5，也就是500/*(1/5) = 100px，最终 item 的宽度为 300 - 100 = 200px

         ![](https://api2.mubu.com/v3/document_image/b1dab42d-8b9b-4833-8a85-ed6fd315aede-11752736.jpg)
         ![](https://api2.mubu.com/v3/document_image/21f8c5fb-076d-4ff8-a96b-5ddc5b7e1f7d-11752736.jpg)
     * 未收缩前，单个item的宽度 300px

       ![](https://api2.mubu.com/v3/document_image/4225853a-c126-49de-8063-f5caed112b5c-11752736.jpg)
     * 按比例收缩，flex-shrink 的默认值是1
     * 多个item的宽度和大于父元素宽度时，如果不设置flex-shrink，会按照默认值1来等比例缩小

       ![](https://api2.mubu.com/v3/document_image/143dea98-a6d6-4228-8f89-61e635568f07-11752736.jpg)
     * flex-shrink值的和大于 1 （1：2：2）

       ![](https://api2.mubu.com/v3/document_image/ceeee17e-7fcc-4f4f-a580-5a3d59e4a90f-11752736.jpg)
     * flex-shrink值的和小于 1 。收缩比例小于1那不就是扩展吗？？？还用flex-shrink干嘛？？用flex-grow啊
### felx 布局到此结束。
目前浏览器兼容性方面对flex还是很友好的，css的布局先掌握flex较好。