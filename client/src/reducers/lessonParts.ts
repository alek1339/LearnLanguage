import { ActionTypes } from "../enums/actionTypes";
import { ILesson } from "../types/Lesson";
import { FetchLessonParts } from "../types/LessonActions";

const initialState: ILesson[] = [];


export default function (state = initialState, action: FetchLessonParts) {
  switch (action.type) {
    case ActionTypes.FETCH_LESSON_PARTS:
      return action.payload
    default:
      return state
  }
}