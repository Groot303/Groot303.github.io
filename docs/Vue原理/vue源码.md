---
title: vue源码解读之new Vue

categories:
 - Vue2
tags:
 - vue2原理

---
# {{ $frontmatter.title }}
## vue的构造函数
- 源码位置：src\core\instance\index.js
```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue);     // 定义 _init
stateMixin(Vue);    // 定义 $set $get $delete $watch 等
eventsMixin(Vue);   // 定义事件  $on  $once $off $emit
lifecycleMixin(Vue);// 定义 _update  $forceUpdate  $destroy
renderMixin(Vue);   // 定义 _render 返回虚拟dom
```


## _init()函数中

- 源码位置：src\core\instance\init.js
```js
// 初始化组件生命周期标志位
initLifecycle(vm)
// 初始化组件事件侦听
initEvents(vm)
// 初始化渲染方法
initRender(vm)
callHook(vm, 'beforeCreate')
// 初始化依赖注入内容，在初始化data、props之前
initInjections(vm) 
// 初始化props/data/method/watch/methods
initState(vm)
initProvide(vm) 
callHook(vm, 'created')
//...

//挂载元素
if (vm.$options.el) {
    vm.$mount(vm.$options.el)
}
```

- 在调用beforeCreate之前，数据初始化并未完成，无法访问到data、props这些属性
- 到了created的时候，数据已经初始化完成，能够访问data、props这些属性，但这时候并未完成dom的挂载，因此无法访问到dom元素

## 总结

- new Vue 过程会调用_init()函数
    - 定义 $set、$get 、$delete、$watch 等方法
    - 定义 $on、$off、$emit、$off等事件
    - 定义 _update、$forceUpdate、$destroy生命周期
    - 初始化props/data/method/watch/methods，进行数据响应式处理

- 调用$mount进行页面挂载

- 挂载的时候主要是通过mountComponent方法

- 定义updateComponent更新函数

- 执行render生成虚拟DOM

- _update将虚拟DOM生成真实DOM结构，并且渲染到页面中