const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8',
  });
  res.end('那就是管理了');
});
module.exports = router;
