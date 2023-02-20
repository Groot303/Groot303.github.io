---
title: vue3的数据响应式
categories:
 - Vue3
tags:
 - vue3
sidebar: 
 - 'auto'
---

## vue2的响应式原理存在的问题

- 新增属性、删除属性，界面不会更新
- 直接通过数组下标修改数组内容，界面不会自动更新
- Vue对数组的7个方法（push、pop、shift、unshift、splice、sort、reverse）进行了包裹实现了响应式

## 那为什么vue2存在这种问题呢？是 definproperty 本身的问题吗？

```js
function defineReactive(data, key, value) {
	 Object.defineProperty(data, key, {
		 enumerable: true,
		 configurable: true,
		 get: function defineGet() {
			 console.log(`get key: ${key} value: ${value}`)
			 return value
		 },
		 set: function defineSet(newVal) {
			 console.log(`set key: ${key} value: ${newVal}`)
			 value = newVal
		 }
	 })
}
 
function observe(data) {
	Object.keys(data).forEach(function(key) {
		defineReactive(data, key, data[key])
	})
}
 
let arr = [1, 2, 3]
observe(arr)

arr[1] = 2 // --> set key:1 value: 2
```

- 通过上面代码可以看出，Object.definproperty() 是可以检测道通过索引改变数组的操作的，那vue2为什么没有实现呢？
    - 尤大的回答是因为性能问题，虽然现在的浏览器和电脑配置性能还不错，可以检测比较多的属性，但是因为性能的代价和获得的用户体检收益不成正比！
    - vue2的源码中也是对数组做了特殊的处理，不检测每一个数组中的数据实施监控。

## vue3的响应式
:boom: 前置知识

:one: Proxy: 它内置了一系列”陷阱“用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
 
:two: Reflect: 它提供拦截 JavaScript 操作的方法。这些方法与 Proxy 的方法相同。

```js
// 模拟vue3中的数据响应式
let person = {
    name: 'zhangsan',
    age: 18
}
const p = new Proxy(person, {
    //get陷阱中target表示原对象 propName表示访问的属性名
    get(target, propName) {
        console.log(`读取了p的${propName}属性，这里放的是更新界面的代码`);
        return Reflect.get(target, propName)
    },

    set(target, propName, value) {
        console.log(`修改了/增加了p的${propName}属性，这里放的是更新界面的代码`);
        Reflect.set(target, propName, value)
    },
    
    deleteProperty(target, propName) {
        console.log(`删除了p的${propName}属性，这里放的是更新界面的代码`);
        return Reflect.deleteProperty(target, propName)
    }
})
```

## 为什么proxy要配合reflect使用

:one: **触发代理对象的劫持时保证正确的this上下文指向**

```js
// 用 target[key]
let People = new Proxy({
    _name: 'people',
    get name() {
        return this._name
    }
}, {
    get(target, prop, receiver) {
        return target[prop]
    }
})
let Man = { _name: 'man' }
Man.__proto__ = People // Man继承People
console.log(Man._name) // man 这个name是打印的Man自身的name，正常
console.log(Man.name) // people 

//用 reflect.get
let People = new Proxy({
    _name: 'people',
    get name() {
        return this._name
    }
}, {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }
})
let Man = { _name: 'man' }
Man.__proto__ = People // Man继承People
console.log(Man._name) // man 这个name是打印的Man自身的name，正常
console.log(Man.name) // man
```

- 它们两个主要的区别就是get name() {}方法中的this指向不同：

    - 如果是用`target[key] `的， get name() 中的 this 是指向了当前People。
    - 如果用Reflect.get(target, property, receiver)， 主要注意第三个参数（ 如果target对象中指定了getter， receiver则为getter调用时的this值）， 它表示方法的调用者， 它可以让this指向调用者， 此时 get name() 里面的this， 指向了Man。
    - 如果Reflect.get不传第三个参数， 那么它和target[key] 结果就是一样的。

- 为什么proxy要结合reflect使用需要结合receiver参数来理解

:two: **框架的健壮性**

```js
 let person = {
    name: "zhangsan",
    age: 18
 }
 Object.defineProperty(person,'height',{
      get(){
          return 180
      }
  })
  Object.defineProperty(person,'height',{
      get(){
          return 170
      }
  })
```
- 以上代码会报错，如果使用 Object.defineProperty()添加一个属性时，由于 Object.defineProperty() 不允许我们重复定义一个属性，会直接报错，阻塞后面的代码都不执行。
- 但是利用 Reflect.defineProperty() 的话，不会报错。
- 如果是封装框架的话，利用 Object.defineProperty() 需要使用大量的 try...catch来处理，使用 Reflect.defineProperty 就可以通过判断返回值来决定是否继续执行下面的代码，让框架的封装更健壮。
```js
 let person = {
    name: "zhangsan",
    age: 18
 }
 const a = Reflect.defineProperty(person,'height',{
      get(){
          return 180
      }
  })// a为 true
  const b = Reflect.defineProperty(person,'height',{
      get(){
          return 170
      }
  })// b为 false
```