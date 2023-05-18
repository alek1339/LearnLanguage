const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creat Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lessons: {
    type: Array,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
