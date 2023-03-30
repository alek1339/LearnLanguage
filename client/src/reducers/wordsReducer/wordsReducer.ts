import { ActionTypes } from '../../enums/actionTypes'
import { AddWordAction, FetchWordAction } from '../../types/PracticeActions';
import { IWord } from '../../types/Word';

const initialState: Array<IWord> = [{
  english: '',
  german: '',
  plural: '',
  feminine: '',
  masculine: '',
  neuter: '',
  img: '',
}];

export default function (state = initialState, action: FetchWordAction | AddWordAction) {
  switch (action.type) {
    case ActionTypes.FETCH_WORDS:
      return action.payload;

    case ActionTypes.ADD_WORD:
      return [...state, action.payload];

    default:
      return state;
  }
}