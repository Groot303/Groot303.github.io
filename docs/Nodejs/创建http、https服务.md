## node 创建http https服务

### http

- 服务本质是就是根据不同的请求给点客户端返回不同的东西
- req是一个可读流，res是一个写入流
- 借助url模板来解析url地址

- res.setHeader() / res.writeHeader() : 设置响应头
- req.setHeader() / req.writerHeader() : 设置请求头

## 通过node发请求

- 利用http.request()


### https服务

- 主要区别是https比http多了一个私钥和由私钥生成的证书