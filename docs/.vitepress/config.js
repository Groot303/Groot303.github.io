import { defineConfig } from 'vitepress';

export default defineConfig({
    title: "60岁coder",
    description: "just playing around",
    base: '/leiblog/',
    themeConfig: {
        nav: [
            // { text: 'Guide', link: '/guide', activeMatch: '/guide/what-is-vitepress' },
            // {
            //     text: '下拉选择框',
            //     items: [
            //         { text: 'options-1', link: '/' },
            //         { text: 'options-2', link: 'http://www.baidu.com' }
            //     ]
            // }
        ],
        sidebar: [{
            text: 'JavaScript',
            items: [
                { text: 'js的基础问题', link: '/JavaScript/js的基础问题' },
                { text: 'js的数据类型相关问题', link: '/JavaScript/js的数据类型相关问题' },
                { text: 'call、apply、bind', link: '/JavaScript/call、apply、bind' },
                { text: '执行上下文', link: '/JavaScript/执行上下文' },
                { text: '原型和原型链', link: '/JavaScript/原型和原型链' },
                { text: '闭包', link: '/JavaScript/闭包' },
            ],
            collapsible: true,
            collapsed: true

        }, {
            text: 'ES6',
            items: [
                { text: '基础知识', link: '/ES6/ES6基础知识' },
            ],
            collapsible: true,
            collapsed: true
        }, {
            text: 'Vue基础',
            items: [
                { text: 'vue2基础知识', link: '/Vue基础/vue2基础知识' },
                { text: 'vue3基础知识', link: '/Vue基础/vue3基础' },
                { text: 'vue3和vue2的区别', link: '/Vue基础/vue3和vue2的区别' },
                { text: 'MVC、MVP、MVVM', link: '/Vue基础/MVC、MVP、MVVM' },

            ],
            collapsible: true,
            collapsed: true
        }, {
            text: 'Vue核心插件',
            items: [
                { text: 'vuex基础', link: '/Vue核心插件/vuex基础' },
                { text: 'vue-router基础', link: '/Vue核心插件/vue-router基础' },
                { text: '刷新页面vuex状态丢失', link: '/Vue核心插件/刷新页面vuex状态丢失' },
                { text: '前端路由', link: '/Vue核心插件/前端路由' },
            ],
            collapsible: true,
            collapsed: true
        }, {
            text: 'Vue原理',
            items: [
                { text: 'vue源码', link: '/Vue原理/vue源码' },
                { text: 'vue的双向数据绑定原理', link: '/Vue原理/vue的双向数据绑定原理' },
                { text: 'vue3的数据响应式原理', link: '/Vue原理/vue3的数据响应式原理' },
            ],
            collapsible: true,
            collapsed: true
        }, {
            text: '浏览器原理',
            items: [
                { text: 'cookie、session、token', link: '/浏览器原理/cookie、session、token' },
            ],
            collapsible: true,
            collapsed: true
        }],

    }

});