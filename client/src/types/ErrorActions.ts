import { Action } from "redux";
import { ActionTypes } from "../enums/actionTypes";
import { IError } from "./Error";

export class ErrorActions implements Action {
  readonly type = ActionTypes.GET_ERRORS;

  constructor(public payload: IError) { }
}