const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create LearnedLessonsSchema
const LearnedLessonsSchema = new Schema({
    lessonId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    correctStrike: {
        type: Number,
        default: 1
    },
    rightAnswers: {
        type: Number,
        default: 0
    },
    wrongAnswers: {
        type: Number,
        default: 0
    },
    startLearn: {
        type: Date,
        default: Date.now
    },
    lastPracticed: {
        type: Date,
        // default: Date.now
    }
})

module.exports = LearnedLessons = mongoose.model('LearnedLessons', LearnedLessonsSchema)