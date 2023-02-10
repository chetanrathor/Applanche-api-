const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  blogImage:String,
  blogName: String,
  blogTitle: String,
  blogCategory: String,
  blogDescription: String
  
});
module.exports = mongoose.model('blog',blogSchema);
