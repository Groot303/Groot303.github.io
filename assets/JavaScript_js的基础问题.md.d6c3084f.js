import{_ as t,c as l,o as i,a as r}from"./app.0a72f3ba.js";const h=JSON.parse('{"title":"js的基础问题","description":"","frontmatter":{"title":"js的基础问题","categories":["JavaScript"],"tags":["js基础"],"sidebar":"auto"},"headers":[],"relativePath":"JavaScript/js的基础问题.md"}'),e={name:"JavaScript/js的基础问题.md"},o=r("<p>💥 <strong>深、浅拷贝</strong></p><p>1️⃣ 浅拷贝：拷贝了对象内存地址，当原对象发生变化的时候，拷贝对象也跟着变化</p><ul><li>Object.assign</li><li>slice(), concat()</li></ul><p>2️⃣ 深拷贝：是另外申请了一块内存，内容和原对象一样，更改原对象，拷贝对象不会发生变化。</p><ul><li>JSON.stringify()</li><li>_.cloneDeep()</li><li>jQuery.extend()</li><li>手写递归</li></ul><p>💥 <strong>new操作符实现原理</strong></p><ul><li>创建一个空对象</li><li>让空对象的原型指向构造函数的原型对象</li><li>将构造函数的this指向空对象</li><li>判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象</li></ul><p>💥 <strong>数组有哪些常用的方法</strong></p><ul><li>尾部：pop、push（可传入多个参数）</li><li>首部：shift、unshift、</li><li>数组拼接：concat ，返回的是拼接好的数组，不影响原数组</li><li>数组截取：slice，不影响原数组</li><li>数组插入：splice，影响原数组</li><li>查找特定项的索引：indexof、lastIndexOf</li><li>迭代方法：every、some、filter、map、forEach</li><li>数组归并：reduce、reduceRight</li><li>重排序：reverse、sort</li><li>数组和字符串的转换方法：toString、toLocalString、join（可以指定转为字符串时的分隔符）</li></ul><p>💥 <strong>什么是Dom和Bom</strong></p><ul><li>DOM ：文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。</li><li>BOM ：浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的方法法和接口。</li><li>BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。</li><li>window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。</li></ul><p>💥 <strong>ajax的理解</strong></p><ul><li>从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，不重新加载整个页面的情况下，更新部分网页的技术</li><li>创建XMLHttpRequest对象 --&gt; open() 方法与服务端建立连接 --&gt; send() 方法发送请求所需的内容 --&gt; onreadystatechange 事件监听服务器端与你的通信状态</li></ul><p>💥 <strong>js为什么要进行变量提升，导致了什么问题</strong></p><ul><li>解析和预编译过程中的声明提升可以提高性能，让函数可以在执行时预先为变量分配栈空间</li><li>声明提升还可以提高JS代码的容错性，使一些不规范的代码也可以正常执行</li><li>导致问题：经典计数问题</li></ul><hr><p>💥 <strong>数组的遍历方法</strong></p><table><thead><tr><th>方法</th><th>是否改变原数组</th><th>特点</th></tr></thead><tbody><tr><td>forEach</td><td>否</td><td>数组方法，不改变原数组，没有返回值</td></tr><tr><td>map</td><td>否</td><td>数组方法，不改变原数组，有返回值，可链式调用</td></tr><tr><td>filter</td><td>否</td><td>数组方法，过滤数组，返回包含符合条件的元素的数组，可链式调用</td></tr><tr><td>for...of</td><td>否</td><td>for...of遍历具有Iterator迭代器的对象的属性，返回的是数组的元素、对象的属性值，不能遍历普通的</td></tr><tr><td>every和some</td><td>否</td><td>数组方法，some()只要有一个是true，便返回true；而every()只要有一个是false，便返回</td></tr><tr><td>find和findIndex</td><td>否</td><td>数组方法，find()返回的是第一个符合条件的值；findIndex()返回的是第一个返回条件的</td></tr><tr><td>reduce和reduceRight</td><td>否</td><td>数组方法，reduce()对数组正序操作；reduceRight()对数组逆序操作</td></tr></tbody></table><p>💥 <strong>forEach 和 map 的区别</strong></p><ul><li>forEach()方法会针对每一个元素执行提供的函数，对数据的操作会改变原数组，该方法没有返回值；</li><li>map()方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值；</li></ul><p>💥 <strong>for...in 和 for...of 的区别</strong></p><ul><li>for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；</li><li>for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；</li><li>对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值</li></ul><p>💥 <strong>js类数组对象的定义</strong></p><p>1️⃣ 一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法</p><p>2️⃣ 类数组转化成数组的方法：</p><ul><li>Array.from ( arrayLike )</li><li>Array.prototype.slice.call ( arrayLike )</li><li>Array.prototype.splice.call ( arrayLike, 0 )</li><li>Array.prototype.concat.apply( [], arrayLike)</li></ul><p>💥 <strong>为什么argument是类数组，如何遍历类数组</strong></p><p>1️⃣ argument 是一个对象，有 callee 和 length 等属性，但却没有数组常见的方法，所以是类数组</p><p>2️⃣ 遍历类数组：</p><ul><li>Array.from ( arrayLike ) 先转化为数组</li><li>使用扩展运算符转换成数组</li><li>Array.prototype.forEach.call( arguments, a =&gt;console.log(a) )</li></ul><p>💥 <strong>如何判断一个对象是否属于某个类</strong></p><ul><li>instanceof</li><li>constructor：这种方式不是很安全，因为 constructor 属性可以被改写</li><li>Object.prototype.toString</li></ul><p>💥 <strong>js脚本延迟加载的方式</strong></p><p>延迟加载是等页面加载完成之后再加载 js 文件，</p><ul><li>defer：脚本的加载和文档解析同步进行，文档解析完后再执行脚本，设置了多个defer属性一般是顺序执行</li><li>async：会使脚本异步加载，但是当脚本加载完成后会立即执行脚本，会阻塞没解析完的dom</li><li>动态创建dom：对文档的加载事件进行监听，文档加载完成后再动态创建script标签引入脚本</li><li>js 放在文档底部，使 js 脚本在最后来加载</li></ul><hr><p>💥 <strong>ajax、axios、fetch的区别</strong></p><p>1️⃣ ajax缺点：</p><ul><li>本身是针对MVC编程，不符合前端MVVM的浪潮</li><li>基于原生XHR开发，XHR本身的架构不清晰</li><li>不符合关注分离的原则</li><li>配置和调用方式非常混乱，而且基于事件的异步模型不友好</li></ul><p>2️⃣ fetch的优点：</p><ul><li>语法简洁，更加语义化</li><li>基于标准 Promise 实现，支持 async/await</li><li>更加底层，提供的API丰富（request, response）</li><li>脱离了XHR，是ES规范里新的实现方式</li></ul><p>3️⃣ fetch的缺点：</p><ul><li>fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。</li><li>fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: &#39;include&#39;})</li><li>fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费</li><li>fetch没有办法原生监测请求的进度，而XHR可以</li></ul><p>4️⃣ axios：</p><ul><li>浏览器端发起XMLHttpRequests请求</li><li>node端发起http请求</li><li>支持Promise API</li><li>监听请求和返回</li><li>对请求和返回进行转化</li><li>取消请求</li><li>自动转换json数据</li><li>客户端支持抵御XSRF攻击</li></ul><p>💥 <strong>如何使用for...of遍历对象</strong></p><ul><li>如果是类数组就转化成数组</li><li>如果不是类数组对象，就给对象添加一个[Symbol.iterator]属性，并指向一个迭代器</li></ul>",47),s=[o];function a(n,p,d,c,u,f){return i(),l("div",null,s)}const _=t(e,[["render",a]]);export{h as __pageData,_ as default};
