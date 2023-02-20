---
title: vuex刷新页面状态丢失问题
categories:
 - Vuex
tags:
 - vuex

---

## 问题描述

- state 中有一个保存身份的变量 role，在用户登录成功时，会发送请求后台返回身份信息，进入首页后信息渲染出来；但是当用户刷新操作时，因为 JS 的数据都是保存在浏览器的堆栈内存里面的，刷新浏览器页面，以前堆栈申请的内存被释放，这就是浏览器的运行机制，那么堆栈里的数据自然就清空了；当页面刷新时，页面会重新加载vue实例，无论是组件中的 data 数据还是 vuex 中的 state 数据都会回到初始状态；
- 由于vue的响应式，页面对身份信息的渲染就没了，就像数据丢失了一样

## 解决办法

:one: **利用localStorage/sessionStorage本地存储一份**

- 这种方法解决了问题，但是如果用户手动删除了浏览器的缓存，也会清空。

:two: **刷新后重新发送请求**

- 这种方式减少了本地存储的使用，但是增加了请求的次数，遇到数据量大的时候一般使用这种方法

:three: **使用插件 vuex-persistedstate**

```js
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },

plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(val) {
      return { // 只储存state中的user 
        user: val.base
      }
    }
  })]
})

export default store;
```