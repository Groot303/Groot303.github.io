import { defineConfig } from 'vitepress';

export default defineConfig({
    title: "Just Playing Around",
    description: "just playing around",
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    themeConfig: {
        //搜索框
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        nav: [
            //导航栏
            {
                text: '笔记分类',
                items: [
                    { text: 'html&css&js', link: '/html&css&js/html/基础知识' },
                    { text: 'ES6', link: '/ES6/ES6基础知识' },
                    { text: 'Vue', link: '/Vue基础/vue2基础知识' }
                ]
            },
            { text: '项目问题', link: '/project/index' },
            { text: '关于知识库', link: '/about/index' },
            { text: '生活思考', link: '/think/index' },
        ],
        sidebar: {
            '/html&css&js': [{
                    text: 'html',
                    items: [
                        { text: '基础知识', link: '/html&css&js/html/基础知识' },
                        { text: 'html5知识', link: '/html&css&js/html/html5' },

                    ],
                    collapsible: true,
                    collapsed: true
                },
                {
                    text: 'css',
                    items: [
                        { text: 'css基础知识', link: '/html&css&js/css/css基础知识' },
                        { text: 'css3', link: '/html&css&js/css/css3' },
                    ],
                    collapsible: true,
                    collapsed: true
                },
                {
                    text: 'js',
                    items: [
                        { text: 'js的基础问题', link: '/html&css&js/JavaScript/js的基础问题' },
                        { text: 'js的数据类型相关问题', link: '/html&css&js/JavaScript/js的数据类型相关问题' },
                        { text: 'call、apply、bind', link: '/html&css&js/JavaScript/call、apply、bind' },
                        { text: '执行上下文', link: '/html&css&js/JavaScript/执行上下文' },
                        { text: '原型和原型链', link: '/html&css&js/JavaScript/原型和原型链' },
                        { text: '闭包', link: '/html&css&js/JavaScript/闭包' },
                    ],
                    collapsible: true,
                    collapsed: true
                },

            ],

            '/ES6': [{
                text: 'ES6',
                items: [
                    { text: '基础知识', link: '/ES6/ES6基础知识' },
                ],
                collapsible: true,
                collapsed: true
            }],

            '/Vue': [{
                    text: 'Vue基础',
                    items: [
                        { text: 'vue2基础知识', link: '/Vue基础/vue2基础知识' },
                        { text: 'vue3基础知识', link: '/Vue基础/vue3基础' },
                        { text: 'vue3和vue2的区别', link: '/Vue基础/vue3和vue2的区别' },
                        { text: 'MVC、MVP、MVVM', link: '/Vue基础/MVC、MVP、MVVM' },

                    ],
                    collapsible: true,
                    collapsed: true
                },
                {
                    text: 'Vue核心插件',
                    items: [
                        { text: 'vuex基础', link: '/Vue核心插件/vuex基础' },
                        { text: 'vue-router基础', link: '/Vue核心插件/vue-router基础' },
                        { text: '刷新页面vuex状态丢失', link: '/Vue核心插件/刷新页面vuex状态丢失' },
                        { text: '前端路由', link: '/Vue核心插件/前端路由' },
                    ],
                    collapsible: true,
                    collapsed: true
                },
                {
                    text: 'Vue原理',
                    items: [
                        { text: 'vue源码', link: '/Vue原理/vue源码' },
                        { text: 'vue的双向数据绑定原理', link: '/Vue原理/vue的双向数据绑定原理' },
                        { text: 'vue3的数据响应式原理', link: '/Vue原理/vue3的数据响应式原理' },
                    ],
                    collapsible: true,
                    collapsed: true
                },

            ],
            // '/浏览器原理': [{
            //     text: '浏览器原理',
            //     items: [
            //         { text: 'cookie、session、token', link: '/浏览器原理/cookie、session、token' },
            //     ],
            // }]
            '/project': [{
                text: 'bug万象集',
                items: [
                    { text: '博客搭建', link: '/project/博客搭建' },
                ],
                collapsible: true,
                collapsed: true
            }, ]
        }
    }

});