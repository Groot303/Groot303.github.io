# web安全相关

## xss(Cross-Site Scripting，跨站脚本攻击)
##### xss是什么？
+ 本质是：恶意代码未经过滤，和正常的代码混在一起，浏览器无法分辨那些脚本是可信的，恶意代码被执行。由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，利用这些信息冒充用户向网站发起攻击者定义的请求。
##### xss的分类
1. 反射性xss（非持久） 
    - 攻击者把恶意脚本写在url中，引导用户点击url，服务端获取到恶意脚本返回，浏览器解析执行了正常脚本和恶意脚本
    -  防范：对url的查询参数进行转义后再返回浏览器
2. 存储型xss（持久） 
    -  在输入框中写入恶意脚本发送给服务端，服务端返回恶意脚本，浏览器解析执行，常见于发帖，评论，用户私信等功能
    -  防范：前端数据发送前先转义，服务端存入数据库前先转义，前端接收数据前先转义
3. dom型xss 
    -  其实就是js代码不够严谨，把恶意代码作为html使用.innerHTML、.outerHTML、.appendChild、document.write()等API插入到了页面中
    -  防范：对输入内容进行转义，尽量使用.innerText、.textContent、.setAttribute() 等
## CSRF（跨站点请求伪造）攻击
典型的攻击流程
1. 受害者登录a.com，并保留了登录凭证（Cookie）
2. 攻击者引诱受害者访问了b.com
3. b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带a.com的Cookie
4. a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求
5. a.com以受害者的名义执行了act=xx
6. 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作
特点
1. 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生
2. 攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据
3. 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”
4. 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪
CSRF的预防
1. 使用token，让用户的每次请求都携带token（攻击者无法获取到token）
2. Samesite Cookie属性：防止外域访问
## 跨域
- 跨域是因为浏览器的同源策略，浏览器阻止客户端和服务端通信的问题
- 请求跨域了，请求还是会正常发出，服务端也会正常返回结果，只是结果会被浏览器拦截。
##### 同源策略
- 协议、域名、端口三者都要相同，即使不同的两个域名指向的是同一个ip地址也是非同源，
- 主要限制三方面：
  -  当前域的 js 脚本不能访问其它域下的 cookie、localstorage和 indexDB
  -  当前域下的 js 脚本不能够操作访问其它域下的 Dom
  -  当前域下的 ajax 不能跨域请求
+ 同源策略的目的是为了保证用户的信息安全，是对 js 脚本的一种限制，而不是对浏览器的限制
##### 解决方案
- JSONP（JSON with padding）
    +  因为对于一般的 img、script、link 脚本请求都不会有跨域的限制，所以可以通过创建script ，请求一个带参网址实现跨域，后端获取前端声明的回调函数 handleCallback ，并调用执行的方式返回给前端
    + 优点：兼容性好
    + 缺点：仅支持 get 请求，可能会遭到 xss 攻击
```js
//前端代码
<script type="text/javascript">
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'http://www.domain.com/login?user=admin&callback=handleCallback'
    document.head.appendChild(script)

    function handleCallback(res) {
         console.log(res);
    }
</script>

//后端代码
const Koa = require("koa");
const fs = require("fs");
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path === "/api/jsonp") {
    const { callback , user } = ctx.query;
    ctx.body = `${callback}(${JSON.stringify({ msg })})`;
    return;
  }
});

app.listen(8080);
```
- CORS
    +  服务端设置Acess-Control-Allow-origin ，表示可以接收那些域名可以访问资源
    + cors又有 简单请求 和 复杂请求
- Nginx反向代理
