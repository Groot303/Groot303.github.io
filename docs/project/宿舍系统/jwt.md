---
title: cookie、session、token、jwt的区别
categories:
 - 浏览器原理
tags:
 - cookie、session、token

---

# {{ $frontmatter.title }}
## 场景
- 当我们在登录一个网站后，在很长一段时间内都不用再次输入用户名和密码进行登录操作。因为http是无状态的，当我们关闭网页再次访问时，服务器是意识不到又是你访问了。所以服务器要做到知道是谁访问我这个功能，就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。核心就是存储！

## cookie
- 用户可以自己选择是否记住账号密码，虽然不用用户自己输入账号密码，但是浏览器也需要在我们每次访问这个网站的时候帮我们在请求中加入账号密码。这时候就可以利用cookie实现

- cookie是不可跨域的，每个cookie都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是domain）

- 当用户发起http请求时，服务器会进行cookie设置（Set-Cookie）保存用户名和密码返回给浏览器，浏览器进行存储，在下一次发请求时，浏览器会自动带上用户名和密码发送http请求。

- 因为用户信息直接存储在浏览器中是很不安全的所以出现了 **session**

## session

- 用户请求时，服务器会创建一个 `Session ID` 和 `会话结束时间`，服务器会把这些返回给客户端，客户端把它们存入到cookie中，并把会话结束时间设置为这个cookie的有效期，这时候浏览器没有保存用户名和密码，只是保存了 Session ID 和 结束时间。

- 相对于直接把用户信息存在浏览器，session 更加安全，因为 session ID 是一串无规律的字符.

- 但是当同一时间大量用户访问同一个网站时，服务器就可能面临着需要存储大量的Session ID而过载崩溃的情况，于是出现了`jwt`


:boom: cookie和session区别

|           |cookie     |session|
|---        |---        |----   |
|安全性|  存在客户端      |存在服务端|
|存储大小|不超4k| 比cookie大|
|存储类型不同|只支持字符串，其他类型要转换|可以存任意值|

## token
- 组成：uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）

- 客户端使用用户名跟密码请求登录，服务端验证成功后，会签发一个 token 并把这个 token 发送给客户端，客户端存起来
- 每一次请求都需要携带 token，需要把 token 放到 HTTP 的 Header 里
- 基于 token 的用户认证是一种服务端无状态的认证方式，服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库
- token 完全由应用管理，所以它可以避开同源策略

## JWT(json web token)
    
:boom: JWT 的原理是

- 服务器认证以后，生成一个 JSON 对象，发回给用户；以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名

- 服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展

:boom: JWT组成： 

- header（头部）：一个 JSON 对象，描述 JWT 的元数据，这个 JSON 对象会使用 Base64URL 算法转成字符串

- payload（负载）：JSON对象，存放实际需要传递的数据，这个 JSON 对象也要使用 Base64URL 算法转成字符串

* signature（签名）：前两部分的签名，防止数据篡改

:boom: 使用方式：

- 客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。
- 此后，客户端每次与服务器通信，都要带上这个 JWT。你可以它放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP 请求的头信息Authorization字段里面。
```js
Authorization: Bearer <token>
```
- 另一种做法是，跨域的时候，JWT 就放在 POST 请求的数据体里面。

:boom: JWT的特点

- JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑

- JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证


:boom: token 和 jwt 的区别
- Token：服务端验证客户端发送过来的 Token 时，还<font color= red>需要查询数据库获取用户信息 </font>，然后验证 Token 是否有效。
- JWT： 将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，<font color= red> 不需要查询或者减少查询数据库 </font>，因为 JWT 自包含了用户信息和加密的数据。
