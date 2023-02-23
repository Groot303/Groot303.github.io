import{_ as l,c as a,o as s,d as t}from"./app.0be8cb82.js";const C=JSON.parse('{"title":"html知识总结","description":"","frontmatter":{},"headers":[{"level":2,"title":"html的语义化","slug":"html的语义化","link":"#html的语义化","children":[]},{"level":2,"title":"html语义化的标签","slug":"html语义化的标签","link":"#html语义化的标签","children":[]},{"level":2,"title":"块级元素、行内元素（内联元素）、行内块元素、空元素的区别。他们分别都有哪些常见的标签","slug":"块级元素、行内元素-内联元素-、行内块元素、空元素的区别。他们分别都有哪些常见的标签","link":"#块级元素、行内元素-内联元素-、行内块元素、空元素的区别。他们分别都有哪些常见的标签","children":[]},{"level":2,"title":"<strong>和<b>标签的区别。","slug":"strong-和-b-标签的区别。","link":"#strong-和-b-标签的区别。","children":[]},{"level":2,"title":"<i>和<em>标签的区别","slug":"i-和-em-标签的区别","link":"#i-和-em-标签的区别","children":[]},{"level":2,"title":"<img>标签支持的格式","slug":"img-标签支持的格式","link":"#img-标签支持的格式","children":[]},{"level":2,"title":"<img>中的alt和title属性的区别","slug":"img-中的alt和title属性的区别","link":"#img-中的alt和title属性的区别","children":[]},{"level":2,"title":"为什么要尽量少用<iframe>标签，<iframe>的缺点？","slug":"为什么要尽量少用-iframe-标签-iframe-的缺点","link":"#为什么要尽量少用-iframe-标签-iframe-的缺点","children":[]},{"level":2,"title":"<label>标签的作用","slug":"label-标签的作用","link":"#label-标签的作用","children":[]},{"level":2,"title":"<mete>标签的viewport的作用和原理","slug":"mete-标签的viewport的作用和原理","link":"#mete-标签的viewport的作用和原理","children":[]},{"level":2,"title":"viewport的属性值","slug":"viewport的属性值","link":"#viewport的属性值","children":[]}],"relativePath":"html/基础知识.md"}'),e={name:"html/基础知识.md"},n=t(`<h1 id="html知识总结" tabindex="-1">html知识总结 <a class="header-anchor" href="#html知识总结" aria-hidden="true">#</a></h1><h2 id="html的语义化" tabindex="-1">html的语义化 <a class="header-anchor" href="#html的语义化" aria-hidden="true">#</a></h2><p>html语义化是用正确的标签做正确的事情。 有三大好处：</p><ul><li>结构清晰：html语义化让页面的内容结构化，即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的。</li><li>SEO：有利于SEO，可以让搜索引擎更好地获取到更多有效信息，搜索引擎的爬虫依赖于标签来确定上下文和各个关键字的权重，有效提升网页的搜索量。</li><li>可维护性：使阅读源代码的人更容易将网站分块，便于阅读维护理解。</li></ul><h2 id="html语义化的标签" tabindex="-1">html语义化的标签 <a class="header-anchor" href="#html语义化的标签" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;tit1e&gt;:页面主体内容。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;hn&gt;:h1h6,分级标题，&lt;h1&gt;与&lt;title&gt;协调有利于找索引擎优化。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;u1&gt;:无序列表。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;:有序列表。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;header&gt;:页眉通常包括网站标志、主导航、全站链接以及搜索框。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;nav&gt;:标记导航，仅对文档中重要的链接群使用。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;main&gt;:页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;article&gt;:定义外部的内容，其中的内容独立于文档的其余部分。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;section&gt;:定义文档中的节(section、区段)。比如章节、页眉、页脚威文档中的其他部分。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;aside&gt;:定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;footer&gt;:页脚，只有当父级是body时，才是整个页面的页脚。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;small&gt;:呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;strong&gt;:和en标签一样，用于强调文本，但它强调的程度更强一些。</span></span>
<span class="line"><span style="color:#A6ACCD;">\`&lt;em&gt;\`:将其中的文本表示为强调的内容，表现为斜体。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mark&gt;:使用黄色突出显示部分文本。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;figure&gt;:规定独立的流内容（图像、图表、照片、代码等等）（默认有49px左右margin)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;figcaption&gt;:定义figure元素的标题，应该被置于figure元素的第一个或最后一个子元素的位</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;cite&gt;:表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;blockquoto&gt;:定义块引用，块引用拥有它们自己的空间。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;q&gt;:短的引述（跨浏览器问题，尽量避免使用）。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;time&gt;:datetime属性道循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;abbr&gt;:简称或缩写。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;dfn&gt;:定义术语元素，与定义必须紧挨着，可以在描述列表d1元素中使用。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;adress&gt;:作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息，页的链接）。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;del&gt;:移除的内容。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ins&gt;:添加的内容。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;code&gt;:标记代码。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;meter&gt;:定义已知范围或分数值内的标量测量。</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;progress&gt;:定义运行中的进度（进程）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="块级元素、行内元素-内联元素-、行内块元素、空元素的区别。他们分别都有哪些常见的标签" tabindex="-1">块级元素、行内元素（内联元素）、行内块元素、空元素的区别。他们分别都有哪些常见的标签 <a class="header-anchor" href="#块级元素、行内元素-内联元素-、行内块元素、空元素的区别。他们分别都有哪些常见的标签" aria-hidden="true">#</a></h2><h5 id="块级元素" tabindex="-1">块级元素： <a class="header-anchor" href="#块级元素" aria-hidden="true">#</a></h5><ul><li>每个块级元素都是独自占一行；</li><li>高度，行高，外边距（margin）以及内边距（padding）都可以控制；</li><li>元素的宽度如果不设置的话，默认为父元素的宽度（父元素宽度100%）；</li><li>多个块状元素标签写在一起，默认排列方式为从上至下</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">常见的块级元素标签有：</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;h1&gt;至&lt;h6&gt;，&lt;div&gt;，&lt;p&gt;，&lt;ul&gt;，&lt;ol&gt;，&lt;li&gt;，&lt;dl&gt;，&lt;dt&gt;，&lt;dd&gt;，&lt;table&gt;，&lt;article&gt;，</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;aside&gt;，&lt;audio&gt;，&lt;video&gt;，&lt;footer&gt;，&lt;header&gt;，&lt;nav&gt;，&lt;section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="行内元素" tabindex="-1">行内元素： <a class="header-anchor" href="#行内元素" aria-hidden="true">#</a></h5><ul><li>不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下才会自动换行，其宽度随元素的内容而变化；</li><li>高宽无效，对外边距（margin）和内边距（padding）仅设置<code>左右方向有效</code>上下无效；</li><li>设置行高有效，等同于给父级元素设置行高；</li><li>元素的宽度就是它包含的文字或图片的宽度，不可改变；</li><li>行内元素中不能放块级元素，a 链接里面不能再放链接</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">常见的行内元素标签有：</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a&gt;，&lt;span&gt;，&lt;strong&gt;，\`&lt;i&gt;\`，&lt;b&gt;，&lt;button&gt;，&lt;textarea&gt;，\`&lt;em&gt;\`，&lt;label&gt;，&lt;select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="行内块元素" tabindex="-1">行内块元素 <a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a></h5><ul><li>它既具有块级元素的特点，也有行内元素的特点，它可以自由设置元素宽度和高度，也可以一行多个行内块元素</li><li>高度、行高、外边距以及内边距都可以控制；</li><li>默认宽度就是它本身内容的宽度，不独占一行，但是之间会有空白缝隙，设置它上一级的 font-size 为 0，才会消除间隙</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">常见的行内块元素标签</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;button&gt;, &lt;input&gt;, &lt;img&gt;, &lt;textarea&gt;, &lt;select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="空元素" tabindex="-1">空元素 <a class="header-anchor" href="#空元素" aria-hidden="true">#</a></h5><ul><li>没有闭合标签的标签</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">常见的空元素标签：</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input/&gt;, &lt;img/&gt;, &lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="strong-和-b-标签的区别。" tabindex="-1"><code>&lt;strong&gt;</code>和<code>&lt;b&gt;</code>标签的区别。 <a class="header-anchor" href="#strong-和-b-标签的区别。" aria-hidden="true">#</a></h2><ul><li><code>&lt;strong&gt;</code>标签和<code>&lt;b&gt;</code>标签都能使得内容有加粗的是视觉效果，</li><li>区别是：<code>&lt;strong&gt;</code>有重点强调的作用，<code>&lt;strong&gt;</code>是“含有语义”的标签，搜索引擎会了解这些语义。其在HTML中是特意被设定为表示“强调”的意思。而<code>&lt;b&gt;</code>标签则没有“强调”的含义。</li></ul><h2 id="i-和-em-标签的区别" tabindex="-1"><code>&lt;i&gt;</code>和<code>&lt;em&gt;</code>标签的区别 <a class="header-anchor" href="#i-和-em-标签的区别" aria-hidden="true">#</a></h2><ul><li><code>&lt;i&gt;</code>标签和<code>&lt;em&gt;</code>标签都能使文本变为斜体，</li><li>区别是<code>&lt;em&gt;</code>有重点强调的作用，在大多数浏览器里面看起来是斜体，如果单纯为了展示斜体的效果而不加以强调的话，可以使用<code>&lt;i&gt;</code>标签。如果含有强调的意思的话，需要使用<code>&lt;em&gt;</code>标签</li></ul><h2 id="img-标签支持的格式" tabindex="-1"><code>&lt;img&gt;</code>标签支持的格式 <a class="header-anchor" href="#img-标签支持的格式" aria-hidden="true">#</a></h2><p>jpg是有损压缩格式，png是无损压缩格式。所以，相同的图片，jpg体积会小。比如我们一些官网的banner图，一般都很大，所以适合用jpg类型的图片。但png分8位的和24位的，8位的体积会小很多，但在某些浏览器下8位的png图片会有锯齿。</p><h2 id="img-中的alt和title属性的区别" tabindex="-1"><code>&lt;img&gt;</code>中的alt和title属性的区别 <a class="header-anchor" href="#img-中的alt和title属性的区别" aria-hidden="true">#</a></h2><h5 id="alt属性" tabindex="-1">alt属性： <a class="header-anchor" href="#alt属性" aria-hidden="true">#</a></h5><ol><li>如果图像没有下载或者加载失败，会用文字来代替图像显示。这一作用是为了给加载不出网页图片的用户提供图片信息，方便用户浏览网页，也方便程序猿维护网页。</li><li>搜索引擎可以通过这个属性的文字来抓取图片。</li></ol><h5 id="title属性" tabindex="-1">title属性 <a class="header-anchor" href="#title属性" aria-hidden="true">#</a></h5><ol><li>是当网页上的图片被加载完成后，鼠标移动到上面去，会显示这个图片指定的属性文字，以对图片信息进行补充性说明。</li></ol><h2 id="为什么要尽量少用-iframe-标签-iframe-的缺点" tabindex="-1">为什么要尽量少用<code>&lt;iframe&gt;</code>标签，<code>&lt;iframe&gt;</code>的缺点？ <a class="header-anchor" href="#为什么要尽量少用-iframe-标签-iframe-的缺点" aria-hidden="true">#</a></h2><ol><li>iframe会阻塞主页面的onload事件；</li><li>iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载，会产生很多页面，不容易管理。</li><li>如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。</li><li>代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化（SEO）。</li><li>很多的移动设备无法完全显示框架，设备兼容性差。</li><li>iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。</li></ol><h2 id="label-标签的作用" tabindex="-1"><code>&lt;label&gt;</code>标签的作用 <a class="header-anchor" href="#label-标签的作用" aria-hidden="true">#</a></h2><p>label标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- &lt;label&gt;标签的 for 属性应当与相关元素的 id 属性相同 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">号码：</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="mete-标签的viewport的作用和原理" tabindex="-1"><code>&lt;mete&gt;</code>标签的viewport的作用和原理 <a class="header-anchor" href="#mete-标签的viewport的作用和原理" aria-hidden="true">#</a></h2><ol><li>作用：让当前viewport的宽度等于设备的宽度，同时不允许用户进行手动缩放。</li><li>原理：移动端浏览器通常都会在一个比移动端屏幕更宽的虚拟窗口中渲染页面，这个虚拟窗口就是viewport；目的是正常展示没有做移动端适配的网页，让他们完整的展示给用户。</li></ol><h2 id="viewport的属性值" tabindex="-1">viewport的属性值 <a class="header-anchor" href="#viewport的属性值" aria-hidden="true">#</a></h2><ul><li>width：设置layout viewport的宽度，为一个正整数，或字符串&quot;width-device&quot;。</li><li>height：设置layout viewport的高度，这个属性对我们并不重要，很少使用。</li><li>initial-scale：设置页面的初始缩放值，为一个数字，可以带小数。</li><li>minimum-scale：允许用户的最小缩放值，为一个数字，可以带小数。</li><li>maximum-scale：允许用户的最大缩放值，为一个数字，可以带小数。</li><li>User-scalable：是否允许用户进行缩放，值为&quot;no&quot;或&quot;yes&quot;, no代表不允许，yes代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,40),i=[n];function o(p,c,r,d,h,g){return s(),a("div",null,i)}const D=l(e,[["render",o]]);export{C as __pageData,D as default};
