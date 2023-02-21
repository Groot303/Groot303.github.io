import{_ as e,c as l,o as a,a as i}from"./app.0a72f3ba.js";const _=JSON.parse('{"title":"前端路由的出现","description":"","frontmatter":{"title":"前端路由的出现","categories":["Vue-router"],"tags":["前端路由、SPA、SEO"]},"headers":[{"level":2,"title":"传统页面","slug":"传统页面","link":"#传统页面","children":[]},{"level":2,"title":"SPA（single-page-application）","slug":"spa-single-page-application","link":"#spa-single-page-application","children":[]},{"level":2,"title":"前端路由的出现","slug":"前端路由的出现","link":"#前端路由的出现","children":[]},{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":2,"title":"如何给SPA做SEO","slug":"如何给spa做seo","link":"#如何给spa做seo","children":[]}],"relativePath":"Vue核心插件/前端路由.md"}'),t={name:"Vue核心插件/前端路由.md"},s=i('<h2 id="传统页面" tabindex="-1">传统页面 <a class="header-anchor" href="#传统页面" aria-hidden="true">#</a></h2><ul><li>在前端技术早期，一个 url 对应一个页面，如果要切换页面，就会重新进行html、css等静态资源的请求，组合成一个新的页面；显然，页面的不断请求对用户体验非常不友好。</li></ul><p>💥 <strong>为了解决这个问题，SPA出现了</strong></p><h2 id="spa-single-page-application" tabindex="-1">SPA（single-page-application） <a class="header-anchor" href="#spa-single-page-application" aria-hidden="true">#</a></h2><ul><li><p>单页面通过一次性把项目中用到的html、css、js请求回来，它通过js动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验，页面切换更加流畅。</p></li><li><p>但是在 SPA 诞生之初，人们并没有考虑到“定位”这个问题——在内容切换前后，页面的 URL 都是一样的，这就带来了两个问题：</p><ul><li>SPA 其实并不知道当前的页面“进展到了哪一步”。我们前进到某个页面时，此时只要刷新一下页面，一切就会被清零，必须重复之前的操作、才可以重新对内容进行定位——SPA 并不会“记住”你的操作。</li><li>由于有且仅有一个 URL 给页面做映射，这对 SEO 也不够友好，搜索引擎无法收集全面的信息</li></ul></li></ul><p>💥 为了解决SPA出现的问题，就出现了前端路由</p><h2 id="前端路由的出现" tabindex="-1">前端路由的出现 <a class="header-anchor" href="#前端路由的出现" aria-hidden="true">#</a></h2><ul><li><p>单页面只有一个URL，但是我们又想要一个URL对应一个页面，前端路由就是一个专门维护组件和URL之间的对应关系的东西；</p></li><li><p>它根据浏览器地址栏pathname的变化，来匹配相应的页面组件，然后将其通过创建DOM节点的形式，塞入根节点中，这样就达到了无刷新页面切换的效果。</p></li><li><p>前端路由可以帮助我们在仅有一个页面的情况下，“记住”用户当前走到了哪一步——为 SPA 中的各个视图匹配一个唯一标识。这意味着用户前进、后退触发的新内容，都会映射到不同的 URL 上去。此时即便他刷新页面，因为当前的 URL 可以标识出他所处的位置，因此内容也不会丢失。</p></li></ul><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-hidden="true">#</a></h2><p>1️⃣ <strong>hash模式</strong></p><ul><li>通过hashchange事件监听url的变化，以当前的hash作为索引加载相应的页面资源，从而跳转到对应的子页面</li></ul><p>1️⃣ <strong>history模式</strong></p><ul><li>通过popstate事件监听url的变化，但是pushState/repaceState（H5的api，可以改变地址栏而不引起页面变化）点击事件并不会自动触发popstate事件（history.back()/history.forward()才会自动触发），我们可以通过pushState改变地址后手动调用popstate的回调函数去匹配相应的路由。</li></ul><h2 id="如何给spa做seo" tabindex="-1">如何给SPA做SEO <a class="header-anchor" href="#如何给spa做seo" aria-hidden="true">#</a></h2><p>1️⃣ <strong>SSR服务端渲染</strong></p><ul><li>将组件或页面通过服务端生成html再返回浏览器</li></ul><p>2️⃣ <strong>静态化</strong></p><ul><li>目前主流的静态化主要有两种： <ul><li>一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中</li><li>另外一种是通过WEB服务器的 URL Rewrite的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果</li></ul></li></ul>',18),r=[s];function p(n,h,o,c,d,u){return a(),l("div",null,r)}const S=e(t,[["render",p]]);export{_ as __pageData,S as default};
