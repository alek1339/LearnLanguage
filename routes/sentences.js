const express = require('express')
const router = express.Router()

const Sentence = require('../models/Sentence');


// @route  GET sentence/test
// @desc Tests sentence route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'sentence Works' }))

router.get('/', (req, res) => {
    Sentence.find()
        .then(sentences => {
            res.send(sentences);
        })
        .catch(err => res.json(err));
})

router.get("/current/:id", (req, res) => {
    const id = req.params.id.replace("}", "");

    Sentence.findOne({ _id: id })
        .then((sentence) => {
            res.send(sentence);
        })
        .catch((err) => {
            res.json(err)
        });
});

router.post('/add', (req, res) => {
    Sentence.findOne({ english: req.body.english })
        .then(sentence => {
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

router.put('/update/:id', (req, res) => {
    // Use req.params.id to get the sentence ID from the URL
    const sentenceId = req.params.id;

    // Use req.body to get the updated sentence data from the request body
    const updatedSentenceData = {
        english: req.body.english,
        german: req.body.german,
        german2: req.body.german2,
        german3: req.body.german3,
        bulgarian: req.body.bulgarian,
        img: req.body.img,
        audio: req.body.audio,
        germanWithHiddenPart: req.body.germanWithHiddenPart,
        commonWords: req.body.commonWords,
    };

    // Use findOneAndUpdate to update the sentence by ID
    Sentence.findOneAndUpdate({ _id: sentenceId }, updatedSentenceData, { new: false })
        .then(() => {
            res.status(200).json({ message: "Successful Update" });
        })
        .catch(err => res.send(err));
});


router.delete("/delete-sentence", (req, res) => {

    Sentence.findOneAndDelete({ english: req.body.english })
        .then(res.status(200).json({ message: "Successfully deleted" }))
        .catch(err => res.send(err));
})

module.exports = router