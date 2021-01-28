const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  addTime: {
    type: Date,
    default: Date.now(),
  },
  views: {
    type: String,
    default: 0,
  },
  title: String,
  description: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
});
