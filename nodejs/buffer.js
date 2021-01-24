// new Buffer(size) 创建一个buffer对象，并为这个对象分配一个size的大小

//当分配完空间大小以后，这个长度是固定的，不能更改
// const bf = new Buffer(5);
// bf[1] = 2;
// console.log(bf);

// const bf1 = new Buffer([1, 2, 3]);
// console.log(bf1);

// const bf2 = new Buffer('xuweibei', 'utf-8');
// console.log(bf2); //这里面的是16进制的

// for (var i = 0; i < bf2.length; i++) {
//   console.log(bf2[i]); //这个是二进制的
// console.log(bf2[i].toString(16));
//   console.log(String.fromCharCode(bf2[i])); //转码
// }

// const str1 = 'xwb';
// const bf1 = new Buffer(str1);
// console.log(str1.length);
// console.log(bf1.length);

// const str2 = '许炜钡';
// const bf2 = new Buffer(str2);
// console.log(str2.length); //3
// console.log(bf2.length); //9
//结论，一个中文字节是等于3个buffer的长度

//buf.write(写入的字符串,开始的位置,写入的长度,编码（默认utf-8）)

// const str = 'xwb';
// console.log(new Buffer(str));
// const buf = new Buffer(3);
// buf.write(str, 1, 2);
// console.log(buf);

// const buf = new Buffer('xwb12');
// console.log(buf.toString()); //xwb 直接转回来了
// console.log(buf.toString('utf-8', 1, 3)); //w 类似截取的功能 1为开始位置，3为结束位置（不包含）
//中文截取的时候需要注意一下，一个中文表示三个buffer字符，所以如果截取到中间的位置的时候，
//一个中文被拆开了，就会解析出现乱码

// const buf = new Buffer('xwb');
// console.log(buf);
// for (let i = 0; i < buf.length; i++) {
//   console.log(buf[i]);
// }
// console.log(buf.toJSON()); //返回一个JSON表示的buffer实例
//{ type: 'Buffer', data: [ 120, 119, 98 ] }  data里面是二进制的内容

// const buf = new Buffer('xwb');
// const buf2 = buf.slice(1, 2);
// console.log(buf, buf2);
//注意，上面的buf和buf2是引用相同的引用地址，所以对其中任何一个做修改时另一个也会变

// const buf = new Buffer('xwb123');
// const buf2 = new Buffer(10);
// // buf.copy(buf2);
// // buf2[1] = 1;
// // console.log(buf, buf2);
// //用copy的方法就不会把引用地址也弄过来，就复制过来了一个独立的buffer
// //copy(buf,拷贝到buf2开始的位置,buf开始拷贝的位置,buf拷贝结束的位置)
// buf.copy(buf2, 1, 2, 5);
// console.log(buf, buf2);

//Buffer.isEncoding(encoding) 如果给定的编码encoding是有效的就返回true否则返回false
// console.log(Buffer.isEncoding('utf-8'));

// Buffer.isBuffer(obj) 测试这个obj是否是一个buffer
// const buf = new Buffer(10);
// console.log(Buffer.isBuffer(buf));

// Buffer.byteLength(string,[encoding]) 将会返回这个字符串真是的byte长度，encoding默认是utf-8
// const str = '许炜钡';
// console.log(Buffer.byteLength(str)); 9

// Buffer.concat(list,len) 返回一个保存着将传入buffer数组中所有的buffer对象拼接在一起的buffer对象
//len为返回后的长度
// const list = [new Buffer('123'), new Buffer('345')];
// console.log(Buffer.concat(list, 1));
