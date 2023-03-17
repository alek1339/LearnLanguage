import { ActionTypes } from '../../enums/actionTypes'
import { FetchWordAction } from '../../types/PracticeActions';
import { IWord } from '../../types/Word';

const initialState: Array<IWord> = [{
  english: '',
  german: '',
  plural: '',
  feminne: '',
  masculine: '',
  neuter: '',
  img: '',
}];

export default function (state = initialState, action: FetchWordAction) {
  switch (action.type) {
    case ActionTypes.FETCH_WORDS:
      return action.payload;
    default:
      return state;
  }
}