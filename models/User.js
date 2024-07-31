const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passport = require("../passport");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.methods.validPassword = function(password) {
  
  return this.password === password; 
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
