---
title: ES6基础知识汇总
categories:
 - ES6
tags:
 - ES6基础
---

# {{ $frontmatter.title }}

:boom: **var、let、const**

- var存在变量提升
- let和const具有块级作用域，var不存在块级作用域
- let和const 存在暂时性死区，即在声明变量之前不能使用、不能重复声明
- var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。

:boom: **set**

1. 键和值相同
2. 增删改查的操作方法：add、delete、has、clear
3. 遍历方法：
    - for of + keys返回键名，values返回键值，entries返回键值对、
    - for of
    - forEach( )参数是一个处理函数
    - 扩展运算符（ ...）（内部使用的是 for of）

:boom: **map**
1. 键-值形式，键可以是各种类型、
2. 一些操作方法：set(key, value)、get(key)、has(key)、delete(key)、clear()：清楚所有成员
3. 遍历方法：和 set 一样
4. 转换成数组：Array.for()、扩展运算符（...）

:boom: **箭头函数和普通函数的区别**
- 没有arguments。可以利用rest参数模拟
- 没有自己的this值，箭头函数的this是上层函数作用域的this对象(一层层向上找)普通函数的this指向该函数的调用者。
- call, apply, bind会改变普通函数的this，但箭头函数不能使用这三个方法来改变环境上下文
- 箭头函数不能使用new生成实例，因为它没有 prototype 和自己的 this 对象
- 箭头函数内不能用yield且不能用作Generator函数，而普通函数可以

----------

:boom: **WeakSet、WeakMap**

- 成员只能是对象

- 无法遍历、无法清空

- 弱引用（通俗来说就是没有引用和该键引用同一个对象时，对象就会被回收，相应的key变成无效，也是无法遍历的原因）

- 应用场景：储存dom元素（键名是dom节点，当删除节点时，键就消失了）、存储私有变量

:boom: **对rest参数的理解**

- 箭头函数的 arguments 可以用 ...rest 参数模拟

:boom: **模板语法和字符串处理**
- 模板语法让拼接字符串变得方便
- includes：判断字符串与子串的包含关系
- startsWith：判断字符串是否以某个/某串字符开头
- endsWith：判断字符串是否以某个/某串字符结
- repeat(重复的次数)：使同一个字符串输出多次（被连续复制多次）

:boom: **commonJS和ES6 Module的区别**

:one: **CommonJS**

  - 模块输出的是一个值的拷贝（模块内部值的变化影响不到这个值了）
  - require 语法是同步的，必须等模块加载完后，才会执行后面的代码，主要针对服务端，使用require只需要在本地硬盘中读取文件，速度较快
  - Common JS加载的是一个对象，这个对象只有在脚本运行时才会生成，而且只会生成一次

:two: **ES6  Module**

  - 输出的是值的引用，原始值变了，import加载的值也会跟着变
  - ES6 Module 不是对象，它对外的接口只是一种静态定义，在代码解析阶段就会生成，这样就可以使用各种工具对js模块进行静态分析，优化代码，Webpack中的 tree shaking 和 scope hoisting 实际上就是依赖ES6模块化。

:boom: **ES6 module和common js循环加载的区别**

在大型项目中，循环加载相互依赖的情况很难避免的

-  common js的循环加载 
   - 脚本代码在 require 的时候就会全部执行，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
- es6 Module的循环加载 
  - ES6模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。

  -------


:boom: **扩展运算符作用和使用场景**
- 对象、数组等的扩展
- 合并数组、将字符串转成真正的数组
- 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组
- 用在函数形参上时，还可以把一个分离的参数序列整合成一个数组