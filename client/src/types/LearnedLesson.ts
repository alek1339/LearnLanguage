export interface ILearnedLesson {
  lessonId: string,
  userId: string,
  correctStrike: number,
  rightAnswers: number,
  wrongAnswers: number,
  startLearn: Date,
  lastPracticed: Date
}
export interface IAddLearnedLessonData {
  lessonId: string,
  userId: string,
}
