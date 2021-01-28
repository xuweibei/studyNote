const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Content = require('../models/Content');

router.get('/', (req, res) => {
  const dataList = {
    userInfo: req.userInfo,
    categories: [],
    contents: [],
    count: 0,
    page: req.query.page,
    limit: 10,
    pages: 0,
  };
  Category.find()
    .then((data) => {
      dataList.categories = data;
      return Content.count();
    })
    .then((count) => {
      dataList.count = count;
      dataList.page = Math.ceil(dataList.count / dataList.limit);
      dataList.page = Math.min(dataList.page, dataList.pages);
      dataList.page = Math.max(dataList.page, 1);
      var skip = (dataList.page - 1) * dataList.limit;
      return Content.find()
        .limit(dataList.limit)
        .skip(skip)
        .populate(['category', 'user']);
    })
    .then((all) => {
      dataList.contents = all;
      console.log(dataList, '是否跟我说');
      res.render('main/index', dataList);
    });
});
router.get('/user', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8',
  });
  res.end('main咯');
});

module.exports = router;
