const express = require('express')
const router = express.Router()

const LearnedSentances = require('../models/LearnedSentances');


// @route  GET LearnedSentances/test
// @desc Tests LearnedSentances route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'LearnedSentances Works' }))

router.get('/', (req, res) => {
    LearnedSentances.find()
        .then(learnedSentances => {
            res.send(learnedSentances)
        })
        .catch(err => res.json(err));
})

router.post('/add-learned-sentance', (req, res) => {
    LearnedSentances.findOne({ _id: req.body.id }).then(sentance => {

        if (sentance) {
            errors.id = 'This sentance already exists !'
            return res.status(400).json(errors)
        } else {
            const newSentence = new LearnedSentances({
                sentanceId: req.body.sentanceId,
                userId: req.body.userId,
            })

            newSentence
                .save()
                .then(sentance => res.json(sentance))
                .catch(err => res.json(err))
        }
    })
})

router.put('/update-learned-sentance', (req, res) => {

    LearnedSentances.findOneAndUpdate({ english: req.body.english }, {
        sentanceId: req.body.sentanceId,
        userId: req.body.userId,
    },
        { new: false })
        .then(res.status(200).json({ message: "Successful Update" }))
        .catch(err => res.send(err));
});

router.delete("/delete-learned-sentance", (req, res) => {
    console.log('Del', req.body)
    LearnedSentances.findOneAndDelete({ english: req.body.english })
        .then(res.status(200).json({ message: "Successful" }))
        .catch(err => res.send(err));
})

module.exports = router