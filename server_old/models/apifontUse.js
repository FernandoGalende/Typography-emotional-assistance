const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const apiFontUseSchema = new Schema({
  id: String, 
  use: Object,
});

const apiFontUse = mongoose.model("apiFontUse", apiFontUseSchema);

module.exports = apiFontUse;