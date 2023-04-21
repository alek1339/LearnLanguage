import { ActionTypes } from '../enums/actionTypes'
import { ISentence } from '../types/Sentence'
import { FetchSentencesAction } from '../types/SentenceActions'

const initialState: Array<ISentence> = [
  {
    english: '',
    german: '',
    commonWords: [''],
  }]

export default function (state = initialState, action: FetchSentencesAction) {
  switch (action.type) {
    case ActionTypes.FETCH_SENTENCES:
      return action.payload
    default:
      return state
  }
}