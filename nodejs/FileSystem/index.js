var fs = require('fs');

// fs.open(path,flags,[mode],cb)
// 	path:要打开文件的路径
// 	flags:打开文件的方式 读/写
// 	mode: 设置文件的模式 读/写/执行  4/2/1
// 	cb:回调(err,fd)=>{}
// 			err：文件打开失败的时候错误保存在这，文件打开成功这个值为null
// 			fd：被打开文件的标识
//异步方式
fs.open('./1.txt', 'r', (err, fd) => {
  console.log(err);
  console.log(fd);
});

fs.open('./1.txt', 'r', (err, fd) => {
  console.log(err);
  console.log(fd);
});
//同步方式
const ha = fs.openSync('./1.txt', 'r');
console.log(ha);
