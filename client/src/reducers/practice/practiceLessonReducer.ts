import { PracticeActionTypes } from '../../enums/practiceActionTypes';
import { ILesson } from '../../types/Lesson';
import { SetLessonAction } from '../../types/PracticeActions';

const initialState: ILesson = { lessonName: '', level: '', sentences: [] }

export default function (state = initialState, action: SetLessonAction) {
  switch (action.type) {
    case PracticeActionTypes.SET_CURRENT_LESSON:
      return action.payload
    default:
      return state
  }
}