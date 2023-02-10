const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone:Number,
  pass

});
// module.exports = mongoose.model('team',teamSchema);
