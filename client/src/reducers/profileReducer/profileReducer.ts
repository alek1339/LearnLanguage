import { ActionTypes } from '../../enums/actionTypes';
import { IProfile } from '../../types/Profile';
import { FetchProfileAction } from '../../types/PracticeActions';

const initialState: IProfile = { firstName: '', lastName: '', user_id: '' };

export default function (state = initialState, action: FetchProfileAction) {
  switch (action.type) {
    case ActionTypes.FETCH_PROFILE:
      return action.payload
    default:
      return state
  }
}