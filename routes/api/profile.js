const express = require("express");
const router = express.Router();

const Profile = require("../../models/Profile");
const updateLessonRepetitionStatus = require("../../utils/spacedRepetitionChecker");

// @route  GET api/profile/test
// @desc Tests profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

router.get("/", (req, res) => {

  Profile.findOne({ user_id: req.query.id })
    .then((profile) => {
      const updatedProfile = {
        ...profile,
        learnedLessons: updateLessonRepetitionStatus(profile.learnedLessons)
      }

      console.log('updatedProfile', updatedProfile);

      res.send(profile);
    })
    .catch((err) => res.json(err));
});

router.post("/add", (req, res) => {
  Profile.findOne({ id: req.body.id }).then((profile) => {
    if (profile) {
      errors.email = "This profile already exists !";
      return res.status(400).json(errors);
    } else {
      const newProfile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        img: req.body.img,
        user_id: req.body.user_id,
      });
      newProfile
        .save()
        .then((profile) => res.json(profile))
        .catch((err) => res.json(err));
    }
  });
});

router.put("/update", (req, res) => {
  console.log('Update profile', req.body);
  Profile.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { learnedLessons: req.body.lesson } },
    { useFindAndModify: false }
  )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

router.delete("/delete-profile", (req, res) => {
  Profile.findOneAndDelete({ english: req.body.english })
    .then(res.status(200).json({ message: "Successfully deleted" }))
    .catch((err) => res.send(err));
});

module.exports = router;
