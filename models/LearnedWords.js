const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create LearnedWordsSchema
const LearnedWordsSchema = new Schema({
    wordId: {
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

module.exports = LearnedWords= mongoose.model('LearnedWords', LearnedWordsSchema)