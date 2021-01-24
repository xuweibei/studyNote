const fs = require('fs');

const data = {
  name: 'ceshi',
  datas: [
    {
      name: 'css',
      type: 'dir',
    },
    {
      name: 'js',
      type: 'dir',
    },
    {
      name: 'index.html',
      type: 'file',
      content:
        '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>hello</h1></body>\n</html>',
    },
  ],
};

fs.mkdirSync(data.name);
data.datas.forEach((item) => {
  item.path = data.name + '/' + item.name;
  item.content = item.content || '';
  switch (item.type) {
    case 'dir':
      fs.mkdirSync(item.path);
      break;
    case 'file':
      fs.writeFileSync(item.path, item.content);
      break;
    default:
      break;
  }
});
