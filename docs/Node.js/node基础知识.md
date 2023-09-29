## Node.js 基础知识

### 常用工具模块

##### 一、path：路径处理工具

- basename: 路径最后一部分
- dirname:  当前目录下
- parse：解析路径对象
- format：对象解析为路径，与parse相对
- resolve：把一个路径解析为绝对路径
- join：路径拼接

```node
const path = require("path");
let demo = "./src/a/b/c.js"
let p = path.parse(demo)

console.log(path.basename(demo));   // c.js
console.log(path.dirname(demo));    // ./src/a/b
console.log(path.parse(demo));      // { root: '', dir: './src/a/b', base: 'c.js', ext: '.js', name: 'c' }

console.log(path.format(p));        // ./src/a/b\c.js
console.log(path.resolve(__dirname)); // __dirname是一个全局变量, D:\zz\Note\webNote\Node.js

console.log(path.resolve("../", '.d.js'));  // D:\zz\Note\webNote\.d.js
console.log(path.join("./a", "./b"));  // a/b

```

##### 二、process：进程相关

- argv：启动node时的命令行参数
- execArgv：node命令后的直接参数
- env：用户环境信息
- cwd()：获取当前进程工作目录
- exit(): 退出进程
- stdout、stdin：屏幕输出和输入
- memoryUsage()： 内存使用情况
- 监听：process 是一个可监听对象

##### 三、util:  工具函数

- promiseify：把异步回调函数包装为promise形式
- callbackify：将一个返回值为promise的函数改成回调


:boom: node 所有异步操作都是通过回调获取结果的，比较容易形成回调地狱；几乎所有的回调第一个参数都是err，后面的才是结果。这也是 node 作者嫌弃的原因，后面写了deno


### 文件操作

##### api 

- readFile 读取
    + 文件读取的方法全部是异步操作
    + 文件操作的异步形式都会有一个回调，在最后一个参数
    + 所有的方法都会有同步版本
- writeFile 写入
- unlink  删除
- appendFile 插入
- rename 移动（重命名）
- copyFile 拷贝

```node

const fs = require('fs')
fs.writeFile("./test.txt", "hello", function (err, res) { }) //异步版本
const res = fs.writeFileSync("./test2.txt", "hello") // 同步版本
```

##### 文件夹操作

- readdir 读取
- mkdir 创建
- rmdir 删除
- 拷贝和移动：没有直接api 只能遍历

##### 常用的检测方法

- exits 是否存在
- stat 获取文件的状态信息

##### 一些好用的第三方库
 
- fs-extra 
- compressing
    - .zip.compressDir： 压缩
    - .zip.uncompress：解压

##### 一些高级的文件操作

- watch 监听（webpack中监听文件改变重新打包）
- open 自由操作
- read、write 自由读取和写入
- writeStream、readStream 流形式操作