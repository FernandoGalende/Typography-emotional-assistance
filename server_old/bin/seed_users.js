require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');
const dbURL = process.env.DBURL;
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

let salt = bcrypt.genSaltSync(bcryptSalt);
let hashPass = bcrypt.hashSync('1234', salt);


const users = [{
  username: 'fer',
  password: hashPass,
  isPro: true,
  kindOfPerson: 'joy',
  lastEmotion: 'joy',
  }, {
    timestamps: {
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  }]

mongoose
  .connect(dbURL, { useNewUrlParser: true })
  .then(() => {
    User.create(users)
      .then(() => {
        mongoose.disconnect();
      })
      .catch(err => console.log(err))
  });