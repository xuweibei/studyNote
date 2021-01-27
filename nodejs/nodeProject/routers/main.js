const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main/index', {
    userInfo: req.userInfo,
  });
});
router.get('/user', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8',
  });
  res.end('main咯');
});

module.exports = router;
