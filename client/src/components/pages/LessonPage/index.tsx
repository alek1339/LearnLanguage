import React, { useEffect } from 'react';

import './styles.scss';
import { ILessonPage } from './types';
import { LessonViews } from '../../../enums/lessonViews';
import ActionButton from '../../ActionButton';
import openBook from '../../../images/open_book.png';
import { useSelector } from "react-redux";
import { fetchLessonParts } from "../../../actions/lessonsActions";
import { useAppDispatch } from '../../../store';
import LessonButton from '../../LessonButton';
import { useNavigate } from 'react-router-dom';

import star from '../../../images/icons/star.png';
import emptyStar from '../../../images/icons/empty-star.png';
import halfStar from '../../../images/icons/half-star.png';
import { ILesson } from '../../../types/Lesson';

const LessonPage: ILessonPage = ({ setCurrentView, openedLesson }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const lessonParts = useSelector((state: any) => state.lessonParts);
  const profile = useSelector((state: any) => state.profile);

  useEffect(() => {
    dispatch(fetchLessonParts(openedLesson));
  }, []);

  const handleOnClick = (id?: string) => {
    navigate(`/practice-sentence/${id}`)
  }

  const getStar = (part: ILesson) => {
    const lesson = profile?.learnedLessons.find((lesson: any) => lesson.lessonId === part._id);
    const correctStrike = lesson?.correctStrike || 0;
    const shouldRepeat = lesson?.shouldRepeat || false;

    let images = []
    for (let i = 0; i < 5; i++) {
      let src = emptyStar;

      console.log('correctStrike', profile.learnedLessons)

      if (correctStrike > 4 && shouldRepeat && i === 4) {
        src = halfStar;
      } else if (correctStrike > i) {
        src = star;
      }
      images.push(<img key={i} src={src} alt="star" />)
    }
    return images;
  }

  return (
    <div className='lesson-page-container'>
      <nav>
        <button className='go-back-btn' onClick={() => setCurrentView(LessonViews.All)}>{`< Go Back`}</button>
        <ActionButton onClick={handleOnClick} name="Read lesson">
          <img src={openBook} alt="read lesson" />
        </ActionButton>
      </nav>
      <ol>
        {lessonParts.map((part: any, index: number) => (
          <li key={part._id} className={index !== 0 ? `li-border` : ''} >
            <div className='lesson-row' >
              <LessonButton btnText={part.lessonName} onClick={() => handleOnClick(part._id)} />
              <div className='stars'>
                {getStar(part)}
              </div>

            </div>
          </li>
        ))}
      </ol>

    </div>
  )
}

export default LessonPage;