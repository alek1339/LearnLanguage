import { PracticeActionTypes } from '../../enums/practiceActionTypes';
import { SetCurrentTranslationAction } from '../../types/PracticeActions';
import { ISentence } from '../../types/Sentence';

const initialState: ISentence = {
  english: '', german: '',
  commonWords: []
};

export default function (state = initialState, action: SetCurrentTranslationAction) {
  switch (action.type) {
    case PracticeActionTypes.SET_CURRENT_SENTENCE:
      return action.payload;
    default:
      return state
  }
}