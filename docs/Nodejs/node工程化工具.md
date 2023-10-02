# Node工程化工具的开发

:boom: 一个项目从立项到上线整个过程都会涉及到 node 的相关工具，所以了解 node 工程化的工具的诞生和学会自己开发 node 工具非常有必要

## 开发 node 工具的步骤及前置知识
1. 让电脑有这个指令
2. package.json 文件下的 bin 目录，指定全局安装的指令
```js  
 // package.json
 "bin":{
    "node-cli":"index.js"
  },
```
3. 告诉电脑在什么环境中执行这个指令
```js
// index.js
#!/usr/bin/env node
```
- 在 package.json 文件中
    -  script 配置的脚本指令是为了简化开发者手动输入较长的命令，项目外无法调用
    - bin 配置的脚本指令是全局安装了，可以在电脑的任意文件夹中使用

- 在开发完成指令后发到 npm 上，需要使用的人就可以使用 npm 来进行安装
- 在开发测试阶段需要使用 `npm-link` 把项目暴露到全局
- 然后通过 `node-cli` 就可以运行编写在 `index.js` 中工具了

## 一、编写 index.js (自定义脚手架)

- 自定义脚手架的知识
  1. 给用户提供一些问题 （利用`inquirer`库），根据开发者的指令参数进行相应的输出（利用 `commander` 库）
  2. 按用户的回答拉去模板，一般情况下是把完整的模板放在的git仓库中，然后把全部代码拉取下来，再根据用户的答案去除一些开发者不想要的模板，如果部分模板不容易去除，则单独放在一个仓库中


#### commander 库
-  平时写在指令中的后缀，如：npm init -y 中的 -y 指令（这个指令表示yes的意思，他会自动回答所有初始化问题，不用用户注逐一确认每一个选项）; 这个后缀指令的事项依赖的就是 `commander`

```js
// commander 

import { Command } from "commander"
const program = new Command()

// 定义 option 类型的指令 带 “-” 类型的
// [num]: 表示选填 <num>：表示必填
program.option("-my [num]", "diy my", (num) => {
    console.log('u use a -my and input' + num + "你真帅！")
})
// 定义版本
program.version('1.0.0')
// 定义不带 “-” 的类型指令 
program.command('init <name>').action((name) => {
    console.log(name)
})
program.parse(process.argv) // process.argv 可以获得开发者输入的指令参数
```

#### inquirer 库

- `inquirer` 可以实现在使用指令时候对用户做出提问

```js

#!/usr/bin/env node

import inquirer from "inquirer"
import downgit from "download-git-repo"
import fs from "fs"
import path from "path"

// 生成带颜色字体
import chalk from "chalk"
// 生成项目过程中的动画
import ora from "ora"
// 设置问题
// 类型：input（输入回答） list（单选） checkbox（多选） confirm（判断）tawlist（代编号单选）
inquirer.prompt([
    {
        type: "input",  //问题类型
        message: "项目名称", // 问题说明
        name: "projectName" // 键名，会根据选择返回（唯一的不能重复）
    },
    {
        type: "list",
        message: "vue/react",
        name: "projectType",
        choices: [
            "vue", "react"
        ]
    },
    {
        type: "checkbox",
        message: "选择功能",
        name: "projectFeature",
        choices: [
            "webpack", "babel", "router"
        ]
    },
    {
        type: "confirm",
        message: "是否生成",
        name: "render",
    },
]).then((res) => {
    // 开启动画
    const spiner = ora("项目创建中").start()
    // 获取到用户的选择拉取模板
    let _target = 'facebook/react'
    let _outputDir = path.resolve(process.cwd(), res.projectName)
    if (res.projectType == "vue") {
        _target = "vuejs/vue"
    }
    // 创建项目文件夹
    fs.mkdirSync(_outputDir)
    // 拉去模板：参数：模板地址，要创建的项目名称，以什么方式拉取 {clone: true} 表示用 git clone 方式（默认false），回调函数
    downgit("github:" + _target, _outputDir, {}, function (err) {
        if (err) {
            throw err
        }
        console.log(chalk.green("项目创建成功")) // 指定绿色文字
        spiner.stop()
    })
})
/*
终端输出如下：

? 项目名称 test
? vue/react vue
? 选择功能 webpack
? 是否生成 Yes
{
  projectName: 'test',
  projectType: 'vue',
  projectFeature: [ 'webpack' ],
  render: true
}*/

```

## 二、编写其他工具

### webpack plugin

- 插件就是一个类，在 webpack 工作的过程中调用其 apply 方法实现在打包过程中对代码的操作
- 在项目构建或者打包完成之后我们想要做什么就可以通过编写插件来完成

```js
class myPlugin {
    constructor(config) {
        this.config = config
    }
    // 在配置文件中注册插件之后， webpack 工作过程就会调用 apply 方法
    // compiler 表示整个打包过程
    apply(compiler) {
        // 监听webpack 的生命周期: emit: 表示打包完成 done：表示打包结束
        // compilation 表示这个过程的打包产物，可以对这个产物进行操作
        compiler.hooks.emit.tap('myplugin', (compilation) => {
            // 做一些事请
        })
    }
}
module.exports = myPlugin

// 可以在 done 周期进行 dist 文件压缩 自动上传等功能的开发
```

### webpack loader

### 小工具

- 日常开发的过程中的一些重复的操作、数据操作、文件操作等等都可以通过 node 编写一些的小工具来解决
- 充分利用 `inquirer` 库及读取文件 创建文件的操作
    1. 复杂数据的筛选，如:通过路由查找项目的组件，复制组件名字（copy-paste插件）
    2. 读取一些可复用的项目代码（把模板提取到一个公共文件中）不用重复性的复制粘贴了
    3. 数据变成表格
    4. git 一键提交 (利用 children.exec())
    5. 命令行操作都可以