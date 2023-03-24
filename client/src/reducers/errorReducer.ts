import { ActionTypes } from '../enums/actionTypes'
import { IError } from '../types/Error'
import { ErrorActions } from '../types/ErrorActions'

const initialState: IError = {
  email: '',
  password: '',
  password2: '',
  passwordLength: '',
  passwordCapitalLetter: '',
  passwordNumber: '',
  passwordSmallLetter: '',
  name: '',
}

export default function (state = initialState, action: ErrorActions) {
  switch (action.type) {
    case ActionTypes.GET_ERRORS:
      return action.payload
    default:
      return state
  }
}