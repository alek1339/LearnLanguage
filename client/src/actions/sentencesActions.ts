import { ActionTypes } from '../enums/actionTypes';
import axios from 'axios';
import { ISentence } from '../types/Sentence';
import { Dispatch } from 'redux';

export const addSentence = (sentencesData: ISentence) => (dispatch: Dispatch) => {
  axios
    .post('/sentences/add', sentencesData)
    .then(res => alert('sentences was added successfully!'))
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const fetchSentences = () => (dispatch: Dispatch) => {
  axios.get('/sentences')
    .then(res => dispatch({
      type: ActionTypes.FETCH_SENTENCES,
      payload: res.data
    }))
    .catch(err => console.log(err))
}