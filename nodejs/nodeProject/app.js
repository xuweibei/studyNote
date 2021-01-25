const express = require('express');
const app = express();
const swig = require('swig');

//设置静态文件托管，当用户访问的url以/public开头，那么直接就去找__dirname+'/public'下的文件
app.use('/public', express.static(__dirname + '/public'));
//配置应用模板
//定义当前应用所使用的的模板
//第一个参数是模板引擎的名称，同时也是文件的后缀，第二个参数是用于解析处理模板内容的方法
app.engine('html', swig.renderFile);
//设置模板文件存放的目录，第一个参数是view（固定用法），第二个参数是目录
app.set('views', './views');
//注册所使用的模板引擎，第一个参数必须是 view engine,第二个参数和app.engine这个方法中的第一个参数（模板名称）是一致的
app.set('view engine', 'html');
//开发状态下设置取消缓存
swig.setDefaults({ cache: false });

app.use('/admin', require('./routers/admin'));
app.use('/main', require('./routers/main'));
app.use('/api', require('./routers/api'));
// app.get('/', (req, res) => {
//   // res.writeHead(200, {
//   //   'content-type': 'text/html;charset=utf-8',
//   // });
//   res.render('index');
// });

//这是一种设置样式的方式
// app.get('/main.css', (req, res) => {
//   res.writeHead(200, {
//     'content-type': 'text/css;chartset=utf-8',
//   });
//   res.end('body{background:red}');
// });
app.listen(8080);
