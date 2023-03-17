import { Action } from "redux";
import { PracticeActionTypes } from "../enums/practiceActionTypes";
import { ISentence } from "./Sentence";
import { ILesson } from "./Lesson";
import { IProfile } from "./Profile";
import { ActionTypes } from "../enums/actionTypes";
import { ICurrentTranslation } from "./CurrentTranslation";
import { IWord } from "./Word";

export class SetSentenceAction implements Action {
  readonly type = PracticeActionTypes.SET_CURRENT_SENTENCE;

  constructor(public payload: ISentence) { }
}


export class SetCurrentTranslationAction implements Action {
  readonly type: string = PracticeActionTypes.SET_CURRENT_TRANSLATION;

  constructor(public payload: ICurrentTranslation) { }
}
export class SetLessonAction implements Action {
  readonly type = PracticeActionTypes.SET_CURRENT_LESSON;

  constructor(public payload: ILesson) { }
}

export class FetchProfileAction implements Action {
  readonly type = ActionTypes.FETCH_PROFILE;

  constructor(public payload: IProfile) { }
}

export class FetchWordAction implements Action {
  readonly type = ActionTypes.FETCH_WORDS;

  constructor(public payload: IWord[]) { }
}

export class AddLearnedLesson implements Action {
  readonly type = ActionTypes.ADD_LEARNED_LESSON;

  constructor(public payload: ILesson) { }
}