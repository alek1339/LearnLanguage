import React from 'react';
import { ILevel } from './types';
import { Link } from 'react-router-dom';
import './styles.scss';

import openBook from '../../images/open_book.png';
import { LessonViews } from '../../enums/lessonViews';
import ActionButton from '../ActionButton';

const Level: ILevel = ({ level, lessons, profile, setCurrentView, setOpenedLesson }) => {
  const handleOnClick = (view: string, lessonName: string) => {
    setCurrentView(view);
    setOpenedLesson(lessonName);
  };

  return (
    <>
      {/* TODO: After the new design is implemented, already has to be moved to the new component */}
      <section className='level-container'>
        {lessons &&
          lessons.map((lesson) => {
            const alreadyLearned =
              profile &&
                profile.learnedLessons &&
                profile.learnedLessons.find(l => l.lessonId === lesson._id)
                ? true
                : false;
            if (lesson.level === level) {
              return (
                <div className='lesson' key={lesson._id}>
                  <button className='lesson__open_button' onClick={() => handleOnClick(LessonViews.Lesson, lesson.lessonName)}  >
                    <div className={"lesson__link"}>
                      {lesson.lessonName}
                    </div>
                  </button>
                  {' '}
                  {/* <Link
                    to={`/lesson-content/${lesson._id}`}
                  >
                    <div className={"lesson__button"}>
                      Read lesson:
                      <img src={openBook} alt="read lesson" />
                    </div>
                  </Link> */}
                  <ActionButton onClick={() => handleOnClick(LessonViews.Lesson, lesson.lessonName)} name="Read lesson">
                    <img src={openBook} alt="read lesson" />
                  </ActionButton>
                </div>
              );
            }
          })}
      </section>
    </>
  )
}

export default Level;