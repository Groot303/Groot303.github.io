---
title: js的基础问题
categories:
 - JavaScript
tags:
 - js基础
sidebar: auto
---

# {{ $frontmatter.title }}
:boom: 事件模型
+ 事件流：捕获、目标、冒泡阶段
+ 事件模型：事件捕获和事件冒泡

:boom: 事件捕获和事件冒泡
+ 微软提出事件冒泡，网景提出事件捕获，后面统一成先捕获再冒泡，由第三个参数决定在什么阶段执行
```js
  btn1.addEventListener('click',function (){
    alert('btn1')
  },true)
  //true是捕获执行，false是冒泡执行，默认是false
```
+ 事件代理的作用就是方便为多个列表绑定事件，还有动态创建列表时候不用绑定和解绑事件
+ 如果一个元素同时绑定了两个事件，既有冒泡事件，又有捕获事件时，应该执行几次，先后顺序是什么？
  + 1.如果多次绑定事件的元素是目标元素，且都是冒泡执行（或者都是捕获执行）的话，那么执行时就按照代码顺序执行（注意：这里说的按照绑定顺序执行是指利用addEventListener来绑定事件的；如果是利用attachEvent来绑定事件的，就是以绑定时的相反顺序执行），其他元素就按照先捕获后冒泡的顺序执行。
  + 2.如果多次绑定事件的元素不是目标元素，先捕获，后目标元素，最后冒泡

:boom: 阻止事件冒泡
```js
e.stopPropagation(); // 标准写法
e.cancelBubble = true // ie6-8 利用这个属性
// 两个结合可以解决兼容性
```

:boom: 事件流模型的应用
- 事件委托（也叫事件代理）：指的是利用事件冒泡原理，只需给外层父容器添加事件，若内层子元素有点击事件，则会冒泡到父容器上，这就是事件委托，简单说就是：子元素委托它们的父级代为执行事件。

:boom: **深、浅拷贝**

:one: 浅拷贝：拷贝了对象内存地址，当原对象发生变化的时候，拷贝对象也跟着变化
- Object.assign
- slice(), concat()

:two: 深拷贝：是另外申请了一块内存，内容和原对象一样，更改原对象，拷贝对象不会发生变化。
- JSON.stringify()
- _.cloneDeep()
- jQuery.extend()
- 手写递归

:boom: **new操作符实现原理**
- 创建一个空对象 
- 让空对象的原型指向构造函数的原型对象
- 将构造函数的this指向空对象 
- 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象


:boom: **什么是Dom和Bom**
- DOM ：文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。
- BOM ：浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的方法法和接口。
- BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。
- window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。

:boom: **ajax的理解**
- 从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，不重新加载整个页面的情况下，更新部分网页的技术
- 创建XMLHttpRequest对象 --> open() 方法与服务端建立连接 --> send() 方法发送请求所需的内容 --> onreadystatechange 事件监听服务器端与你的通信状态

:boom: **js为什么要进行变量提升，导致了什么问题** 
- 变量提升可以**提高性能**和**容错率**
- 解析和预编译过程中的声明提升可以提高性能，让函数可以在执行时预先为变量分配栈空间（不用再去解析获取代码中声明了那些变量和函数）
- 声明提升还可以提高JS代码的容错性，使一些不规范的代码也可以正常执行
- 导致问题：变量覆盖（没有块级作用域）

---------------









:boom: **forEach 和 map 的区别**

- forEach()方法会针对每一个元素执行提供的函数，对数据的操作会改变原数组，该方法没有返回值；
- map()方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值；

:boom: **for...in 和 for...of 的区别**

- for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
- for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
- 对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值

:boom: **js类数组对象的定义**

:one:  一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法

:two:  类数组转化成数组的方法：
- Array.from ( arrayLike ) 
- Array.prototype.slice.call ( arrayLike )
- Array.prototype.splice.call ( arrayLike, 0 )
- Array.prototype.concat.apply( [],  arrayLike)

:boom: **为什么argument是类数组，如何遍历类数组**

:one: argument 是一个对象，有 callee 和 length 等属性，但却没有数组常见的方法，所以是类数组

:two: 遍历类数组：
- Array.from ( arrayLike ) 先转化为数组
- 使用扩展运算符转换成数组
- Array.prototype.forEach.call( arguments, a =>console.log(a)  )

:boom: **如何判断一个对象是否属于某个类**

- instanceof
- constructor：这种方式不是很安全，因为 constructor 属性可以被改写
- Object.prototype.toString.call()

:boom: **js脚本延迟加载的方式**

  延迟加载是等页面加载完成之后再加载 js 文件， 
- defer：脚本的加载和文档解析同步进行，文档解析完后再执行脚本，设置了多个defer属性一般是顺序执行
- async：会使脚本异步加载，但是当脚本加载完成后会立即执行脚本，会阻塞没解析完的dom
- 动态创建dom：对文档的加载事件进行监听，文档加载完成后再动态创建script标签引入脚本 
- js 放在文档底部，使 js 脚本在最后来加载


------------- 


:boom: **ajax、axios、fetch的区别**

:one: ajax缺点：
  - 本身是针对MVC编程，不符合前端MVVM的浪潮
  - 基于原生XHR开发，XHR本身的架构不清晰
  - 不符合关注分离的原则
  - 配置和调用方式非常混乱，而且基于事件的异步模型不友好

:two: fetch的优点：
  - 语法简洁，更加语义化
  - 基于标准 Promise 实现，支持 async/await
  - 更加底层，提供的API丰富（request, response）
  - 脱离了XHR，是ES规范里新的实现方式

:three: fetch的缺点：
  - fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
  - fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
  - fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费	
  - fetch没有办法原生监测请求的进度，而XHR可以

:four: axios：
  - 浏览器端发起XMLHttpRequests请求
  - node端发起http请求
  - 支持Promise API
  - 拦截请求和响应
  - 取消请求
  - 自动转换json数据
  - 客户端支持抵御XSRF攻击


:boom: **如何使用for...of遍历对象**
- 如果是类数组就转化成数组
- 如果不是类数组对象，就给对象添加一个[Symbol.iterator]属性，并指向一个迭代器