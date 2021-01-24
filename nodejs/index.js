/**
 *
 * node的全局变量叫做global类似于window
 * 1、__filename （当前文件被解析过后的路径）
 *  __dirname (当前文件所在目录的地址)
 *
 * 以上两个都不是全局global下的，他们都是独立模块
 * 2、node查找文件名的规则
 * request('./1')
 * 		文件名称--》.js--》.json--》.node
 * 如果以上都找不到就报错
 *
 * 3、require的返回值是引入文件的module.export
 */
// console.log(__filename);
// const a = require('./index2.js');
// console.log(a);

// console.log(__dirname);

// process 全局对象
//process.argv 返回一个数组 第一个是node第二个是文件的具体地址，
//第三个是输入的参数
//比如 命令行输入 node index.js a=1 返回值为
//[
//   '/usr/local/bin/node',
//   '/Users/xuweibei/Desktop/project/studyNote/nodejs/index.js',
//   'a=1'
// ]

//process.execPath 开启当前进程的绝对路径，就是node的路径
// console.log(process.env);

//process.pid 进程的pid
// console.log(process.title);进程的名称
// process.exit//退出进程

//stdin/stdout 标准输入输出流
// process.stdout.write('哈哈');

process.stdin.resume(); //开启输入流
// process.stdin.on('data', (value) => {
//   console.log('哈哈哈' + value);
// }); //监听输入

var a = 0;
var b = 0;
process.stdout.write('请输入a的值：');
process.stdin.on('data', (e) => {
  if (!a) {
    a = Number(e);
    process.stdout.write('请输入b的值：');
  } else {
    b = Number(e);
    process.stdout.write('结果为：' + (a + b));
  }
});
