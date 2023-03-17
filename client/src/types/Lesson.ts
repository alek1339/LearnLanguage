import { ISentence } from "./Sentence"

export type ILesson = {
  lessonName: string,
  videoLesson?: string,
  textLesson?: string,
  sentences: Array<ISentence>,
  words?: Array<any>,
  level: string,
  img?: string,
  correctStrike?: number,
  startLearn?: Date,
  lastPracticed?: Date
  _id?: string
}