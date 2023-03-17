const express = require('express')
const router = express.Router()

const LearnedWords = require('../models/LearnedWords');


// @route  GET LearnedWords/test
// @desc Tests LearnedWords route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'LearnedWords Works' }))

router.get('/', (req, res) => {
    LearnedWords.find({},  (err, learnedWords) => {
        if(err) {
            res.send(err);
        } else {
            res.send(learnedWords)
        }
    })
})

router.post('/add-learned-word', (req, res) => {
    LearnedWords.findOne({_id: req.body.id}).then(word => {

        if(word) {
            errors.id = 'This word already exists !'
            return res.status(400).json(errors)
        } else {
            const newWord = new LearnedWords({
                wordId: req.body.wordId,
                userId: req.body.userId,
            })
            
            newWord
            .save()
            .then(word => res.json(word))
            .catch(err => res.json(err))
        }
    })
})

router.put('/update-learned-word', (req, res) => {

    LearnedWords.findOneAndUpdate({english: req.body.english},{
            wordId: req.body.wordId,
            userId: req.body.userId,
        },
         {new: false})
    .then(res.status(200).json({ message: "Successful Update" }))
    .catch(err => res.send(err));
});

router.delete("/delete-learned-word", (req, res) => {
    console.log('Del', req.body)
    LearnedWords.findOneAndDelete({english: req.body.english})
        .then(res.status(200).json({ message: "Successful" }))
        .catch(err => res.send(err));
})

module.exports = router