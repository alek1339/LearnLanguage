const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create profile Schema
const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  startLearn: {
    type: Date,
    // default: Date.now
  },
  lastPracticed: {
    type: Date,
    // default: Date.now
  },
  learnedWords: {
    type: Array,
    required: false,
  },
  learnedLessons: {
    type: Array,
    required: false,
  },
  learnedSentances: {
    type: Array,
    required: false,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = profile = mongoose.model("profiles", profileSchema);
