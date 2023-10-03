# Vite 概况

## vite 为什么快

- 因为现代浏览器对 module 的支持，可以自动向服务器获取 import 的内容，所以 vite 不用像传统打包方式那样把全部文件编译构建成一个 bundlejs 返回给浏览器；vite 指定的入口是 html，访问 vite 服务时就把这个 html 返回渲染，后续浏览器需要哪个模块再返回那个模块，真正做到按需引入

## vite 核心

### 一、开发服务器

- vite 通过使用原生的 nodejs 来搭建服务器，读取、编译并返回相关模块给浏览器；
- vite 天生支持 ts 也是在 node 服务中对 ts 进行了处理
    - vite 支持的很多东西都是通过 node 服务来进行操作的
- 如果浏览器向 vite 服务请求一个 vue 文件，那么服务器会对vue文件处理并返回 html、css、js 给浏览器

### 二、rollup 打包

- rollup 打包不像 webpack 那样会插入比较多的 runtime 代码
- 一些第三方库不打包到 bundlejs 中