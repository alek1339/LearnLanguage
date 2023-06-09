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

export const fetchLesson = (id: string) => (dispatch: Dispatch) => {
  axios.get(`/lessons/current`, { params: { id: id } })
    .then(res => dispatch({
      type: ActionTypes.FETCH_LESSON,
      payload: res.data
    }))
    .catch(err => {
      if (err.response && err.response.status === 404) {
        // Handle 404 error, e.g. show error message to user
        console.log('Lesson not found:', err.response.data); // Log error response data
      } else {
        // Handle other errors
        console.log('Error fetching lesson:', err);
      }
    });
};


export const fetchLessonParts = (openedLesson: string) => (dispatch: Dispatch) => {
  axios.get(`/lessons/parts/`, { params: { lessonName: openedLesson } })
    .then(res => dispatch({
      type: ActionTypes.FETCH_LESSON_PARTS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}



export const updateLesson = (id: string, lessonData: ILesson) => (dispatch: Dispatch) => {
  axios
    .put(`/lessons/update/${id}`, lessonData)
    .then(res => alert('lesson was updated successfully!'))
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    )
};

// Utility function for handling errors
const handleErrors = (err: any, dispatch: Dispatch) => {
  if (err.response && err.response.status === 404) {
    // Handle 404 error, e.g. show error message to user
    console.log('Lesson not found:', err.response.data); // Log error response data
  } else {
    // Handle other errors
    console.log('Error fetching lesson:', err);
  }

  // Dispatch error action to Redux store
  dispatch({
    type: ActionTypes.GET_ERRORS,
    payload: err.response.data // You may need to adjust the payload depending on your backend response format
  });
};