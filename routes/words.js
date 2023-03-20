const express = require('express')
const router = express.Router()

const Word = require('../models/Word');


// @route  GET words/test
// @desc Tests words route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'words Works' }))

router.get('/', (req, res) => {
    Word.find()
        .then(words => {
            res.send(words)
        })
        .catch(err => res.json(err))
})

router.post('/add', (req, res) => {
    Word.findOne({ english: req.body.english }).then(word => {
        console.log(req.body)
        if (word) {
            errors.email = 'This word already exists !'
            return res.status(400).json(errors)
        } else {
            const newWord = new Word({
                english: req.body.english,
                german: req.body.german,
                plural: req.body.plural,
                feminne: req.body.feminne,
                masculine: req.body.masculine,
                neuter: req.body.neuter,
                img: req.body.img
            })

            newWord
                .save()
                .then(word => res.json(word))
                .catch(err => res.json(err))
        }
    })
})

router.put('/update', (req, res) => {

    Word.findOneAndUpdate({ english: req.body.english }, {
        german: req.body.german,
        img: req.body.img,
        plural: req.body.plural.plura,
        feminne: req.body.feminne,
        masculine: req.body.masculine,
        neuter: req.body.neuter,
    },
        { new: false })
        .then(res.status(200).json({ message: "Successful Update" }))
        .catch(err => res.send(err));
});

router.delete("/delete-word", (req, res) => {
    console.log('Del', req.body)
    Word.findOneAndDelete({ english: req.body.english })
        .then(res.status(200).json({ message: "Successful" }))
        .catch(err => res.send(err));
})

module.exports = router