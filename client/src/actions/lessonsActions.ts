import { ActionTypes } from '../enums/actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import { ILesson } from '../types/Lesson';

export const addLesson = (lessonData: ILesson) => (dispatch: Dispatch) => {
  axios
    .post('/lessons/add', lessonData)
    .then(res => alert('lesson was added successfully!'))
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const fetchLessons = () => (dispatch: Dispatch) => {
  axios.get('/lessons')
    .then(res => dispatch({
      type: ActionTypes.FETCH_LESSONS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}