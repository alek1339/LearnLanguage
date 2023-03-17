const express = require('express')
const router = express.Router()

const LearnedQuestions = require('../models/LearnedQuestions');


// @route  GET LearnedQuestions/test
// @desc Tests LearnedQuestions route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'LearnedQuestions Works' }))

router.get('/', (req, res) => {
    LearnedQuestions.find({},  (err, learnedQuestions) => {
        if(err) {
            res.send(err);
        } else {
            res.send(learnedQuestions)
        }
    })
})

router.post('/add-learned-question', (req, res) => {
    LearnedQuestions.findOne({_id: req.body.id}).then(question => {

        if(question) {
            errors.id = 'This question already exists !'
            return res.status(400).json(errors)
        } else {
            const newQuestion = new LearnedQuestions({
                questionId: req.body.questionId,
                userId: req.body.userId,
            })
            
            newQuestion
            .save()
            .then(question => res.json(question))
            .catch(err => res.json(err))
        }
    })
})

router.put('/update-learned-question', (req, res) => {

    LearnedQuestions.findOneAndUpdate({questionId: req.body.questionId},{
            userId: req.body.userId,
        },
         {new: false})
    .then(res.status(200).json({ message: "Successful Update" }))
    .catch(err => res.send(err));
});

router.delete("/delete-learned-question", (req, res) => {
    console.log('Del', req.body)
    LearnedQuestions.findOneAndDelete({english: req.body.english})
        .then(res.status(200).json({ message: "Successful" }))
        .catch(err => res.send(err));
})

module.exports = router