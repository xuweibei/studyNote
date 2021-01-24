const fs = require('fs');

//新建文件夹
// fs.mkdir('./1', (err, data) => {
//   console.log(err, data);
// });
//删除文件夹
// fs.rmdir('./1', (err, data) => {
//   console.log(err, data);
// });
//读取文件夹
fs.readdir('./', (err, data) => {
  data.forEach((item) => {
    //fs.statSync(item).mode  16877 表示文件夹 33188表示文件
    console.log(fs.statSync(item).mode);
  });
});
