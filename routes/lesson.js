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

router.get("/current", (req, res) => {
  const id = req.query.id;
  Lesson.findOne({ _id: id })
    .then((lesson) => {
      if (lesson) {
        // Send the found lesson as a response
        res.send(lesson);
      } else {
        // Send a 404 error response when the lesson is not found
        res.status(404).send("Lesson not found");
      }
    })
    .catch((err) => {
      // Handle any other errors and send an appropriate response
      res.status(500).send("Error fetching lesson: " + err);
    });
});

router.get("/parts", (req, res) => {
  const lessonName = req.query.lessonName;

  Lesson.find({ lessonName: lessonName })
    .then((lessons) => {
      if (lessons) {
        // Send the found lesson as a response
        res.send(lessons);
      } else {
        // Send a 404 error response when the lesson is not found
        res.status(404).send("Lesson not found");
      }
    })
    .catch((err) => {
      // Handle any other errors and send an appropriate response
      res.status(500).send("Error fetching lesson: " + err);
    });
});

router.post("/add", (req, res) => {
  Lesson.findOne({ lessonName: req.body.lessonName }).then((lesson) => {
    if (lesson && lesson.part === req.body.part) {
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
