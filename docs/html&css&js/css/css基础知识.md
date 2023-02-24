---
title: css基础知识
categories:
 - css
tags:
 - css

---
# {{ $frontmatter.title }}

## css样式的优先级
!important > 内联样式 > ID选择器 > 伪类 = 属性选择器 = 类选择器 > 标签选择器 > 通配符（*）。如非特殊情况，慎用!important。因为使用!important会扰乱原本层叠和权重产生正常的作用顺序，使后期维护带来麻烦。

## 盒子模型

盒子模型分为标准盒模型IE盒子模型（又称怪异盒模型）。

##### 标准盒模型
- 盒子总宽度= width + padding + border + margin。盒子总高度= height + padding + border +margin。
- 我们设置的width/height只是内容content的宽/高度，`不包含padding和border值`

##### IE盒子模型：
- 盒子总宽度= width+ margin = (内容区宽度+ padding + border) + margin。也就是我们设置的width/height`包含了padding和border值`。
- 总结：标准盒子模型和IE盒子模型的差别就在于宽度和高度包含的范围不同。

##### css3的box-sizing新特性
- content-box：指定为标准盒模型
- border-box：指定为IE盒模型

## 让元素水平垂直居中的方法
1. 定位 + margin：auto + top、bottom、left、right：0 （元素未知宽高）
2. 定位 + margin：-自身宽高的一半 + top：50% + left：50%
3. 定位 + transform：translate（-50%，-50%） + top：50% + left：50%
4. flex布局：利用align-items: center和justify-content: center（元素未知宽高）
5. table布局：设置父元素为display:table-cell，vertical：center，text-align：center。子元素设置 display: inline-block。利用vertical和text-align可以让所有的行内块级元素水平垂直居中
6. grid网格布局：和flex配置一样（元素未知宽高）

## flex布局
设置flex布局后，子元素的float、clear、vertical-align失效

- 容器的属性
  - flex-direction（决定主轴的方向）
  - flex-wrap（换行，但是默认不换行）
  - flex-flow（上面两个的简写）
  - justify-content（项目在主轴的对齐方式）
  - align-items（在交叉轴上的对其方式）
  - align-content（多根轴线的对齐方式，一根轴线不起作用）

- 项目的属性
  - `order`（项目的排列顺序，越小越靠前）
  - `flex-grow`（放大比例，默认0，存在剩余空间也不放大）
  - `flex-shrink`（缩小比例，默认1，空间不足，项目缩小）
  - `flex-basis`（定义项目占据的空间，默认auto就是盒子本身的大小，当同时设置了宽高，flex-basis优先级更高）
  - `flex`（上面三个的简写）该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。
  - `align-self`（允许这个项目与其他项目不一样的对齐方式，可以覆盖align-items）

-  flex：1；即为flex-grow：1，
    - 经常用作自适应布局，将父容器的display：flex，
    - 侧边栏大小固定后，将内容区flex：1，内容区则会自动放大占满剩余空间。

## 定位

- 相对定位relative（不脱离文档流，相对自身位置）
- 粘性定位sticky（不脱离文档流，相对于浏览器视口本身，常用在实现导航栏）
- 绝对定位absolute（脱离文档流，相对于距离自己最近的父元素）
- 固定定位fixed（脱离文档流，相对于浏览器视口本身，其他的和绝对定位一样）

## 隐藏元素的方法
1. display:none。元素在页面上将彻底消失，元素本来占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘。绑定的点击事件不会被触发
2. visibility：hidden。元素在页面消失后，其占据的空间依旧会保留着，所以它`只会导致浏览器重绘而不会重排`。绑定的点击事件不会被触发
3. opactity：0。设置透明度为0后，元素只是隐身了，它依旧存在页面中。可以触发点击事件

## bfc（block formatting context）
块级格式化上下文，是页面中的一块渲染区域，并且有一套自己的渲染规则，目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素。
##### 触发bfc的条件
1. 浮动元素
2. overflow值不为 visible，为 auto、scroll、hidden
3. display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
4. position的值为absolute或fixed

##### bfc的渲染规则
1. 内部的盒子会在垂直方向上一个接一个的放置
2. 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
3. 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
4. BFC的区域不会与float的元素区域重叠
5. 计算BFC的高度时，浮动子元素也参与计算
6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

## 清除浮动的方法
1. 在最后一个浮动标签后，新加一个标签，给其设置clear：both；使用这种办法，如果我们清除了浮动，父元素自动检测子盒子最高的高度，然后与其同高。
- 优点：通俗易懂，方便。
- 缺点：添加无意义标签，语义化差，所以不建议使用。

2. 给父元素添加overflow:hidden（形成bfc）
- 优点：代码简洁。
- 缺点：如果内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素，因为设置了overflow：hidden，看具体情况来决定是否使用。

3. 使用after伪元素清除浮动。
- 优点：符合闭合浮动思想，结构语义化正确.
- 缺点：ie6-7不支持伪元素:after，使用zoom:1触发hasLayout。整体相对来说，推荐使用after伪元素来清除浮动。

## px、em、rem、vw的区别

##### px：
- 最常用的，它是相对于显示器屏幕分辨率而言的。
- 优缺点：比较稳定和精确，但在浏览器中放大或缩放浏览页面时会出现页面混乱的情况。
##### em：
- 相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。
- 优缺点：em的值并不是固定的，它会继承父级元素的字体大小。
##### rem：
- 相对单位，基于root元素，即根据html元素的大小来计算，不受容器本身字体大小的影响，全部根据html的字体大小重新计算。设定根元素`<html>`的font-size属性，默认为16px，那么1rem = 16px。
- 优缺点：这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
##### vw。vh
- Vh：1vw等于屏幕可视区高度的百分之一。Vw：1vw等于屏幕可视区宽度的百分之一。

## 一些实现相应效果的属性

```css
1. 让Chrome支持小于12px的文字：利用缩放
span{
    font-size: 12px;
    display: inline-block;
    -webkit-transform:scale(0.8);
}
<span>10px的字体效果</span>

2. 单行溢出省略号，利用 text-overflow: ellipsis;
p {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
<p>这里再长一点就要变成省略号了</p>

3. 多行溢出省略号
p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    width: 200px;
}
<p>这里再长一点就要变成多行文字+省略号了</p>
```