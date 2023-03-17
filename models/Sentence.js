const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Sentence Schema
const SentenceSchema = new Schema({
    english: {
        type: String,
        required: true
    },
    german: {
        type: String,
        required: true
    },
    bulgarian: {
        type: String,
        required: false
    },
    german2: {
        type: String,
        required: false
    },
    german3: {
        type: String,
        required: false
    },
    // This is for level three of learning when you can see almost the whole sentence,
    // but you have hidden word or couple of words
    germanWithHiddenPart: {
        type: String,
        required: false
    },
    // This is for words that are similar and we are adding them for level two when you
    // have to add the words in the proper order
    commonWords: {
        type: Array,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    audio: {
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

module.exports = sentence = mongoose.model('Sentences', SentenceSchema)