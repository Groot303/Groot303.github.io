---
title: vue3的特性和用法
categories:
 - Vue3
tags:
 - vue3基础
sidebar: 
 - 'auto'
---
# {{ $frontmatter.title }}
## setup
+ 在setup中避免使用this，因为他在beforeCreate之前执行，找不到组件实例
+ setup接收两个参数
  + 1.props
  + 2.context对象包含下面三个属性
     * attrs:值为对象，包含子组件传递过来，但是没有在props配置中声明的属性，相当于vue2中的this.$attrs
     * slots:收到的插槽内容，相当于this.$slots
     * emit:分发自定义事件的函数,相当于this.$emit

## ref函数
+ 定义一个响应式的数据
+ ref处理基本数据类型用的也是object.defineProperty的get和set（数据劫持），把数据封装成一个RefImpl对象，值放在RefImpl对象的value中，所以要修改一个变量的值时，要用 xxx.value 来修改
+ 但是给ref函数传入对象时，底层求助于reactive函数，因为proxy封装在reactive中

## ref函数
+ 定义一个响应式的数据
+ ref处理基本数据类型用的也是object.defineProperty的get和set（数据劫持），把数据封装成一个RefImpl对象，值放在RefImpl对象的value中，所以要修改一个变量的值时，要用 xxx.value 来修改
+ 但是给ref函数传入对象时，底层求助于reactive函数，因为proxy封装在reactive中

```js
let name = ref('张三') // RefImpl {...  ,  value: “张三”}
let age = ref(18) // RefImpl {...  ,  value: “18“}
let job = ref({
        type: "前端工程师",
        salary: "30k"
    }) // RefImpl {...  ,  value: “proxy{ type: "前端工程师", salary: "30k"}“}
```

## reactive函数
+ 定义一个对象类型的响应式数据（基本类型不用它，用ref）
+ 基本类型可以写在一个对象中，然后用reactive变成响应式，然后再把对象返回，这样就不用写`.value`

## ref和reactive的区别
|   | 定义的数据类型 | 使用 | 原理 |
|---| -------------| ----|---|
|ref| 基本类型数据，也可以用来定义对象类型数据，它内部会自动通过reactive转为代理对象|操作数据需要.value,读取数据时模板中直接读取不需要.value|Object.defineProperty()的get与set来实现响应式|
|reactive|对象（或数组）类型数据|操作数据与读取数据：均不需要.value|通过proxy、reflect实现响应式|

## 计算属性
```js
import { computed } from 'vue'
setup() {
    let person = {
            age: 18
    }
    //计算属性一简写
    person.fullName = computed(() => {
            return person.firstName + '-' + person.lastName
    })
    //计算属性一完整写法
    person.fullName = computed({
        get() {
            return person.firstName + '-'
            person.lastName
        },
        set(value) {
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
    return {
        person
    }
}
```

## watch函数   
- 监视ref定义的响应式数据
```js
setup(){
    let sum = ref(0)
    let msg = ref('hello')
    // 监视一个
    watch(sum, (newValue, oldValue) => {
        console.log(newValue, oldValue);
    },{immediate: true})
    // 监视多个
    watch([sum, msg], (newValue, oldValue) => {
        console.log(newValue, oldValue);
    },{immediate: true})
}
```

+ 监视由reactive定义的响应式数据时，`无法正确的获取到oldValue`
+ 如果硬要用oldValue，那就把需要的那个数据拿出去给ref定义呗
+ 如果你想监视一个reactive定义的对象中的一个属性时，你需要把这个属性写成函数
````javascript
    watch(()=>person.name,(newValue,oldValue)=>{
        console.log('what what what')
    })
````
+ 如果你想监视一个reactive定义的对象中的一些属性时，你需要把这个属性写成数组
````javascript
    watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        console.log('what what what')
    })
````
+ 监视reactive定义的数据时默认使用深度监视，deep配置项是没有用的。手动关闭不了
  * 但是如果监视reactive定义对象中的某个**嵌套对象**时，deep是可以起作用的
```js
setup() {
    let person = reactive({
        name: 'uzi',
        job: {
            salary: '30k'
        }

    })
    watch(() => person.job, (newValue, oldValue) => {
        console.log('what what what')
    },{deep: true})
}
```


## watchEffect函数
+ watchEffect函数中的回调函数里面 用到谁就监听谁 
```javascript
      let sum=ref(0)
      watchEffect(()=>{
          //用了sum，当sum改变了就会执行这个函数
        const x1=sum.value
        console.log('watchEffect执行了')
      })

```
+ _**和计算属性有点像，但是computed注重的是计算出来的值（回调函数的返回值）所以必须写返回值。**_
+ _**而watchEffect更注重的是过程（回调函数的函数体），所以不需要返回值**_

## toRef和toRefs
+ toRef：要将响应式对象中的某个属性转换成响应式单独提供给外部使用，
```js
const name=toRef(person,'name')
```
+ toRefs可以批量创建多个响应式对象
```js
toRefs(person)
```

## 其他的compositionAPI
## shallowRef、shallowReactive
+ shallowRef ：只处理基本数据类型的响应式，不进行对象的响应式处理
+ shallowReactive：只处理对象最外层属性的响应式，_只修改一个对象的最外层属性的时候使用，提高性能_

## readonly、shallowReadonly

+ readonly 深只读
+ shallowReadonly 浅层次的只读，对象的最外层只读，但是嵌套的对象可以改变
+ 使用场景：数据是其他组件传过来的。它不希望数据被修改，就是用这两个api

## toRow、markRaw
+ 数据改了但是vue不做响应式
+ toRow 让响应式数据变成非响应式数据，只能处理reactive处理的响应式对象，ref的不行
+ markRaw 永远不会变成响应式对象，当渲染的对象很复杂时，跳过响应式可以提高性能，还有一些第三方库

## customRef
- 自定义ref，对其依赖项跟踪和更新触发进行显示控制
+ 输入框防抖
```js
function myRef(value,delay){
    let timer
    return customRef((track,trigger)=>{
        return {
            get(){
                track() //追踪value的数据
                return value 
            },
            set(newValue){
                clearTimeout(timer)
                timer=setTimeout(()=>{
                  value=newValue
                  trigger() //通知vue去重新解析模板
                },delay)
            }
        }
    })
}
```

## provide/ inject  
- 作用：实现祖与后代组件间通信
- 套路：父组件有一个provide选项来提供数据，后代组件有一个inject选项来使用这些数据
- 具体写法：
```js
//1. 祖组件中：
setup() {
        let car = reactive({ name: '奔驰', price: '4o万' })
        provide('car', car)
}
//2. 后代组件中：
setup(props, context) {
    const car = inject('car')
    return { car }
}
```

## 响应式数据的判断
+ isRef
+ isReactive
+ isReadonly
+ isProxy 检查一个对象是否有reactive或者readonly方法创建的代理

## 新的组件
+ Fragment 
+ Teleport 容易设置样式 
+ Suspense 动态引入

## 其他改变
- data必须写成函数
- 动画和过渡类名的修改 
- 移除keyCode作为v-on的修饰符
- v-on.native修饰符
- 移除过滤器