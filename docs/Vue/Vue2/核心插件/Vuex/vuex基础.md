---
title: Vuex---Vue的状态管理库
categories:
 - Vuex
tags:
 - vuex
---


## what vuex?
* 专门用于存储管理所有组件的状态的库，简单来说就是用来管理项目组件需要共享的一些数据的容器

## why vuex?
- 如果一个项目由众多组件组成，组件又会多层嵌套，这些组件如果同时共享一个状态或者需要不同的组件需要更改同一个状态时。利用传参的方法很容易造成数据混乱，难以维护。
- vuex通过把不同组件的共享状态抽取出来，以全局单例模式进行管理，不管组件在哪里都可以获取或者更改状态。对状态统一管理有利于我们后期项目的维护。
- 使用vuex并不是要把所有组件的所有状态放到vuex中，否则用以导致store中的当代码太臃肿不直观。有些数据不用共享还是作为组件的局部数据更好。

## 核心流程
- 组件通过 **（this.$store.dispatch）** 触发 Actions 中的一些事件或动作
- Actions 通过 **（this.$store.commit）** 触发 Mutations 中的事件
- Mutations 中的事件就去改变 State 中的数据
- State 中的数据被改变之后，就会重新渲染（Render）到 Vue Components 中去，组件展示更新后的数据，完成一个流程。
------------------



:boom: **Vuex的核心模块**


## action
- 通过 **（this.$store.commit）** 触发 Mutations 中的事件
- 进行异步操作，不能直接操作 state 如向后台请求数据

## mutation
- 更改 Vuex 的 store 中的数据的唯一方法是提交 mutation，其他修改方式在严格模式下将会报错。
- 利用mapMutations辅助函数可以在组件中重复使用 mutation
```js
methods:{
    ...mapMutations({
        setNumber:'SET_NUMBER',
    })
}
// 然后调用this.setNumber(10)相当调用this.$store.commit('SET_NUMBER',10)
```
- 该方法只能进行同步操作

:question: **为什么只能进行同步操作**
- 每一次mutation触发的时候，devtools 都需要捕捉前后数据的改变，但是如果在 mutation 中进行了异步操作，devtools不知道回调函数什么时候回调，追踪不到状态的改变


## state
- 集中存储组件中data对象的数据，全局唯一，以进行统一的状态管理。
- 在组件中可以通过 **this.$store** 访问
- 如果在一个组件中用了多个状态，可以利用 **mapState** 辅助函数来帮助生成计算属性
```js
  // 不用mapstate写法
 computed: {
    currentPage: {
      get(){
        return this.$store.state.adminManage.currentPage
      }
    },
    // 没用set时可简化写法
    currentPage: state => this.$store.state.adminManage.currentPage
},

// 用mapstate写法，第一个参数是映射到对应的仓库
computed: mapState('adminManage',{
                name: state => this.$store.state.adminManage.user_num,
                // 传字符串参数 'user_num' 等同于 `state => this.$store.state.adminManage.user_num`
                ID:"user_num",
         })

// 和其他对象混合写
computed: {
    currentPage: {
      get(){
        return this.$store.state.adminManage.currentPage
      },
      set(val){
        return val
      }
    },
    // 因为mapState返回的是一个对象，使用对象展开运算符将此对象混入到外部对象中使用
    // 当映射的计算属性的名称与 state 的子节点名称相同时，可以写成数组
    ...mapState('adminManage', ["tableData", "totalNum","show","pageSize"])
}
```

## getter
- 类似于 computed 属性，可以对state中的数据进行处理
- mapGetters 辅助函数可以 store 中的 getter 映射到组件的计算属性
```js
   ...mapGetters('adminManage',["screenAdmin"])
```
- 可以通过属性形式访问到这些属性，如：
```js
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```

## module

:boom: 为什么使用module？

- 在Vuex中应用的所有需要共享和被修改的数据源都存放在state对象中，当应用较为复杂，需要共享的数据较多时，state对象以及store对象都会变得很臃肿，不利于代码维护。
- 并且大多应用都会根据业务分为不同的功能模块，很多情况下不同模块之间的数据交互并不密切，如果我们能将store也分割为不同模块，每个模块管理不同的数据，会使数据管理起来更加结构清晰，方便管理。

:boom: 命名空间 namespaced

- 默认情况下，模块内部的action、mutation和getter是注册在全局命名空间的，这样使得多个模块能够对同一mutation或action做出响应。

- 如果我们想让我们的模块具有更高的封装度和复用性，可以通过添加namespaced: true的方式使其成为带命名空间的模块。当模块被注册后，他的所有getter、action及matation都会自动根据模块注册的路径调整命名



## vuex 和 localstorage的区别
|       |vuex|localstorage|
|---    |--- |-----|
|存储位置|内存|本地|
|使用场景|组件间|不同页面中|
|  其他| 数据响应式，刷新页面数据会丢失| 非响应式，刷新页面数据不会丢失|
