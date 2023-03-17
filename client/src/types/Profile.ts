import { ILearnedLesson } from './LearnedLesson';

export type IProfile = {
  firstName: string,
  lastName: string,
  user_id: string,
  _id?: string,
  img?: string,
  startLearn?: Date,
  lastPracticed?: Date,
  learnedWords?: Array<string>,
  learnedLessons?: Array<ILearnedLesson>,
  learnedSentances?: Array<string>,
}

export interface IFetchProfileData {
  id: string
}
