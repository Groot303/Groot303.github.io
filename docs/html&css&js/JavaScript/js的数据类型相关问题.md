---
title: js的数据类型相关问题
categories:
 - JavaScript
tags:
 - js基础
sidebar: auto
---
# {{ $frontmatter.title }}

:boom: **js的数据类型和区别**
- 基本类型：number、string、boolean、symbol 、null、undefined  6种、
- 引用类型：object、array、function 3种
- 基本类型在栈中存储，引用类型的数据在堆中存储，栈中存储的是引用地址

:boom: **== 类型转化的规则**
-  string -> number
- boolean -> number 
- object -> 原始类型

:boom: **Object.is( ) 和 === 、 == 的区别**
- == 等会先进行类型转换，再进行值的比较，
- === 全等不会做类型转换，必须值和类型都相等
- object.is () 和 === 行为基本一致，除了 +0、-0 不相等，NaN 相等

:boom: **null 和 undefined**
- null 表示“没有对象”，该处不应该有值，使用 typeof 检验返回 Object 可以看成一个空对象指针
- undefined 表示“缺少值”，但是还没定义
- 转为数值时，值不一样，undefined转为数值NaN，null转为数值0

:boom: **检测数据类型的方法和局限性**
- typeof
  - 只能检测基本数据类型，无法准确判断引用数据类型（都是返回Object）
- instanceof
  - 用来判断引用类型，判断一个对象是否存在于构造函数的prototype属性上
  - 如果是基本数据类型要用 new 关键字创建一个基本数据类型才能判断
  - 无法检测 null 和 undefined
  - 原型链可以手动修改，检测不准确
- constructor
  - 构造函数的prototype属性中有constructor这个属性指向构造函数本身
  - 无法检测 null 和 undefined
  - 更改构造函数的 prototype 属性，造成检测不准确
- Object.prototype.toString.call（）
  - 基本没有缺陷

:boom: **为什么0.1 + 0.2 ！== 0.3，如何让其相等**
- js的number类型使用64位固定长度表示，0.1和0.2的二进制都是无限循环数相加之后转成十进制截断就不是0.3了
- 使用Math.toFixed()，保留你需要的小数点位数。

:boom: **object和map的区别**
1. key值不同。object只能是简单的数据类型，map可以是所有数据类型
2. map元素顺序遵循插入顺序，object没有
3. 增删数据的写法不同
4. 获取数据长度。map.size()，object.keys()

--------------

:boom: **symbol的特性**
1. 表示独一无二的值，可以用来定义对象的唯一属性名
2. symbol值不能和其他类型的值进行计算
3. symbol可以转为字符串、布尔值，但是不能转成数值
4. Symbol.for()和Symbol.keyFor()方法 

  ○ Symbol.for()：全局搜索有没有该Symbol值，如果有则返回该Symbol值，否则新建并返回一个以该参数为名称的Symbol值。
  ○ Symbol.keyFor()：检测有没有创建该symbol值

:boom: **isNaN 和 Number.isNaN 函数的区别**
- isNaN会将参数转换成数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true 会影响 NaN 的判断
- 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确

:boom: **js 如何进行隐式类型转换**
- ToPrimitive方法，这是 JavaScript 中每个值隐含的自带的方法，用来将值 （无论是基本类型值还是对象）转换为基本类型值。

:boom: **什么是 js 中的包装类型**
- 基本类型是没有属性和方法的，但是为了便于操作基本类型的值，在调用基本类型的属性或方法时 JavaScript 会在后台隐式地将基本类型的值转换为对象，如：可以访问string.length属性
- 也可以使用Object函数显式地将基本类型转换为包装类型：.
- 也可以使用valueOf方法将包装类型倒转成基本类型：

:boom: **其他值转字符串、数字、布尔值的规则**
- 转字符：直接转成字符串
- 转数值：Undefined -> NaN，Null -> 0 ，true -> 1，false -> 0，对象类型首先会被转换为相应的基本类型值，再按上述规则转成数字
- 转布尔值：假值 ：undefined、 null 、 false 、 +0、-0 、 NaN 、 ""     -> false 

----------

:boom: **object.assign 和 扩展运算符两者区别**
- 两者都是浅拷贝
- Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。
- 扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制ES6的 symbols 属性。

:boom: **|| 和 && 的返回值**
- 对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。
- && 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值
- 什么时候用于字符串的拼接
- 如果 + 的其中一个操作数是字符串（或者会转换成字符串），则执行字符串拼接，否则执行数字加法。
- 对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

:boom: **如何获取安全的undefined值**
- undefined是一个标识符，可以被当作变量来使用和赋值，但是会影响undefined的正常判断
- 可以使用 viod 0 来获取 undefined