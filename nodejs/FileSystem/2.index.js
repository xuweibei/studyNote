const fs = require('fs');

// fs.read(fd, buffer, offset, len, position, cb);
// 	fd：通过open方法成功打开一个文件返回的编号
// 	buffer: buffer对象
// 	offset: 新的内容添加到buffer中的起始位置
// 	len：添加到buffer中内容的长度
// 	position：读取的文件中的起始位置
// 	cb：回调(err,len,newBufff)=>{}
// 			err ：返回错误
// 			len : 改变部分的buffer的长度
// 			newBuffer:新的buffer对象

fs.open('./1.txt', 'r', (err, fd) => {
  const bf = new Buffer(10);
  fs.read(fd, bf, 0, 4, 0, (err, len, newB) => {
    console.log(err);
    console.log(len);
    console.log(newB);
    console.log(bf.toString());
  });
});
