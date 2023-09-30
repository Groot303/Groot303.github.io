# webpack其他技巧配置

## hash 值

##### 使用背景
- 浏览器加载了一个资源后会缓存资源, 如果使用的名字不会改变, 当文件内容改变之后还是引用旧的文件; 所以使用 hash 值就能解决这个问题, 当文件内容改变之后的 hash 值也会发生改变, 浏览器就会获取新的文件

##### 问题
- 当修改其中一个文件时, hash 值改变所有的文件都会重新打包

##### 优化

- 使用 chunkhash , 这样就可以最大程度上使用打包缓存, 用户也能最大程度上使用浏览器缓存, 加快打包速度


## resolve

##### alias: 别名, 提供路径简写

##### extensions: 省略文件后缀

```js
// 配置一些简化功能
resolve: {
    alias: {
        "@css": "./css"
    },
    extensions: [".js", ".css"]
}
```
## require.context

- 批量引入指定文件夹下的所有文件

```js
// app.js

// 参数分别表示: 要去./mode文件夹中引入  ./mode 下的子文件夹是否引入  要引入的文件类型 
const r = require.context("./mode", false, /.js/)
// 文件的数组
r.keys().forEach((item) => {
    // default 中就是文件暴露出来的东西
    r(item).default
})
```

## 一些资源需要放到cdn上, 利用 publicPath

```js
output: {
        // __dirname 表示当前目录下的绝对路径
        path: __dirname + "/dist",
        // 把入口名和hash前四位加入打包后文件名
        filename: "[name].[hash:4]bundle.js",
        pubilcPath: "www.xxx.com" // cdn 的地址
},
```


## 一些 webpack 配置汇总

```js
//webpack.config.js

// 编写配置文件需要commonjs规范，因为webpack是在node环境中执行的

// eslint插件
const eslintplugin = require("eslint-webpack-plugin");
// css 抽离成单独的文件
const minicss = require("mini-css-extract-plugin");
// 压缩 css 文件
const minimizer = require("css-minimizer-webpack-plugin")
// html 插件
const htmlwebpackplugin = require("html-webpack-plugin")
module.exports = {
    // webpack4之后必填，指定环境
    mode: "development",
    // 必填项： 指定文件入口
    // 单入口写法
    // entry: "./app.js",
    // 多入口文件
    entry: {
        app: "./app.js"
    },
    // 必填项：指定文件出口
    output: {
        // __dirname 表示当前目录下的绝对路径
        path: __dirname + "/dist",
        // 把入口名和hash前四位加入打包后文件名
        filename: "[name].[hash:4]bundle.js",
        pubilcPath: "www.xxx.com" // cdn 的地址
    },
    // 开发模式配置项
    devServer: {},
    // loader编写的地方
    module: {
        rules: [
            {
                test: /\.js/,
                // loader: "babel-loader"
                // use 可以传配置项
                use: {
                    loader: "babel-loader",
                    options: {}
                }
            },
            {
                test: /\.css/,
                use: [minicss.loader, "css-loader", './mycss-loader']
            }
        ]
    },
    // 插件
    plugins: [
        // 多入口的情况需要再使用一次这个插件 
        new htmlwebpackplugin({
            template: "./index.html",
            filename: "index.html",
            // 多入口指定js文件
            // chunks:["app"]
            // 打包结果是否压缩
            minify: {
                // 是否移除空格换行
                collapseWhitespace: false,
                // 是否移除注释
                removeComments: false,
                //是否移除属性多余的空格
                removeAttributeQuotes: false,
            },
            // 指定引入的 js css 加入到哪里
            inject: "boby", // boby | true 或 head | false

        }),
        new eslintplugin(),
        new minicss({
            filename: "test.bundle.css"
        }),
        new minimizer()
    ],
    // 优化相关的配置
    optimization: {
        runtimeChunk: {
            name: "runtime.js"
        }
    },
    // 配置一些简化功能
    resolve: {
        alias: {
            "@css": "./css"
        },
        extensions: [".js", ".css"]
    }
}
```