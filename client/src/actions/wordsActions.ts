import { ActionTypes } from '../enums/actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import { IWord } from '../types/Word';

export const addWord = (wordData: IWord) => (dispatch: Dispatch) => {
  axios
    .post('/words/add', wordData)
    .then(res => {
      dispatch({
        type: ActionTypes.ADD_WORD,
        payload: res.data
      })
      alert('Word added successfully');
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const fetchWords = () => (dispatch: Dispatch) => {
  axios.get('/words')
    .then(res => dispatch({
      type: ActionTypes.FETCH_WORDS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}