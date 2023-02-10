const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  projectImage:String,
  projectName: String,
  projectTitle: String,
  projectCategory: String,
  projectDescription: String,
});
module.exports = mongoose.model('project',projectSchema);
