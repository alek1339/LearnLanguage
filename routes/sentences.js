const express = require('express')
const router = express.Router()

const Sentence = require('../models/Sentence');


// @route  GET sentence/test
// @desc Tests sentence route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'sentence Works' }))

router.get('/', (req, res) => {
    Sentence.find({}, (err, sentences) => {
        if (err) {
            res.send(err);
        } else {
            res.send(sentences)
        }
    })
})

router.post('/add', (req, res) => {
    Sentence.findOne({ english: req.body.english }).then(sentence => {
        console.log(req.body)
        if (sentence) {
            errors.email = 'This sentence already exists !'
            return res.status(400).json(errors)
        } else {
            const newSentence = new Sentence({
                english: req.body.english,
                german: req.body.german,
                german2: req.body.german2,
                german3: req.body.german3,
                bulgarian: req.body.bulgarian,
                img: req.body.img,
                audio: req.body.audio,
                germanWithHiddenPart: req.body.germanWithHiddenPart,
                commonWords: req.body.commonWords,
            })

            newSentence
                .save()
                .then(sentence => res.json(sentence))
                .catch(err => res.json(err))
        }
    })
})

router.put('/update', (req, res) => {

    Sentence.findOneAndUpdate({ english: req.body.english }, {
        german: req.body.german,
        img: req.body.img,
    },
        { new: false })
        .then(res.status(200).json({ message: "Successful Update" }))
        .catch(err => res.send(err));
});

router.delete("/delete-sentence", (req, res) => {

    Sentence.findOneAndDelete({ english: req.body.english })
        .then(res.status(200).json({ message: "Successfully deleted" }))
        .catch(err => res.send(err));
})

module.exports = router