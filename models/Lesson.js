const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Lesson Schema
const LessonSchema = new Schema({
  lessonName: {
    type: String,
    required: true,
  },
  videoLesson: {
    type: String,
    required: false,
  },
  textLesson: {
    type: String,
    required: false,
  },
  sentences: {
    type: Array,
    required: false,
  },
  words: {
    type: Array,
    required: false,
  },
  level: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  correctStrike: {
    type: Number,
    default: 0,
  },
  startLearn: {
    type: Date,
    // default: Date.now
  },
  lastPracticed: {
    type: Date,
    // default: Date.now
  },
  part: {
    type: String,
    required: false,
  },
});

module.exports = lesson = mongoose.model("Lessons", LessonSchema);
