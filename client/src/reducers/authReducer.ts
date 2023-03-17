import isEmpty from '../validation/is-empty'

import { ActionTypes } from '../enums/actionTypes'
import { SetCurrentUserAction } from '../types/AuthActions'
import { ICurrentUser } from '../types/User'

const initialState: ICurrentUser = {
  isAuthenticated: false,
  user:
  {
    exp: 0,
    iat: 0,
    id: '',
    name: '',
  }
}

export default function auth(state = initialState, action: SetCurrentUserAction) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state
  }
}