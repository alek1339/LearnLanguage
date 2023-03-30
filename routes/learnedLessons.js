const express = require('express')
const router = express.Router()

const LearnedLessons = require('../models/LearnedLessons');


// @route  GET LearnedLessons/test
// @desc Tests LearnedLessons route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'LearnedLessons Works' }))

router.get('/', (req, res) => {
    LearnedLessons.find()
        .then(lessons => {
            res.send(lessons)
        })
        .catch(err => res.json(err))
})

router.post('/add', (req, res) => {
    LearnedLessons.findOne({ _id: req.body.id }).then(lesson => {
        if (lesson) {
            errors.email = 'This lesson already exists !'
            return res.status(400).json(errors)
        } else {
            const newLesson = new LearnedLessons({
                lessonId: req.body.lessonId,
                userId: req.body.userId,

            })

            newLesson
                .save()
                .then(lesson => res.json(lesson))
                .catch(err => res.json(err))
        }
    })
})

router.put('/update-learned-lesson', (req, res) => {

    LearnedLessons.findOneAndUpdate({ english: req.body.english }, {
        lessonId: req.body.lessonId,
        userId: req.body.userId,
    },
        { new: false })
        .then(res.status(200).json({ message: "Successful Update" }))
        .catch(err => res.send(err));
});

router.delete("/delete-learned-lesson", (req, res) => {
    console.log('Del', req.body)
    LearnedLessons.findOneAndDelete({ english: req.body.english })
        .then(res.status(200).json({ message: "Successful" }))
        .catch(err => res.send(err));
})

module.exports = router