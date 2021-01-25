const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer();

const mustUrl = __dirname + '/html/';

server.on('request', (req, res) => {
  const path = url.parse(req.url);
  switch (path.pathname) {
    case '/admin':
      renderHtml('index.html', res);
      break;
    case '/login':
      renderHtml('login.html', res);
      break;
    case '/login/check':
      if (req.method.toUpperCase() === 'GET') {
        const n = querystring.parse(path.query);
        // console.log(n);
      } else if (req.method.toUpperCase() === 'POST') {
        let content = '';
        //post请求会将数据放在缓冲区，所以需要通过req 的data和end方法来进行获取拼接
        req.on('data', (data) => {
          content += data;
        });
        req.on('end', () => {
          console.log(content);
          const n = querystring.parse(content);
          console.log(n);
        });
      }
      break;
    default:
      res.writeHead(404, {
        'content-type': 'text/html;charset=utf-8',
      });
      res.end('没有此页');
      break;
  }
});

function renderHtml(str, res) {
  fs.readFile(mustUrl + str, (err, data) => {
    if (err) return;
    res.writeHead(200, {
      'content-type': 'text/html;charset=utf-8',
    });
    res.end(data);
  });
}
server.listen(8080, 'localhost', () => {
  console.log('启动了');
});
