const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  intro: [{ type: String }],
  description: [{ type: String }],
  afterImg1: [{ type: String }],
  paragraph: [{ type: String }],
  ending: [{ type: String }],
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
