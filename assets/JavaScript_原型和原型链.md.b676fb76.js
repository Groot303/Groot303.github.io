import{_ as t,c as o,o as r,a as e}from"./app.0a72f3ba.js";const m=JSON.parse('{"title":"Javascript的原型和原型链","description":"","frontmatter":{"title":"Javascript的原型和原型链","categories":["JavaScript"],"tags":["js进阶","原型"]},"headers":[],"relativePath":"JavaScript/原型和原型链.md"}'),s={name:"JavaScript/原型和原型链.md"},a=e("<hr><p>💥 <strong>出现背景</strong></p><ul><li>因为 js 万物皆对象，所以必须要有一种机制将所有对象连接起来。但是 js 的作者 Brendan Eich 并不打算引入 class 的概念，这样 js 就是一种完整的面向对象编程语言了，有点太过于正式</li></ul><p>💥 <strong>为什么要引入原型？</strong></p><ul><li>在我们用构造函数生成实例对象时，会有一个缺点，无法共享属性和方法，每一个实例对象，都有自己的属性和方法，这样做不到对象之间的数据共享，每次生成一个实例对象时，每一个方法都要重新创建一边，这明显造成了资源的极大浪费。为了解决这个问题，就引入了原型这个概念</li></ul><p>💥 <strong>原型模式的机制</strong></p><ul><li>为构造函数设置一个 prototype 属性，所有实例对象需要共享的属性和方法，都放在这个对象里面，不需要共享的，就放在构造函数中。实例对象一旦创建就会自动引用 prototype 对象的属性和方法，prototype对象就成为原型对象。</li></ul><p>💥 <strong>原型链</strong></p><ul><li>原型对象也可能拥有原型，并且需要从中继承属性和方法，所以prototype中又有一个proto属性，通过 proto 属性把每个prototype连接起来形成了一条链，就叫原型链</li></ul>",9),p=[a];function _(i,n,c,l,d,u){return r(),o("div",null,p)}const S=t(s,[["render",_]]);export{m as __pageData,S as default};
