import { ActionTypes } from '../enums/actionTypes';
import { FetchSentenceAction } from '../types/SentenceActions';
import { ISentence } from '../types/Sentence';

const initialSentence: ISentence = {
  english: '',
  german: '',
  german2: '',
  german3: '',
  bulgarian: '',
  commonWords: [''],
  img: '',
  correctStrike: 0,
  audio: '',
};

export default function (state = initialSentence, action: FetchSentenceAction) {
  switch (action.type) {
    case ActionTypes.FETCH_SENTENCE:
      return action.payload
    default:
      return state
  }
}