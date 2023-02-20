---
title: vue-router基础知识
categories:
 - Vue-router
tags:
 - vue-router

---

## 全局路由钩子
- router.beforeEach 全局前置守卫，进入路由之前，<font color= red> 可用于登录验证、全局路由loading 、路由拦截</font>等
- router.beforeResolve 全局解析守卫，在 beforeRouteEnter 之后调用
- router.afterEach 全局后置钩子，进入路由之后

## 单个路由独享钩子
- router.beforeEnter()

## 组件内的钩子
- beforeRouteUpdate、
- beforeRouteEnter：路由组件的组件进入路由前钩子
- beforeRouteLeave：路由组件的组件离开路由前钩子，可取消路由离开

## 完整的导航解析流程（假设是从a组件离开，第一次进入b组件）

1. 导航被触发。
2. 在失活的组件里调用 <font color= red>**beforeRouteLeave** </font> 守卫。
3. 调用 <font color= red>**全局的beforeEach** </font> 守卫。
4. 在重用的组件里调用 <font color= red>**beforeRouteUpdate** </font> 守卫(2.2+)。
5. 在路由配置里调用 <font color= red>**beforeEnter** </font>。
6. 解析异步路由组件。
7. 在被激活的组件里调用 <font color= red>**beforeRouteEnter** </font>。
8. 调用全局的<font color= red>**beforeResolve** </font>  守卫(2.5+)。
9. 导航被确认。
10. 调用全局的 <font color= red>**afterEach** </font>  钩子。

:boom: <font color= purple>**beforeCreate** </font>

:boom: <font color= purple>**created** </font>

:boom: <font color= purple>**beforeMount** </font>

:boom: <font color= purple>**deactivated** </font>：离开缓存组件a，或者触发a的 beforeDestroy 和 destroyed 组件销毁钩子

:boom: <font color= purple>**mounted** </font>

:boom: <font color= purple>**activated** </font>

11. 触发 DOM 更新
12. 调用<font color= red>**beforeRouteEnter** </font>  中 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。


## hash/history区别
1. hash 
  + 有#，hash值出现在url中，但是不会出现在http请求中，所以改变hash值不会重新加载页面，兼容性好
  + hash符号之前的url会被包含在请求中，后端没有做到对路由的全覆盖也不会出现404
  + 主要原理是onhashchange事件
2. history 
  + 无#，前端的url必须和发送http请求的url一致才行。如果没有相应的路由和资源就会出现404
  + pushState() 和 replaceState() 可以做到改变url但又不刷新页面的效果。

## hash和query的位置
- hash在query的后面 
  + ?search=a这种叫query，#hash叫fragment。
  + query的规定是以第一个?开始，至行尾或#结束。
  + fragment以#为开始，行尾为结束。
## params和query的区别
- 用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是 this.$route.query.name 和 this.$route.params.name 。
- url地址显示：query更加类似于ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示
- 注意：query刷新不会丢失query里面的数据 params刷新会丢失 params里面的数据

## 如何获取页面的hash变化
- 用watch监听$route的变化
- window.location.hash读取#值 window.location.hash 的值可读可写，读取来判断状态是否改变，写入时可以在不重载网页的前提下，添加一条历史访问记录
Vue-router跳转和location.href有什么区别