import React, { useEffect, useState } from 'react';
import { ILevel } from './types';
import { Link } from 'react-router-dom';
import './styles.scss';

import openBook from '../../images/open_book.png';
import { LessonViews } from '../../enums/lessonViews';
import ActionButton from '../ActionButton';
import { ILesson } from '../../types/Lesson';
import LessonButton from '../LessonButton';

const Level: ILevel = ({ level, lessons, profile, setCurrentView, setOpenedLesson }) => {
  const [uniqueLessons, setUniqueLessons] = useState<ILesson[]>([]);

  useEffect(() => {
    const uniqueLessons: ILesson[] = [];
    lessons.forEach((lesson) => {
      if (!uniqueLessons.find((l) => l.lessonName === lesson.lessonName)) {
        uniqueLessons.push(lesson);
      }
    });
    setUniqueLessons(uniqueLessons);
  }, [lessons]);


  const handleOnClick = (view: string, lessonName: string) => {
    setCurrentView(view);
    setOpenedLesson(lessonName);
  };

  return (
    <section className='level-container'>
      {uniqueLessons &&
        uniqueLessons.map((lesson) => {
          if (lesson.level === level) {
            return (
              <div className='lesson' key={lesson._id}>
                <LessonButton btnText={lesson.lessonName} onClick={() => handleOnClick(LessonViews.Lesson, lesson.lessonName)} />
                <ActionButton onClick={() => handleOnClick(LessonViews.Lesson, lesson.lessonName)} name="Read lesson">
                  <img src={openBook} alt="read lesson" />
                </ActionButton>
              </div>
            );
          }
        })}
    </section>
  )
}

export default Level;