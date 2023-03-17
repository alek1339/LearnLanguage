import { Action } from "redux";
import { ActionTypes } from "../enums/actionTypes";
import { ICurrentUser } from "./User";

export class SetCurrentUserAction implements Action {
  readonly type = ActionTypes.SET_CURRENT_USER;

  constructor(public payload: ICurrentUser) { }
}