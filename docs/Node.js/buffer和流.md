## buffer和流

:boom: buffer 可以理解为一个固定长度的字符串数组，存在于v8内存外，储存文件的二进制内容

##### buffer相关操作

1. 创建
```node
const bf1 = Buffer.alloc(10, '1')
const bf2 = Buffer.from("hello") 
console.log(bf1.toString());//1111111111
```

:boom: 流可以理解成一个管道

当一个文件很大的时候，如果用buffer一次性读取会造成系统卡顿，所以可以使用流进行读取