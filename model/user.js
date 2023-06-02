const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
  number: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
