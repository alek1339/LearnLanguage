import axios from 'axios';
import { Dispatch } from 'redux';
import { IAddLearnedLessonData } from '../types/LearnedLesson';
import { ActionTypes } from '../enums/actionTypes';

export const addLearnedLesson = (learnedLessonData: IAddLearnedLessonData) => (dispatch: Dispatch) => {
  axios
    .post('/learned-lessons/add', learnedLessonData)
    .then((res) => {
      console.log('Learned lesson added', res.data);
      dispatch({
        type: ActionTypes.ADD_LEARNED_LESSON,
        payload: res.data,
      });
    })
    .catch((err) => console.log('Catched an error', err));
}
