import { ActionTypes } from "../enums/actionTypes";
import { Dispatch } from 'redux';
import axios from "axios";
import { IFetchProfileData, IProfile } from "../types/Profile";
import { ILearnedLesson } from "../types/LearnedLesson";

export const fetchProfile = (profileData: IFetchProfileData) => (dispatch: Dispatch) => {
  axios
    .get("/profile", { params: { id: profileData.id } })
    .then((res) =>
      dispatch({
        type: ActionTypes.FETCH_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addProfile = (profileData: IProfile) => (dispatch: Dispatch) => {

  axios
    .post("/profile/add", profileData)
    .then((res) => console.log('Added profile', res))
    .catch((err) => console.log('Catched an error', err));
};

export const updateProfile = (userData: any) => {

  axios.put('/profile/update', userData)
    .then(res => console.log(res))
}


