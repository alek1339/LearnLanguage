const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Sentence Schema
const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    correctStrike: {
        type: Number,
        default: 0
    },
    startLearn: {
        type: Date,
        // default: Date.now
    },
    lastPracticed: {
        type: Date,
        // default: Date.now
    }
})

module.exports = question = mongoose.model('Questions', QuestionSchema)