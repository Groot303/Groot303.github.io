import{_ as s,c as i,b as e,d as l,e as t,w as a,a as o,r as n,o as h}from"./app.0a72f3ba.js";const J=JSON.parse('{"title":"vue-router基础知识","description":"","frontmatter":{"title":"vue-router基础知识","categories":["Vue-router"],"tags":["vue-router"]},"headers":[{"level":2,"title":"全局路由钩子","slug":"全局路由钩子","link":"#全局路由钩子","children":[]},{"level":2,"title":"单个路由独享钩子","slug":"单个路由独享钩子","link":"#单个路由独享钩子","children":[]},{"level":2,"title":"组件内的钩子","slug":"组件内的钩子","link":"#组件内的钩子","children":[]},{"level":2,"title":"完整的导航解析流程（假设是从a组件离开，第一次进入b组件）","slug":"完整的导航解析流程-假设是从a组件离开-第一次进入b组件","link":"#完整的导航解析流程-假设是从a组件离开-第一次进入b组件","children":[]},{"level":2,"title":"hash/history区别","slug":"hash-history区别","link":"#hash-history区别","children":[]},{"level":2,"title":"hash和query的位置","slug":"hash和query的位置","link":"#hash和query的位置","children":[]},{"level":2,"title":"params和query的区别","slug":"params和query的区别","link":"#params和query的区别","children":[]},{"level":2,"title":"如何获取页面的hash变化","slug":"如何获取页面的hash变化","link":"#如何获取页面的hash变化","children":[]}],"relativePath":"Vue核心插件/vue-router基础.md"}'),u={name:"Vue核心插件/vue-router基础.md"},d=e("h2",{id:"全局路由钩子",tabindex:"-1"},[l("全局路由钩子 "),e("a",{class:"header-anchor",href:"#全局路由钩子","aria-hidden":"true"},"#")],-1),_=e("li",null,"router.beforeResolve 全局解析守卫，在 beforeRouteEnter 之后调用",-1),c=e("li",null,"router.afterEach 全局后置钩子，进入路由之后",-1),f=o("",5),p=e("li",null,"导航被触发。",-1),b=e("strong",null,"beforeRouteLeave",-1),g=e("strong",null,"全局的beforeEach",-1),m=e("strong",null,"beforeRouteUpdate",-1),y=e("strong",null,"beforeEnter",-1),v=e("li",null,"解析异步路由组件。",-1),q=e("strong",null,"beforeRouteEnter",-1),x=e("strong",null,"beforeResolve",-1),E=e("li",null,"导航被确认。",-1),R=e("strong",null,"afterEach",-1),T=e("strong",null,"beforeCreate",-1),k=e("strong",null,"created",-1),V=e("strong",null,"beforeMount",-1),S=e("strong",null,"deactivated",-1),$=e("strong",null,"mounted",-1),w=e("strong",null,"activated",-1),C={start:"11"},N=e("li",null,"触发 DOM 更新",-1),A=e("strong",null,"beforeRouteEnter",-1),D=o("",11);function P(I,B,L,M,O,U){const r=n("font");return h(),i("div",null,[d,e("ul",null,[e("li",null,[l("router.beforeEach 全局前置守卫，进入路由之前，"),t(r,{color:"red"},{default:a(()=>[l(" 可用于登录验证、全局路由loading 、路由拦截")]),_:1}),l("等")]),_,c]),f,e("ol",null,[p,e("li",null,[l("在失活的组件里调用 "),t(r,{color:"red"},{default:a(()=>[b]),_:1}),l(" 守卫。")]),e("li",null,[l("调用 "),t(r,{color:"red"},{default:a(()=>[g]),_:1}),l(" 守卫。")]),e("li",null,[l("在重用的组件里调用 "),t(r,{color:"red"},{default:a(()=>[m]),_:1}),l(" 守卫(2.2+)。")]),e("li",null,[l("在路由配置里调用 "),t(r,{color:"red"},{default:a(()=>[y]),_:1}),l("。")]),v,e("li",null,[l("在被激活的组件里调用 "),t(r,{color:"red"},{default:a(()=>[q]),_:1}),l("。")]),e("li",null,[l("调用全局的"),t(r,{color:"red"},{default:a(()=>[x]),_:1}),l(" 守卫(2.5+)。")]),E,e("li",null,[l("调用全局的 "),t(r,{color:"red"},{default:a(()=>[R]),_:1}),l(" 钩子。")])]),e("p",null,[l("💥 "),t(r,{color:"purple"},{default:a(()=>[T]),_:1})]),e("p",null,[l("💥 "),t(r,{color:"purple"},{default:a(()=>[k]),_:1})]),e("p",null,[l("💥 "),t(r,{color:"purple"},{default:a(()=>[V]),_:1})]),e("p",null,[l("💥 "),t(r,{color:"purple"},{default:a(()=>[S]),_:1}),l("：离开缓存组件a，或者触发a的 beforeDestroy 和 destroyed 组件销毁钩子")]),e("p",null,[l("💥 "),t(r,{color:"purple"},{default:a(()=>[$]),_:1})]),e("p",null,[l("💥 "),t(r,{color:"purple"},{default:a(()=>[w]),_:1})]),e("ol",C,[N,e("li",null,[l("调用"),t(r,{color:"red"},{default:a(()=>[A]),_:1}),l(" 中 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。")])]),D])}const z=s(u,[["render",P]]);export{J as __pageData,z as default};
