
import { ActionTypes } from '../enums/actionTypes'
import { Dispatch } from 'redux';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import { IRegisterUser, ILoginUser } from '../types/User';

export const registerUser = (userData: IRegisterUser, history: any) => (dispatch: Dispatch) => {
  axios
    .post('/users/register', userData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Login User
export const loginUser = (userData: ILoginUser) => (dispatch: Dispatch) => {
  axios.post('/users/login', userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )

  // Just for TEST
}

export const setCurrentUser = (decoded: any) => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: decoded
  }
}

// Log user out
export const logoutUser = () => (dispatch: Dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken({ token: '' });
  // Set current user to {} wich will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}