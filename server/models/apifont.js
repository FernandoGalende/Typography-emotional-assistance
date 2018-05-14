const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const apiFontSchema = new Schema({
  name: String,
  data: Object
});

const apiFont = mongoose.model("apiFont", apiFontSchema);
module.exports = apiFont;