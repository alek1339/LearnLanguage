const express = require("express");
const router = express.Router();

const Lesson = require("../models/Lesson");

// @route  GET lesson/test
// @desc Tests lesson route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "lesson Works" }));

router.get("/", (req, res) => {
  Lesson.find()
    .then((lesson) => {
      res.send(lesson);
    })
    .catch((err) => res.json(err));
});

router.get("/current/:id", (req, res) => {
  Lesson.findOne({ _id: req.params.id }) // Update to use req.params.id
    .then((lesson) => {
      res.send(lesson);
    })
    .catch((err) => res.json(err));
});


router.post("/add", (req, res) => {
  Lesson.findOne({ lessonName: req.body.lessonName }).then((lesson) => {
    if (lesson) {
      errors.email = "This lesson already exists !";
      return res.status(400).json(errors);
    } else {
      const newLesson = new Lesson({
        lessonName: req.body.lessonName,
        videoLesson: req.body.videoLesson,
        textLesson: req.body.textLesson,
        sentences: req.body.sentences,
        words: req.body.words,
        level: req.body.level,
        img: req.body.img,
        part: req.body.part,
      });

      newLesson
        .save()
        .then((lesson) => res.json(lesson))
        .catch((err) => res.json(err));
    }
  });
});

router.put("/update/:id", (req, res) => {
  const lessonId = req.params.id; // Get the lesson id from the URL parameter

  Lesson.findOneAndUpdate(
    { _id: lessonId }, // Use _id instead of lessonName
    {
      videoLesson: req.body.videoLesson,
      img: req.body.img,
      textLesson: req.body.textLesson,
      sentences: req.body.sentences,
      level: req.body.level,
      words: req.body.words,
      part: req.body.part,
    },
    { new: true } // Return the updated document
  )
    .then(updatedLesson => {
      if (updatedLesson) {
        res.status(200).json({ message: "Successful Update", lesson: updatedLesson });
      } else {
        res.status(404).json({ message: "Lesson not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update lesson", error: err.message });
    });
});

router.delete("/delete-lesson", (req, res) => {
  Lesson.findOneAndDelete({ english: req.body.english })
    .then(res.status(200).json({ message: "Successful" }))
    .catch((err) => res.send(err));
});

module.exports = router;
