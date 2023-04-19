import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import sentencesReducer from './sentencesReducer';
import wordsReducer from './wordsReducer/wordsReducer';
import questionsReducer from './questionsReducer';
import lessonsReducer from './lessonsReducer';
import lessonReducer from './lessonReducer';
import practiceSentenceReducer from './practice/practiceSentenceReducer';
import practiceLessonReducer from './practice/practiceLessonReducer';
import profileReducer from './profileReducer/profileReducer';
import learnedLessonReducer from './learnedLessonReducer';
import practiceTranslationReducer from './practice/practiceTranslationReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    words: wordsReducer,
    sentences: sentencesReducer,
    questions: questionsReducer,
    lessons: lessonsReducer,
    lesson: lessonReducer,
    practiceSentence: practiceSentenceReducer,
    practiceLesson: practiceLessonReducer,
    practiceTranslation: practiceTranslationReducer,
    profile: profileReducer,
    learnedLesson: learnedLessonReducer,
})

export type RootState = ReturnType<typeof rootReducer>
