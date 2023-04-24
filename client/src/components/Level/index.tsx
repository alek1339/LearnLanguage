import React from 'react';
import { ILevel } from './types';
import { Link } from 'react-router-dom';

const Level: ILevel = ({ level, lessons, profile }) => {
  return (
    <>
      <section>
        <h2>{level}</h2>
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
                <div key={lesson._id}>
                  <Link
                    className={alreadyLearned ? "text-warning" : ""}
                    to={`/lesson-content/${lesson._id}`}
                  >
                    Lesson: {lesson.lessonName}
                  </Link>
                  {' '}
                  <Link
                    className={alreadyLearned ? "text-warning" : ""}
                    to={`/practice-sentence/${lesson._id}`}
                  >
                    Practice:  {lesson.lessonName}
                  </Link>
                  <span className="ml-5">{alreadyLearned ? "100%" : ""}</span>
                </div>
              );
            }
          })}
      </section>
    </>
  )
}

export default Level;