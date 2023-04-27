import { Action } from "redux";
import { ActionTypes } from "../enums/actionTypes";
import { ILesson } from "./Lesson";

export class FetchLessonAction implements Action {
  readonly type: ActionTypes.FETCH_LESSONS | ActionTypes.FETCH_LESSON = ActionTypes.FETCH_LESSONS;

  constructor(public payload: ILesson[]) { }
}

export class FetchLessonParts implements Action {
  readonly type: ActionTypes.FETCH_LESSON_PARTS = ActionTypes.FETCH_LESSON_PARTS;

  constructor(public payload: ILesson[]) { }
}
