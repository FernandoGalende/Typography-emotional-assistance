const LocalStrategy = require("passport-local").Strategy;
const User          = require("../models/user");
const bcrypt        = require("bcrypt");

module.exports = (passport) => {
  passport.use(new LocalStrategy((username, password, next) => {
    console.log(username,password)
    User.findOne({ username }, (err, user) => {
      if (err) { 
        console.log(err)
        return next(err); 
      }
      else {

        if (!user) { return next(null, false, { message: "Incorrect username" }); }
        if (!bcrypt.compareSync(password, user.password)) { next(null, false, { message: "Incorrect password" });
      }
    }
      return next(null, user);
    });
  }));

  passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
  });
  
  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err) {
        cb(err);
        return;
      }
  
      cb(null, userDocument);
    });
  });
}
