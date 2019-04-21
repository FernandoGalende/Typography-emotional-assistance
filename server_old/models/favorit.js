const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const favSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  font: { type: Schema.Types.ObjectId, ref: 'Font' },
  Emotions: Array,
});

const Fav = mongoose.model("Question", questionSchema);
module.exports = Fav;