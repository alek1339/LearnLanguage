import { PracticeActionTypes } from '../../enums/practiceActionTypes';
import { Dispatch } from 'redux';
import { ISentence } from '../../types/Sentence';

export const setCurrentSentence = (sentence: ISentence) => (dispatch: Dispatch) => {
  dispatch({
    type: PracticeActionTypes.SET_CURRENT_SENTENCE,
    payload: sentence
  })
}

export const setCurrentTranslation = (sentence: string) => (dispatch: Dispatch) => {
  dispatch({
    type: PracticeActionTypes.SET_CURRENT_TRANSLATION,
    payload: sentence
  })
}
