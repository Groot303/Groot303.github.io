---
title: vue基础知识
categories:
 - Vue2
tags:
 - vue2基础
---
# {{ $frontmatter.title }}

## computer和methods区别
- computed 计算属性 : 
  -  计算属性是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生变化时才会重新求值，多次访问该属性时，会返回之前的计算结果，不必再次执行函数。
  -  成员既可以定义成函数也可以定义成可读写的属性
  -  定义的成员像属性一样调用

- methods 方法：
  - 成员只能是函数的形式
  - 定义的成员要以函数形式调用
  - 无缓存，调用一次执行一次

```js
<input type="text" v-model="mathScore()"> //methods的调用
<input type="text" v-model="sumScore1">   //computer的调用
```
## computed和watch的区别
- computed 计算属性 : 
  + 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。
  + 不支持异步操作
- watch 侦听器 :
  + 允许执行异步操作
  + 不支持缓存，数据变化时，就会触发相应的操作
  + 监听的属性有三个配置：handle（newVal,  oldVal）、immediate、deep（默认为false）

## v-show和v-if
- v-if因为直接操作dom节点增加和删除，切花换开销更大，会触发生命周期钩子
- v-show只是简单的切换css，显示或者隐藏该元素，有更高的初始渲染消耗

## spa单页面应用
- 把多个页面的内容和逻辑都放到一个主页面中，根据路由的变化替换对应的内容和逻辑
- 缺点：首屏加载慢，seo难度大
## vue和传统项目开发的区别
1. 传统项目的开发是直接操作dom的
2. vue开发基本不操作dom，使用指令系统，根据表达式得值改变响应式得作用于dom
3. vue的界面事件都是操作数据，界面的变动都是因为数据发生改变引起
## 父子组件的生命周期
1. 渲染过程
- 父组件(beforeCreate) => 父组件(created) => 父组件(beforeMount) => 子组件(beforeCreate) => 子组件(created) => 子组件(beforeMount) => 子组件(mounted) => 父组件(mounted)
2. 子组件更新过程
- 父组件(beforeUpdate) => 子组件(updated)
3. 销毁过程
父组件(beforeDestroy) => 子组件(beforeDestroy) => 子组件(destroyed) => 父组件(destroyed)

## 组件间的通信方式
1. prop：父传子，子设置prop
2.  $emit ：子传父，子通过 $emit 触发自定义事件
3. ref：父使用子时，在子组件中设置ref，父通过 this.$refs.xxx 获取数据
4. EventBus：兄弟传值，发送用$emit，接收用 $on
5. provide 与 inject：祖先provide，后代inject
6. vuex


## 什么是组件化开发？为什么使用组件化开发？
1. 组件化开发就是把页面和处理页面的逻辑统一到一起实现开发的模式
2. 降低代码耦合度，在接口不变的情况下，可以替换其他的组件使用
3. 根据组件报错位置可以快速定位错误
4. 便于维护。组件在项目中是复用的，对代码的优化可以让整个项目升级

## Vue slot的传值
- 在子组件的插槽中中绑定一个属性，成为插槽prop，如
```js
  <span>
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
  </span>
```
- 在父级作用域中通过v-slot接收像这样：
```js
    <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
    </template>
```
## vue怎么做权限管理，控制到按钮级别的权限呢？
1. 接口权限 
  + 采用jwt的形式来验证，axios拦截token，带上token发请求
2. 按钮权限 
  + v-if判断
  + 通过自定义指令进行按钮权限判断
3. 菜单权限 
  + 菜单又后台返回，前端定义路由信息，然后全局路由判断
4. 路由权限 
  + 在路由上标记响应的权限信息，每次路由跳转前做校验

## 如何给spa做seo
1. ssr服务端渲染：将组件通过服务器生成html在返回给浏览器
2. 静态化：通过程序将动态页面抓取并保存为静态页面，这样页面存在于服务器的硬盘中
## spa解决首屏加载慢
- 减小入口文件体积（动态加载路由）
- 静态资源本地缓存 
  + 后端返回资源问题： 
    ⅰ. 采用HTTP缓存，设置Cache-Control，Last-Modified，Etag等响应头、
    ⅱ. 采用Service Worker离线缓存
  + 前端合理利用localStorage
- ui框架按需加载
- 图片资源的压缩（雪碧图或者在线字体图标）
- 组件重复打包
- 开启GZip压缩
- 使用ssr
## 组件data定义函数和对象的区别
- 根实例是单例所以可以是函数也可以是对象，不会产生数据污染
- 组件定义data必须是函数，防止多个实例对象共用一个data，产生数据污染
- 采用函数形式返回的是一个全新的data对象，不会指向同一个内存地址
## vue中给对象添加新属性界面没反应
- 在已创建的实例上动态添加新的属性，不会通过Object.defineProperty设置成响应式数据.
- 解决办法：
  + Vue.set()
  + Object.assign()
  + $forcecUpdated()：强制vue实例重新渲染
## vue中组件和插件的区别
- 页面和页面逻辑统一在一起的组件.vue文件都是组件
- 插件通常为vue添加全局功能，像vue-router的一些库
- 组件丰富项目的业务模块。插件增强vue的功能
## nextTick
- vue在更新dom时是异步进行的，数据发生变化时，vue会开启一个异步更新队列等所有的数据变化完成之后，再进行统一更新
- 想要数据更改完之后立即得到更新的dom结构就可以使用
## mixin
- 在不同组件中需要用到一些相同或者相似的代码，就可以使用mixin
## vue.observable
- 让一个对象编程响应式数据，vue内部会用它来处理data返回的对象
怎么缓存当前组件？缓存后怎么更新？
- 用keep-alive缓存，会缓存不活动的组件实例，这样在组件切换过程中将状态保留在内存中，防⽌重复渲染 DOM。
## 缓存后有两种方案更新：
- beforeRouteEnter：在有vue-router的项⽬，每次进⼊路由的时候，都会执⾏ beforeRouteEnter
- actived：在 keep-alive 缓存的组件被激活的时候，都会执⾏ actived 钩⼦
## 虚拟dom
- 对真实dom的一种抽象，用js对象（VNode节点）作为基础的树，用对象的属性来描述节点，最终让这棵树映射到真实环境中
- 操作真实dom的代价是很昂贵的，虚拟dom不会立刻操作真实dom，而是将更新的内容保存到本地的js对象中，最终将这个js对象一次性映射到dom树上。
## 虚拟dom解析过程：
- 首先对将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来，比如一个元素对象，包含 TagName、props 和 Children 这些属性。然后将这个 js 对象树给保存下来，最后再将 DOM 片段插入到文档中。
- 当页面的状态发生改变，需要对页面的 DOM 的结构进行调整的时候，首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。
- 最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了。

## diff算法
- 通过同层的树节点进行比较的高效算法
- 在 vue 中，虚拟 dom 渲染成真实 dom 的新旧 VNode 节点比较就用到了diff算法
- 首先新老节点的开始和结束位置进行标记，然后进入循环寻找相同的节点，相同的就复用，再根据具体情况移动新老节点的索引，新老节点的索引都是从两边向中间靠拢，当新节点或者老节点的startIndex 大于 endIndex就结束循环，再根据新老节点的数目进行创建或移除
## v-for循环中的key作用
- 在用 v-for 渲染列表的数据时，当数据量很大，我们还要对这个数据增删改的操作，如果给里边增加一条数据，整个列表就要重新渲染这样性能开销太大了。
- key值就是尽可能避免这个问题，当我们列表修改时就会根据key值是否修改，是则重新渲染，否则就地复用。
- 一般不推荐使用索引作为key值，应该给每一个项一个固定的id