const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const apiFontSchema = new Schema({
  id: String,
  name: String,
  data: Object,
  srcs: [String]
});

const apiFont = mongoose.model("apiFont", apiFontSchema);

module.exports = apiFont;