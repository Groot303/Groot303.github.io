# 前端工程化之代码质量和代码格式

### 问题背景

- 在团队协作的过程中，由于每个开发人员编写代码的习惯或者使用的代码编辑器不同，很大可能会造成整个团队的代码风格不一致，导致在代码合并的时候需要修改大量代码的格式，对协同开发很不友好

### ESlint

##### ESlint 解决的问题

1. 代码质量问题：某些使用方式的问题
2. 代码风格问题：风格不符合一定的规则

- 以上问题都可以通过配置 .eslintrc 文件统一

:boom: 但是，有非常多的格式问题不可能做到全部一一配置，所以有些公司提出了自己公司的标准，如：Airbnb；通过配置就可以使用他们的规范了

```js
// .eslintrc 
{
    "extends": ["airban"]
}
```

##### ESlint 存在的问题

- eslint 更注重的是代码的质量，防止代码出现 bug， 其次才是代码规范，在一些代码风格上可能没有规范；而且无法格式化 html、css等文件

### Prettier

- prettier很好地解决了代码规范的问题，而且可以格式化html、css等文件

### ESlint + Prettier 

- 使用这两者的组合可以很好的解决代码质量和代码格式的问题

##### 存在问题

- 两者一起使用的时候可能会存在冲突，为了解决这个问题，可以在eslint配置文件中配置以下规则：

```js
// .eslintrc 
{
    "extends":  ["plugin:prettier/recommended"]
}
```

- 以上配置相当于把 prettie 推荐的格式问题配置以 eslint rules 的方式写入，简单的说我们希望报错的是 eslint，而修改格式的是 prettier

##### 配合vscode插件使用

- 如果不是用则需要使用命令来对代码进行检查

```js
// eslint 检查代码
eslint xxx.js
// eslint 自动修复代码
eslint --fix xxx.js
// prettier 格式化代码
prettier --write xxx.js
```

- 使用 vscode 的 ESLint 和 Prettier 插件的话，vscode 会在你编写代码的时候报错或者发出警告

### 关于 .eslintrc 和 .prettierrc 文件

- 以 vscode 为例，如果有这两个文件，并且设置了ctrl s 自动保存，那么ctrl s 时，会以这两个文件为标准来进行格式化；总之，如果有格式配置的文件，会以项目配置文件为主，没有则使用 setting.json 中的配置

- 因为无法保证所有协同开发的 coder 都使用同一个编译器和插件，所以尽量要编写这两个文件，以这两个文件的配置为标准

### 其他问题

- 为了以防万一，可以添加一个 pre-commit 钩子，确保没有通过 lint 的代码不能提交

##### 添加pre-commit钩子步骤

在协同项目开发中，你可以使用 Git 钩子（Git hooks）中的 `pre-commit` 钩子来确保在提交代码之前运行 lint 检查，并防止提交不符合规范的代码。以下是添加 `pre-commit` 钩子的一般步骤：

1. **进入项目目录**：首先，进入你的协同项目的根目录，确保你在项目目录中工作。

2. **创建 pre-commit 钩子脚本文件**：在项目目录下，创建一个名为 `.git/hooks/pre-commit` 的文件，这是 Git `pre-commit` 钩子的脚本文件。如果 `.git/hooks` 目录下还没有 `pre-commit` 文件，请创建一个。

3. **编辑 pre-commit 钩子脚本**：使用文本编辑器打开 `.git/hooks/pre-commit` 文件，并在其中添加以下内容：

   ```bash
   #!/bin/bash

   # 运行 lint 检查命令，例如 eslint
   npm run lint

   # 获取上一条命令的返回值
   LINT_RESULT=$?

   # 如果 lint 检查失败，阻止提交
   if [ $LINT_RESULT -ne 0 ]; then
     echo "Lint 检查失败，请修复代码后再次提交。"
     exit 1
   fi
   ```

   这个脚本会运行你的 lint 检查命令（例如 `npm run lint`），并根据 lint 的返回值来决定是否允许提交。如果 lint 检查失败，脚本会输出错误消息并阻止提交。

4. **使 pre-commit 钩子脚本可执行**：在编辑完 `pre-commit` 钩子脚本后，确保它具有执行权限。你可以使用以下命令来赋予它执行权限：

   ```bash
   chmod +x .git/hooks/pre-commit
   ```

5. **测试钩子**：现在，你可以尝试提交代码并查看是否会触发 `pre-commit` 钩子。如果 lint 检查失败，提交将被阻止。

请确保你的项目中已经配置了适当的 lint 检查工具（例如 ESLint），并且已经设置了正确的 lint 脚本（例如 `npm run lint`）。此外，根据你的项目需要，你可以自定义 `pre-commit` 钩子脚本来适应特定的 lint 配置和工作流程。