import { Action } from "redux";
import { ActionTypes } from "../enums/actionTypes"
import { IQuestion } from "./Question"

export class FetchQuestionAction implements Action {
  readonly type = ActionTypes.FETCH_QUESTIONS;

  constructor(public payload: IQuestion[]) { }
}