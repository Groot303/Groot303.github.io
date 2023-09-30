
## loader的本质

- 本质是一个方法，接受文件的内容，再把处理完的结果返回出去

```js
// mycss-loader.js
module.exports = function (cssContent) {
    return cssContent.replace("10px", "1px")
}
```

```js
// webpack.config.js
{
    test: /\.css/,
    use: [minicss.loader, "css-loader", './mycss-loader']
}
```

- 通过上面的操作, css文件就会先经过我们自己编写的 loader 进行处理再使用其他loader