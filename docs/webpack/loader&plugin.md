
# loader & plugin

## 使用背景

- webpack 本身能做的事情只是对 js 代码的编译和打包（只认识低级 js）， 所以要让它能处理 css、vue、ts 等类型的文件时，就需要使用 loader ，他能帮助 webpack 把非 js 文件转义成 js 代码；而 plugin 是让 webpack 具有更强大的功能，比如：抽离css 文件，把打包后的 js 文件注入到一个 html 中等等

## loader的使用

```js
// webpack.config.js
module:{
    rules:[
        {
            test: /\.css/,
            use: [
                minicss.loader, 
                "css-loader", 
                {
                    loader: './mycss-loader', 
                    options:{ xxx: xxx}
                }
            ]
        }
    ]
}
```

- 通过上面的操作, css文件就会先经过我们自己编写的 loader 进行处理再使用其他loader


## 编写 loader
- loader 本质是一个方法，接受文件的内容，再把处理完的结果返回出去
- 返回的结果一般有两种形式：
    - 返回打包完可以直接使用的 js
    - 返回的结果给下一 loader 加工

- 编写 loader 主要是 node 的一些读写文件的操作和字符串的拼接

- 要读取 webpack.config,json 中传入的 options 可以利用 `babel-util` 库的 `getOptions(this)` 方法，该方法返回传入的 options 

```js
// mycss-loader.js
module.exports = function (cssContent) {
    return cssContent.replace("10px", "1px")
}
```

## plugin的使用

- plugins 在 webpack.config.json 中是一个数组，通过 new Plugin() 使用

```js
plugins: [
    new HtmlWebpackPlugin({ /*这里传入相关参数*/ })
]
```

## 编写 plugin 

- 插件就是一个类，在 webpack 工作的过程中调用其 apply 方法实现在打包过程中对代码的操作
- 在项目构建或者打包完成之后我们想要做什么就可以通过编写插件来完成，比如：可以在 done 周期进行 dist 文件压缩 自动上传等功能的开发


```js
class myPlugin {
    constructor() { }
    apply(compiler) {
        compiler.hooks.emit.tap('myPlugin', (compilation) => {
            /* 可以从 compilation.assets 这个对象中获取 webpack 在 emit 生命周期编译的产物*/
            // 创建自定义文件内容
            const myfileContent = "hello plugin"
            // 添加自定义文件到 index.txt 中
            compilation.assets['index,txt'] = {
                source: () => { myfileContent }, // 定义文件内容
                size: () => myfileContent.length // 定义文件大小
            }

        })
    }
}

module.exports = myPlugin
```

## loader 和 plugin 区别

- loader 会对非 js 文件进行转义，让 webpack 具备处理其他文件类型的能力
- plugin 不会对文件操作，它可以监听到 webpack 运行过程中生命周期的事件，在相应时期改变打包产物
