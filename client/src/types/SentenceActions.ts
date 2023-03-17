import { Action } from "redux";
import { ActionTypes } from "../enums/actionTypes";
import { ISentence } from "./Sentence";

export class FetchSentenceAction implements Action {
  readonly type = ActionTypes.FETCH_SENTENCES;

  constructor(public payload: ISentence[]) { }
}