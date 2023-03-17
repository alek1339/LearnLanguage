const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Word Schema
const WordSchema = new Schema({
    english: {
        type: String,
        required: true
    },
    german: {
        type: String,
        required: true
    },
    plural: {
        type: String,
        required: true
    },
    feminne: {
        type: String,
        required: false
    },
    masculine: {
        type: String,
        required: false
    },	
    neuter: {
        type: String,
        required: false
    },	
    img: {
        type: String,
        required: false
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

module.exports = word = mongoose.model('Words', WordSchema)