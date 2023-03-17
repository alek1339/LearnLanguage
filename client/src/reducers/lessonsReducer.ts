import { ActionTypes } from '../enums/actionTypes';
import { ILesson } from '../types/Lesson';
import { FetchLessonAction } from '../types/LessonActions';
import { ISentence } from '../types/Sentence';

const initialSentenceArray: Array<ISentence> = [
  {
    english: '',
    german: '',
    commonWords: [''],
  },
];

const initialState: Array<ILesson> = [
  {
    lessonName: '',
    sentences: initialSentenceArray,
    level: '',
  }
]

export default function (state = initialState, action: FetchLessonAction) {
  switch (action.type) {
    case ActionTypes.FETCH_LESSONS:
      return action.payload
    default:
      return state
  }
}