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

export const fetchSentence = (id: string) => (dispatch: Dispatch) => {
  axios.get(`/sentences/current/${id}`)
    .then(res => dispatch({
      type: ActionTypes.FETCH_SENTENCE,
      payload: res.data
    }))
    .catch(err => {
      if (err.response && err.response.status === 404) {
        // Handle 404 error, e.g. show error message to user
        console.log('Sentence not found:', err.response.data); // Log error response data
      } else {
        // Handle other errors
        console.log('Error fetching sentence:', err);
      }
    });
};

export const updateSentence = (id: string, sentencesData: ISentence) => (dispatch: Dispatch) => {
  axios
    .put(`/sentences/update/${id}`, sentencesData)
    .then(res => alert('Sentence was updated successfully!'))
    .catch(err => {
      if (err.response && err.response.status === 404) {
        // Handle 404 error, e.g. show error message to user
        console.log('Sentence not found:', err.response.data); // Log error response data
      } else {
        // Handle other errors
        console.log('Error updating sentence:', err);
      }
    });
};
