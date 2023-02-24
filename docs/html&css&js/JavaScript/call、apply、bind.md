---
title: call、apply、bind
categories:
 - JavaScript
tags:
 - js进阶

---


# {{ $frontmatter.title }}

:boom: **三者的作用**

- 它们都可以改变this的指向

:boom: **三者的区别**

|        | 参数传递 | 执行时机 | 返回值|
|--------|---------|----------|------|
|apply   |参数列表形式传入| 立即执行，改变this一次|返回被改变this指向的函数的返回值，若该函数没有返回值则返回undefined
|call    |数组形式传入 | 立即执行，改变this一次|返回被改变this指向的函数的返回值，若该函数没有返回值则返回undefined
|bind    |参数列表形式传入，但可以多次传参|非立即执行|返回一个永久改变this的函数|

:boom: **手写实现call、apply、bind**

:one: **call**

```js
function person(){
    console.log(this.name);  //groot
    console.log(...arguments)
}
let obj = { 
    name : 'groot'
}
person.call(obj, "jarvis", "ironman")

//改变this指向时可以理解可以理解成以下代码
let obj = {
    name: "groot",
    person: function() {
        console.log(this.name);
        console.log(...arguments)
    }
}
obj.person("jarvis", "ironman")

// 这样实现call就可以很轻松的写出来了
Function.prototype._call = function(obj) {
    if (typeof this !== "function") {
        throw new TypeError("error")
    }
    // 获取第二个参数
    let args = [...arguments].slice(1)
    let result = null
    // 如果不传入要绑定this的对象，就把this绑定在window上
    obj = obj || window
    obj.fn = this
    // 执行函数，把该函数的返回值赋值给result，就可以理解call的返回值
    result = obj.fn(...args)
    delete obj.fn
    return result
}

```

:two: **apply**

```js
// apply和call的区别就在处理参数上
Function.prototype._apply = function(obj) {
    if (typeof this !== "function"){
        throw TypeError("Error")
    }
    let result = null
    obj = obj || window 
    obj.fn = this
    if (arguments[1]) {
        result = obj.fn(...arguments[1])
    } else {
        resullt = obj.fn()
    }
    delete obj.fn 
    return result 
}
```

:three: **bind**

**原生的bind方法结合new使用时，this是会失效的**

```js
function person() {
    console.log(this.name);  // undefined
    console.log(...arguments);
}

let obj = {
    name: "groot"
}
let a = person.bind(obj, "jarvis", "ironman")
let b = new a("captain")
```

**实现完整版的bind**

```js
Function.prototype._bind = function(obj) {
    if (typeof this !== "function") {
        throw new TypeError("error")
    }
    // 获取传入的第二个参数
    const args = [...arguments].slice(1)
    // 保存当前函数的引用
    let fn = this
    // 返回一个永久改变this指向的函数
    return function Fn() {
        // 使用了new 时
        if (this instanceof Fn) {
            fn.apply(this, args.concat(...arguments))
        } else {
            fn.apply(obj, args.concat(...arguments))
        }
    }
    // 简写：
    // return function Fn() {
    //     fn.apply(this instanceof Fn ? new fn(...arguments) : obj, args.concat(...arguments))
    // }
}
```


