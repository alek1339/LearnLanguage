import { PracticeActionTypes } from '../../enums/practiceActionTypes';
import { Dispatch } from 'redux';
import { ILesson } from '../../types/Lesson';
import axios from 'axios';

export const setCurrentLesson = (id: string) => (dispatch: Dispatch) => {
  axios.get(`/lessons/current`, { params: { id: id } })
    .then((res) => {
      console.log('setCurrentLesson  inside', res.data);
      dispatch({
        type: PracticeActionTypes.SET_CURRENT_LESSON,
        payload: res.data
      });
      dispatch({
        type: PracticeActionTypes.SET_CURRENT_SENTENCE,
        payload: res.data.sentences[0]
      });
    })
    .catch(err => console.log(err))
}
