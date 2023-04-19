import { Action } from "redux";
import { ActionTypes } from "../enums/actionTypes";
import { ILesson } from "./Lesson";

export class FetchLessonAction implements Action {
  readonly type: ActionTypes.FETCH_LESSONS | ActionTypes.FETCH_LESSON = ActionTypes.FETCH_LESSONS;

  constructor(public payload: ILesson[]) { }
}
