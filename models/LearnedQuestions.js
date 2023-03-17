const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create LearnedQustionsSchema
const LearnedQuestionsSchema = new Schema({
    questionId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    correctStrike: {
        type: Number,
        default: 0
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

module.exports = LearnedQuestions= mongoose.model('LearnedQuestions', LearnedQuestionsSchema)