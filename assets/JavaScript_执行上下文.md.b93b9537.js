import{_ as t,c as l,o as i,a as s}from"./app.0a72f3ba.js";const v=JSON.parse('{"title":"Javascript的执行上下文","description":"","frontmatter":{"title":"Javascript的执行上下文","categories":["JavaScript"],"tags":["js进阶","执行上下文","作用域"]},"headers":[],"relativePath":"JavaScript/执行上下文.md"}'),r={name:"JavaScript/执行上下文.md"},n=s("<p>💥 <strong>先说说作用域</strong></p><p>1️⃣ <strong>作用域</strong>：</p><ul><li>顾名思义，变量和函数生效或者说能被访问的一个区域；js遵循的是静态作用域（也叫词法作用域），就是在我们写好代码的时候，变量和函数的作用域就确定了，不用等到执行阶段再确定。</li></ul><p>2️⃣ <strong>作用域分为</strong>：</p><ul><li>全局作用域：程序中任何地方都可以访问在这里声明的变量</li><li>块级作用域：在{}中用let、const声明的变量，在其他地方无法访问</li><li>函数作用域：只能在函数内部访问</li></ul><p>💥 <strong>作用域和执行上下文的联系和区别</strong></p><ul><li>因为作用域是在代码写好的时候就已经确定了，执行上下文是代码执行时才产生；所以执行上下文访问变量或调用函数，需要在作用域中进行。简单的说就是作用域给执行上下文制定了变量访问或函数调用等操作的规则。</li></ul><hr><p>💥 <strong>接下来就详细说说执行上下文</strong></p><p>1️⃣ <strong>什么是执行上下文</strong>？</p><ul><li>执行上下文就是js代码执行的环境。</li></ul><p>2️⃣ <strong>同样的，执行上下文分为</strong>：</p><ul><li>全局执行上下文</li><li>函数执行上下文</li><li>Eval 函数执行上下文（用的极少）</li></ul><p>3️⃣ <strong>执行上下文的生命周期</strong></p><ul><li>上下文的创建：在函数被调用但是没有执行函数里面的代码时</li><li>上下文的执行：变量赋值，函数中代码的执行</li><li>上下文的回收：函数执行完毕，相应的执行上下文出栈被回收</li></ul><p>4️⃣ <strong>重点来说说上下文的创建这个阶段</strong></p><ul><li>主要做了三件事： <ol><li>绑定this指向：所以说this指向是在函数执行才确定的（当然箭头函数除外）</li><li>创建‘词法环境’：词法环境主要是存声明的函数和用let、const声明的变量</li><li>创建‘变量环境’：变量环境主要存var声明的变量</li></ol></li></ul><p>❗ ❗ ❗</p><p>👉 环境变量（包括词法环境和变量环境）中，都包含了一个外部引用（称为outer），指向外部的执行上下文</p><p>👉 在执行上下文这个阶段，变量会被初始化为undefined(var声明的情况下)和保持uninitialized(未初始化状态)(使用let和const声明的情况下)</p><p>👉 这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中，但变量会被初始化为undefined(var声明的情况下)和保持uninitialized(未初始化状态)(使用let和const声明的情况下)，<strong>这就是变量提升的实际原因</strong></p><hr><p>💥 <strong>最后讲讲上下文的执行栈</strong>：</p><ul><li>当Javascript引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中</li><li>每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中</li><li>引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文</li></ul>",24),o=[n];function p(e,a,_,c,u,g){return i(),l("div",null,o)}const f=t(r,[["render",p]]);export{v as __pageData,f as default};
