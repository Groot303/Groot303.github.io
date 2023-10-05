# axios 二次封装

## 基本的全局配置

```js
// axios.js
// 一、基本配置
let request = axios.create({
    baseURL: "http://loacalhost:5000",
    timeout: 30 * 1000,
    headers: {}
})
```

## 添加 token、密钥及，响应的统一基本处理

```js
// axios.js
// 二、拦截器请求头添加 token
request.interceptors.request.use((config) => {
    let token = loaclStorage.getItem("token")
    if (token) {
        config.headers.Authorization.token = token
    }
    return config
}, (error) => {
    Promise.reject(new Error(error))
})
request.interceptors.response.use((res) => {
    const status = res.data.code || 200
    const message = res.data.msg || "未知错误"
    if (status === 401) {
        console.log("你没有权限")
        router.push("/login")
    }
    if (status !== 200) {
        return Promise.reject(new Error(message))
    }

    return res

}, (error) => {
    return Promise.reject(new Error(error))
})
```

## 把 api 封装请求方法

- 比较好的方法是一个模块的请求独立成一个个文件且请求都封装成一个个方法, 这样做到的好处是方便管理每一个模块的请求，并且使用请求时只需要传入参数即可，不用在vue文件中传其他配置

```js
// login.js
// 把对接口的请求封装成方法
export function login() {
    return request({
        url: "/login",
        method: "get",
        params: {}
    })
}
```

## 其他

- 频繁提交
- 缓存数据 
    - 因为把数据缓存在内存中，所以一旦数据改变了，那获取新的数据就需要刷新页面；个人觉得存一些改变周期比较长的数据比较好一点，因为通过 map 以 url 为键，所以可以通过筛选 url 来进行过滤

```js

// 这个文件主要对 request 做一些附加操作,考虑封装的健壮性（加的功能可以随时去掉）

import request from "../axios";

const myrequest = (function () {
    // 利用闭包保存数据，防止垃圾回收
    let requestUrlArr = []
    return function (config) {
        let requestUrl = config.url
        if (requestUrlArr.indexOf(requestUrl) !== -1) {
            return Promise.reject({ msg: "请求已发送" })
        }
        requestUrlArr.push(requestUrl)
        return request({
            ...config
        }).then((res) => {
            requestUrlArr.filter((item) => {
                return item !== requestUrl
            })
            return res
        })
    }
})()

// 一个好的封装要能够支持我不想要其他操作的时候可以轻松不要，做法就是暴露多种选择
export {
    request as initRequest,
    myrequest as request
}

```