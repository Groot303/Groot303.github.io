# webpack基本操作

## webpack处理html

:boom: 我们需要 html 文件做到
1. 给 webpack 提供一个 html 模板
2. 打包后生成一个 html 文件
3. 打包出来的 html 自动引入 js
- html 作为承载css和js的载体，不需要webpack识别，所以不用loader而是使用插件来处理



## webpack处理css

:boom: 转义css文件, 抽离css文件, 压缩css文件 等等

- css-loader：处理css文件
- mini-css-extract-plugin: 把css文件抽离出来
- css-minimizer-webpack-plugin: 压缩css文件

## webpack处理图片等其他资源
- webpack5 自带了对其他资源的处理,只需要配置一个type 属性
- url-loader：把图片转成base64 （webpack自带了）



## webpack处理js

####  1. babel-loader转义

- 本身不进行编译。只是一个接口
- babel-loader 调用 @babel/core 编译

#### 2. 代码分割和打包（webpack的本质工作）

:boom: 对于单入口, 所有代码都在一个文件里,会导致代码打包文件过大,所以需要把一些不需要马上用到的文件分割出来, 加快首屏加载的速度; 当然代码分割之后就会照成更多的文件请求, 所以代码体积较大且后面才使用到的文件才使用代码分割 

##### 单入口(runtime + vendor + 核心业务 + 异步模块)
- 文件比较大，而且后面才使用更适合代码分割

##### 多入口(runtime + vendor + 每个入口的核心业务 + 被公共引用的代码)

- 当一个文件被多个文件同时引用时, 会造成多次打包的问题, 需要把这个文件拆分打包
- 多入口主要是重复加载同一个文件


```js

optimization: {
    splitChunks: {
        	chunks: "all",  //all(同步和异步),async(异步) initial(同步),
		    // 第三方库抽离
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "vendor.js",
                    chunks: "all",
                    minChunks: 1,
                }
            },
			// 业务代码抽离
            common: {
                filename: "common.js",
                chunks: "all",
                minChunks: 2, // 模块被引用两次
                minSize: 0, // 最小的拆分量
            }
    }
	// 运行时代码
    runtimeChunk: {
        name: "runtime.js"
    }
}
```
#### 3. eslint 代码质量和格式优化


```js
// eslinrc
/* eslint-env node */
module.exports = {
	// root: true,
	env: {
		browser: true,
		es2021: true,
	},
	// 继承别人的规范
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	overrides: [],
	// 解析配置
	parserOptions: {
		// 使用什么es版本
		ecmaVersion: "latest",
		// 使用什么模块化规范
		sourceType: "module",
		parser: "@typescript-eslint/parser",
	},
	parser: "vue-eslint-parser",
	// 特殊语法的支持。额外的rules + 一套现成的规范
	plugins: ["vue", "@typescript-eslint"],
	//检查细节
	rules: {
		// 组件名称不是多字母组成，会报这个错误“Component name “XXX“ should always be multi-word”。我们的组件很多是拼音简写，所以经常会有这个错误
		// 将其设置为0取消报错
		"vue/multi-word-component-names": 0,
		// 解决折行报错
		// "vue/html-closing-bracket-newline": ["error", "never"],
		// 不检查 ts-ignore
		// refer: https://blog.csdn.net/cc18868876837/article/details/116663244
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-empty-function": "off",
	},
};
```
