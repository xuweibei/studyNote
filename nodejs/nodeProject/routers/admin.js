const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Category = require('../models/category');

router.use((req, res, next) => {
  if (!req.userInfo.isAdmin) {
    res.send('你没有权限进入');
    return;
  }
  next();
});

router.get('/', (req, res) => {
  res.render('admin/index', {
    userInfo: req.userInfo,
  });
});

router.get('/user', (req, res) => {
  let page = req.query.page || 1;
  let limit = 2;
  let pages = 0;
  User.count().then((count) => {
    pages = Math.ceil(count / limit);
    page = Math.min(page, pages);
    page = Math.max(page, 1);
    let skip = (page - 1) * limit;
    User.find()
      .limit(limit)
      .skip(skip)
      .then((data) => {
        res.render('admin/user_index', {
          userInfo: req.userInfo,
          users: data.map((itme) => itme._doc),
          page: page,
          limit: limit,
          pages: pages,
          count: count,
        });
      });
  });
});

router.get('/category', (req, res) => {
  let page = req.query.page || 1;
  let limit = 2;
  let pages = 0;
  Category.count().then((count) => {
    pages = Math.ceil(count / limit);
    page = Math.min(page, pages);
    page = Math.max(page, 1);
    let skip = (page - 1) * limit;
    Category.find()
      .limit(limit)
      .skip(skip)
      .then((data) => {
        res.render('admin/category_index', {
          userInfo: req.userInfo,
          categories: data.map((itme) => itme._doc),
          page: page,
          limit: limit,
          pages: pages,
          count: count,
        });
      });
  });
});

router.get('/category/add', (req, res) => {
  res.render('admin/category_add');
});

router.post('/category/add', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.render('admin/error', {
      userInfo: req.userInfo,
      message: '名称不能为空',
    });
  }
  Category.findOne({ name: name })
    .then((data) => {
      if (data) {
        res.render('admin/error', {
          userInfo: req.userInfo,
          message: '名称已存在',
        });
        return Promise.reject();
      } else {
        return new Category({ name: name }).save();
      }
    })
    .then((data) => {
      res.render('admin/success', {
        userInfo: req.userInfo,
        message: '分类保存成功',
        url: '/admin/category',
      });
    });
});

router.get('/category/edit', (req, res) => {
  const id = req.query.id || '';
  Category.findOne({
    _id: id,
  }).then((data) => {
    if (!data) {
      res.render('admin/error', {
        userInfo: req.userInfo,
        message: '分类信息不存在',
      });
      return Promise.reject();
    } else {
      res.render('admin/category_edit', {
        userInfo: req.userInfo,
        Category: data._doc,
      });
    }
  });
});

router.post('/category/edit', (req, res) => {
  const id = req.query.id || '';
  const name = req.body.name || '';

  Category.findOne({
    _id: id,
  })
    .then((data) => {
      if (!data) {
        res.render('admin/error', {
          userInfo: req.userInfo,
          message: '分类信息不存在',
        });
        return Promise.reject();
      } else {
        if (name === data._doc.name) {
          res.render('admin/success', {
            userInfo: req.userInfo,
            message: '修改成功',
            url: '/admin/category',
          });
          return Promise.reject();
        } else {
          return Category.findOne({
            _id: id,
            name: name,
          });
        }
      }
    })
    .then((data) => {
      if (data) {
        res.render('admin/error', {
          userInfo: req.userInfo,
          message: '数据库中已存在同名分类',
        });
      } else {
        return Category.update(
          {
            _id: id,
          },
          {
            name: name,
          }
        );
      }
    })
    .then((data) => {
      res.render('admin/success', {
        userInfo: req.userInfo,
        message: '修改成功',
        url: '/admin/category',
      });
    });
});

router.get('/category/delete', (req, res) => {
  const id = req.query.id || '';
  Category.remove({ _id: id }).then((data) => {
    res.render('admin/success', {
      userInfo: req.userInfo,
      message: '删除成功',
      url: '/admin/category',
    });
  });
});
module.exports = router;
