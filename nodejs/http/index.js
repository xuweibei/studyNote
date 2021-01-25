const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  // res.statusCode = 201; //单独设置状态码
  // res.setHeader('lala', 'haha');//单独设置请求头
  //第一个参数为状态码，第二个为状态码的描述，第三个为请求头的具体内容
  // res.writeHead(200, 'hhaa', {
  //   'content-type': 'text/html;charset=utf-8',
  // });
  res.end('哈哈哈');
});

server.listen(8080, 'localhost', () => {
  console.log('启动了');
});
