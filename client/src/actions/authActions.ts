
import { ActionTypes } from '../enums/actionTypes'
import { Dispatch } from 'redux';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import { IRegisterUser, ILoginUser } from '../types/User';
import { validateUserData } from '../utils/validateUserData';
import { storeToken } from '../utils/storeToken';

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
  const { errors, isValid } = validateUserData(userData);

  if (!isValid) {
    return dispatch({
      type: ActionTypes.GET_ERRORS,
      payload: errors,
    });
  }

  axios.post('/users/login', userData)
    .then(res => {
      const { token } = res.data
      storeToken(token);
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

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