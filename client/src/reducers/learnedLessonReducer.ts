import { ActionTypes } from '../enums/actionTypes';
import { ILearnedLesson } from '../types/LearnedLesson';
import { AddLearnedLesson } from '../types/PracticeActions';

const initialState: ILearnedLesson = {
  lessonId: '',
  userId: '',
  correctStrike: 0,
  rightAnswers: 0,
  wrongAnswers: 0,
  startLearn: new Date(),
  lastPracticed: new Date()
};

export default function (state = initialState, action: AddLearnedLesson) {

  switch (action.type) {
    case ActionTypes.ADD_LEARNED_LESSON:
      return action.payload
    default:
      return state
  }
}