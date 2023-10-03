# express 和 koa

## express基本使用

1、开启服务，处理跨域
2、处理不同请求方法，及其请求参数
3、处理上传文件
4、利用路由分离 api

- 搭建服务，使用相关的中间件处理一些问题
```js
// exportSever.js
const express = require("express")
const app = express()
const router = require("./router")

app.use((req, res, next) => {
    // 一次只能设置一个
    // res.setHeader()
    // 一次能设置多个
    res.header({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "GET,PUT,POST",
        // 额外的自定义请求头 允许跨域
        "Access-Control-Allow-Headers": "Content-Type"
    })
    next()
})

// 静态目录设置
app.use(express.static(__dirname + "/static"))

// 中间件处理请求体的 application/json 格式
app.use(express.json())
// 中间件处理请求体的 application/x-www-urlencoded 格式
app.use(express.urlencoded())


app.use("/", router)

// 当有多种 api 时，还指定 模块router
// app.use("/mode1", router1)
// app.use("/mode2", router2)

app.listen(3000, () => {
    console.log('监听3000端口。。。')
})
```

- 把 api 用 express.router 分离，防止 api 过多代码混乱，方便 api 书写维护

```js
// router.js
const express = require('express')
const router = express.Router()

const multer = require("multer")
// 解析文件，返回对象
const unloader = multer({
    dest: "uploader/"
})

// 处理 get请求
router.get('/getApi', (req, res) => {
    // get 请求参数req.query
    console.log("收到get请求", req.query)
    res.json({
        a: [1, 2]
    })
})
// 处理 post请求
router.post('/postApi', (req, res) => {
    // post 请求参数 req.body 需要中间件处理
    console.log('收到post请求', req.body)
    res.json({
        b: 8888
    })
})
// 返回文件
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
// 处理图片上传
router.post("/fileApi", unloader.single("file"), (req, res) => {
    console.log(req.body);
    res.json({
        msg: "文件已接收"
    })
})

module.exports = router 
```

## koa 基本使用

- koa 去掉了很多继承模块，所以更加轻量和灵活
- koa 的中间件工作方式有差异

```js
const koa = require("koa")
const app = new koa()
const router = require('./koarouter')

// 处理请求体需要引入另外的库
const { koaBody } = require("koa-body")

app.use(koaBody({
    json: true, // 默认true
    urlencoded: true, // 默认true
    multer: true // 文件处理
}))

app.use((ctx, next) => {
    ctx.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-Type",
    })
    // 如果不使用next，会直接在这个中间件中结束，不像 express 会一直停留在这层
    next()
})

app.use(router.routes())
app.listen(8888, () => {
    console.log("8888端口监听中。。。")
})
```

```js
// koarouter.js
// 处理路由
const koarouter = require('koa-router')
const router = new koarouter()
router.get('/getApi', (ctx, next) => {
    console.log(ctx.query, "--router")
    ctx.body = {
        a: 123
    }
})
router.post('/postApi', (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = "hello post -- router"
})
module.exports = router
```