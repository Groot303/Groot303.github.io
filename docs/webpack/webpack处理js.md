## webpack处理js

### ES6转化（loader处理）

#### babel-loader

- 本身不进行编译。只是一个接口
- babel-loader 调用 @babel/core 编译


### 代码规范（插件处理）：Eslint配置

```js
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

### 代码分割和打包（webpack的本质工作）

## webpack处理css

- css-loader：处理css文件
- minicss.loader: 把css文件抽离出来
- url-loader：把图片转成base64 （webpack自带了）

## webpack处理html

- html 作为承载css和js的载体，不需要webpack识别，所以使用插件来处理

- html-webpack-plugin

## 代码分割

##### 单入口(runtime + vendor + 核心业务 + 异步模块)
- 文件比较大，而且后面才使用更适合代码分割

#### 多入口(runtime + vendor + 每个入口的核心业务 + 被公共引用的代码)
- 多入口主要是重复加载同一个文件
- splitChunks

```js

optimization: {
    splitChunks: {
        chunks: "all",  //all(同步和异步),async(异步) initial(同步),
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "vendor.js",
                    chunks: "all",
                    minChunks: 1,
                }
            },
            common: {
                filename: "common.js",
                chunks: "all",
                minChunks: 2, // 模块被引用两次
                minSize: 0,
            }
    }
    runtimeChunk: {
        name: "runtime"
    }
}
```