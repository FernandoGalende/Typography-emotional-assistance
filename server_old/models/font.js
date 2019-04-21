const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const fontSchema = new Schema({
  name: String,
  publisher: String,
  year: String,
  designer: String,
  info: String,
  emotions: {  
    anger: Number,
    fear: Number,
    joy: Number,
    analytical: Number,
    confident: Number,
    tentative: Number
  } 
});


const Font = mongoose.model("Font", fontSchema);
module.exports = Font;
