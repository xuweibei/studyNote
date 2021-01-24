const fs = require('fs');
const filename = './1.txt';
//向文件filename中写入 lala 这个内容，如果没有这个文件则新增这个文件
// fs.writeFile(filename, 'lala', (a, b, c) => {
//   console.log(a, b, c);
// });

//向filename中增加 哦哦  这个内容，如果没有这个文件则新增这个文件
// fs.appendFile(filename, '哦哦', (a, b, c) => {
//   console.log(a, b, c);
// });

//判断是否存在filename这个文件
// fs.exists(filename, (a, b, c) => {
//   console.log(a, b, c);
// });
// const onOff = fs.existsSync(filename);
// console.log(onOff);

//读取文件内容
// fs.readFile(filename, (a, data) => {
//   console.log(a, data.toString());
// });

//删除文件
// fs.unlink(filename, (err, data) => {
//   console.log(err, data);
// });

//对文件进行重命名
// fs.rename(filename, '1.new.txt', (err, data) => {
//   console.log(err, data);
// });

//读取文件的信息
// fs.stat(filename, (err, data) => {
//   console.log(err, data);
// });

//监听文件变化  ev是变化的操作，data是文件的名称
fs.watch(filename, (ev, data) => {
  console.log(ev, data);
});
