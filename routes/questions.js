const express = require('express')
const router = express.Router()

const Question = require('../models/Question');


// @route  GET question/test
// @desc Tests question route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'question Works' }))

router.get('/', (req, res) => {
    Question.find({},  (err, sentences) => {
        if(err) {
            res.send(err);
        } else {
            res.send(sentences)
        }
    })
})

router.post('/add', (req, res) => {
    Question.findOne({question: req.body.question}).then(question => {
        console.log(req.body)
        if(question) {
            errors.email = 'This question already exists !'
            return res.status(400).json(errors)
        } else {
            const newSentence = new Question({
                question: req.body.question,
                answer: req.body.answer,
            })
            
            newSentence
            .save()
            .then(sentence => res.json(sentence))
            .catch(err => res.json(err))
        }
    })
})

router.put('/update', (req, res) => {

    Question.findOneAndUpdate({question: req.body.question},{
            question: req.body.question,
            answer: req.body.answer,
        },
         {new: false})
    .then(res.status(200).json({ message: "Successful Question Update" }))
    .catch(err => res.send(err));
});

router.delete("/delete-sentence", (req, res) => {

    Sentence.findOneAndDelete({question: req.body.question})
        .then(res.status(200).json({ message: "Successfully deleted" }))
        .catch(err => res.send(err));
})

module.exports = router