module.export = {
    description: "just playing around",
    base: '/xztx/',

}
import { defineConfig } from 'vitepress';

export default defineConfig({
    title: "60岁coder",
    description: "just playing around",

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
        }],

    }

});