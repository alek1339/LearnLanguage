import { ActionTypes } from '../enums/actionTypes';
import { IQuestion } from '../types/Question';
import { FetchQuestionAction } from '../types/QustionActions';

const initialState: Array<IQuestion> = [{ question: '', answer: '' }]

export default function (state = initialState, action: FetchQuestionAction) {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return action.payload
    default:
      return state
  }
}