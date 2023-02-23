# html5知识总结

## 一些HTML5的新标签。
1. `<article>`用来定义独立的内容
2. `<audio>`用来定义声音内容
3. `<canvas>`用来定义图形
4. `<header>`用来定义页眉
5. `<footer>`用来定义页脚
6. `<nav>`用来定义导航链接
7. `<video>`用来定义视频

## HTML5的一些新特性。
1. canvas：HTML5的一个新元素，它使用JavaScript在网页上绘制图形。
2. video和audio：用于视频和音频的播放。
3. 本地离线存储：localStorage长期存储数据，`浏览器关闭后数据不丢失`。sessionStorage的数据在`浏览器关闭后自动删除`。
4. 新的结构标签：语义化更好的内容元素，比如article，footer，header，nav，section。
5. 增强表单：input的type属性值新增calendar,date,time,email,url等。
6. 新的技术webworker，websockt，Geolocation

## HTML5增强表单中新的输入类型属性
1. search：用于搜索域，比如站点搜索或Google搜索，域显示为常规的文本域。
2. url：用于应该包含URL地址的输入域在提交表单时，会自动验证url域的值。
3. email：用于应该包含e-mail地址的输入域，在提交表单时，会自动验证email域的值。
4. datetime：选取时间、日、月、年（UTC时间）。date：选取日、月、年month：选取月、年。week：选取周和年。
5. time：选取时间（小时和分钟）。
6. datetime-local：选取时间、日、月、年（本地时间）。
7. number：用于应该包含数值的输入域，您还能够设定对所接受的数字的限定。
8. range：用于应该包含一定范围内数字值的输入域，类型显示为滑动条。

## cookie、localstroage、sessionStorage的区别？优缺点？
##### cookie：
- 是服务器发给客户端的特殊信息，以文本形式存储在客户端，每次请求都会带上cookie。
- 保存时间：设置过期时间，浏览器关闭后不会清除，保存在硬盘中,过期时间到期后失效。如果不设置过期时间，保存在内存中,浏览器关闭后消失。
- 缺点：
1. 大小受限，单个cookie大小不能超过4kb
2. 用户可以禁用cookie,使功能受限。
3. 安全性较低，有些状态不能保存在客户端。
4. 每次访问都要传送cookie给服务器，浪费带宽。
5. cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下。
##### localStorage和sessionStorage:
- 存储大小都是5MB，都保存在客户端不与服务器端进行交互，只能储存字符串类型，对于复杂的json格式可以进行stringify和parse来处理。
- 区别是localStorage是永久储存,除非主动删除,否则不会消失；而sessionStroage的有效期只是网页在浏览器打开到关闭的时间段。

## html标签中的src和href的区别？
- href是超文本引用，它是指向资源的位置，建立与目标文件的联系
- src目的是把资源下载到页面中浏览器解析
- href不会阻塞对文档的处理（这就是官方建议使用link引入而不是@import的原因），src会阻塞对文档的处理。

## html页面渲染过程
1. 解析html文件，创建dom树
2. 解析css，形成css对象模型
3. 将css与DOM合并，构建渲染树
4. 布局和绘制重绘：
重绘：是改变不影响元素的网页中的位置的元素样式（重绘不会带来重新布局，所以并不一定伴随重排）
重排：渲染绘制，即根据计算好的信息绘制整个页面，渲染出最终的页面。重绘不一定需要重排，重排必然导致重绘

## script标签中defer和async的区别
##### defer：
1. 浏览器指示脚本在文档被解析后执行，script被异步加载后并不会立即执行，而是等待文档被解析完毕后执行
```js
<script type="text/javascript" src="x.min.js" defer="defer"></script>
```
2. `defer只适用于外联脚本`，如果script标签没有指定src属性，只是内联脚本，不要使用defer
3. 如果有多个声明了defer的脚本，则会按顺序下载和执行
4. defer脚本会在DOMContentLoaded和load事件之前执行
##### async
1. 同样是异步加载脚本，区别是脚本加载完毕后立即执行，这导致async属性下的脚本是乱序的，对于script又先后依赖关系的情况，并不适用
```js
<script type="text/javascript" src="x.min.js" async="async"></script>
```
2. `只适用于外联脚本`，这一点和defer一致如果有多个声明了async的脚本，其下载和执行也是异步的，不能确保彼此的先后顺序
3. async会在load事件之前执行，但并不能确保与DOMContentLoaded的执行先后顺序