const updateLessonRepetitionStatus = (lessons) => {
  const updatedLessons = lessons.map((lesson) => {
    if (shouldRepeatLesson(lesson)) {
      return {
        ...lesson,
        shouldRepeat: true,
        lastPracticed: new Date()
      }
    } else {
      return lesson;
    }
  });

  return updatedLessons;
};

module.exports = updateLessonRepetitionStatus;

const shouldRepeatLesson = (lesson) => {
  const { correctStrike, lastPracticed } = lesson;
  const now = new Date();
  const timeSinceLastPractice = now - lastPracticed;
  const daysSinceLastPractice = milisecondsToDays(timeSinceLastPractice);
  const daysToRepeat = daysToRepeatLesson[correctStrike];
  const shouldRepeat = daysSinceLastPractice > daysToRepeat;
  return shouldRepeat;
};

const daysToRepeatLesson = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
  6: 60,
  7: 120
}

const millisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const milisecondsToDays = (miliseconds) => {
  return miliseconds / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay);
}