const fs = require('fs');

fs.open('./1.txt', 'r+', (err, fd) => {
  if (err) {
  } else {
    const buf = new Buffer('123');
    //第一种写法
    // fs.write(fd, buf, 0, 3, 0, (a, b, c) => {
    //   console.log(a, b, c);
    // });
    //第二种写法
    // fs.write(fd, 'hahaha', 2, 'utf-8', () => {});
    const hah = fs.writeSync(fd, buf, 0, 3, 0); //同步写法
    console.log(hah);
    fs.close(fd, () => {}); //关闭文件
  }
});
