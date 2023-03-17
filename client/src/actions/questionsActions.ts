import { ActionTypes } from '../enums/actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import { IAddQuestionData } from '../types/Question';

export const addQuestion = (questionData: IAddQuestionData) => (dispatch: Dispatch) => {
  axios
    .post('/questions/add', questionData)
    .then(res => alert('question was added successfully!'))
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const fetchQuestions = () => (dispatch: Dispatch) => {
  axios.get('/questions')
    .then(res => dispatch({
      type: ActionTypes.FETCH_QUESTIONS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}