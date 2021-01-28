const mongoose = require('mongoose');
const ContentSchema = require('../schemas/content');
module.exports = mongoose.model('Content', ContentSchema);
