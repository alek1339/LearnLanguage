import { PracticeActionTypes } from '../../enums/practiceActionTypes';
import { SetCurrentTranslationAction } from '../../types/PracticeActions';
import { ICurrentTranslation } from '../../types/CurrentTranslation';

const initialState: ICurrentTranslation = { translation: '' };

export default function (state = initialState, action: SetCurrentTranslationAction) {
  switch (action.type) {
    case PracticeActionTypes.SET_CURRENT_TRANSLATION:
      return { ...state, translation: action.payload }
    default:
      return state
  }
}