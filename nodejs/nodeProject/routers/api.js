const express = require('express');
const { route } = require('./admin');
const router = express.Router();
const User = require('../models/user');

var responseData;

router.use((req, res, next) => {
  responseData = {
    code: 0,
    message: '',
  };
  next();
});

router.post('/user/register', (req, res) => {
  const { username, password, repassword } = req.body;
  if (!username) {
    responseData.code = 1;
    responseData.message = '用户名不能为空';
    res.json(responseData);
    return;
  }
  if (!password || !repassword) {
    responseData.code = 1;
    responseData.message = '密码不能为空';
    res.json(responseData);
    return;
  }
  if (password !== repassword) {
    responseData.code = 1;
    responseData.message = '两次密码不一致';
    res.json(responseData);
    return;
  }
  User.findOne({
    username: username,
  })
    .then((name) => {
      if (name) {
        responseData.code = 1;
        responseData.message = '用户名已被使用';
        res.json(responseData);
        return;
      }
      const use = new User({
        username: username,
        password: password,
      });
      return use.save();
    })
    .then((name) => {
      responseData.code = 0;
      responseData.message = '注册成功';
      res.json(responseData);
    });
});

router.post('/user/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    responseData.code = 1;
    responseData.message = '用户名和密码不能为空';
    res.json(responseData);
    return;
  }
  User.findOne({
    username: username,
  }).then((name) => {
    if (!name) {
      responseData.code = 1;
      responseData.message = '用户不存在，请前往注册';
      res.json(responseData);
      return;
    }
    User.findOne({
      username: username,
      password: password,
    }).then((newName) => {
      if (!newName) {
        responseData.code = 1;
        responseData.message = '用户名或密码错误';
        res.json(responseData);
        return;
      }
      req.cookies.set(
        'userInfo',
        JSON.stringify({
          _id: newName._doc._id,
          username: newName._doc.username,
          isAdmin: newName._doc.isAdmin,
        })
      );
      responseData.code = 0;
      responseData.message = '登录成功';
      res.json(responseData);
      return;
    });
  });
});

router.get('/user/logout', (req, res) => {
  req.cookies.set('userInfo', null);
  responseData.code = 0;
  responseData.message = '成功退出';
  res.json(responseData);
});

module.exports = router;
