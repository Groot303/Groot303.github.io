---
title: Vue双向数据绑定原理
categories:
 - Vue2
tags:
 - vue2原理

---

## 双向绑定过程

1. new Vue()首先执行初始化，对data劫持进行响应化处理（利用Object.defineProperty()），这个过程发生Observe中
2. 同时对模板编译，从data中获取数据替换变量初始化视图，这个过程发生在Compile中
3. 定义⼀个 Watcher（订阅者），作为连接 model 和 view 的桥梁，同时watcher中定义一个update方法，
4. 由于data的某个key在⼀个视图中可能出现多次，所以每个key都需要⼀个维护一个Dep来管理多个Watcher
5. 当data中某个数据发生变化，会首先找到对应的Dep，通过Dep.notice方法通知Dep中的所有Watcher执行update函数更新视图

## 使用Object.defineProperty()的缺点

- 在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个2问题
- 在 Vue3.0 中是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法