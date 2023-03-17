const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/users");
const words = require("./routes/words");
const lesson = require("./routes/lesson");
const sentences = require("./routes/sentences");
const profile = require("./routes/api/profile");
const questions = require("./routes/questions");

const learnedWords = require("./routes/learnedWords");
const learnedLessons = require("./routes/learnedLessons");
const learnedSentances = require("./routes/learnedSentances");
const learnedQuestions = require("./routes/learnedQuestions");

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo

mongoose
  .connect(db)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log("ERROR: ", err));

// Use Routes
// Use Routes
app.use("/users", users);
app.use("/words", words);
app.use("/lessons", lesson);
app.use("/sentences", sentences);
app.use("/profile", profile);
app.use("/learned-words", learnedWords);
app.use("/learned-lessons", learnedLessons);
app.use("/learned-sentances", learnedSentances);
app.use("/learned-questions", learnedQuestions);
app.use("/questions", questions);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server running on port ${port}`));