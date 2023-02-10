const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  teamName: String,
  teamDesignation: String,
});
module.exports = mongoose.model('team',teamSchema);
