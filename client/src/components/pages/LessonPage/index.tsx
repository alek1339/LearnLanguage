import React from 'react';

import './styles.scss';
import { ILessonPage } from './types';
import { LessonViews } from '../../../enums/lessonViews';
import ActionButton from '../../ActionButton';
import openBook from '../../../images/open_book.png';

const LessonPage: ILessonPage = ({ setCurrentView }) => {
  const handleOnClick = () => {
    return
  }
  return (
    <div className='lesson-page-container'>
      <nav>
        <button className='go-back-btn' onClick={() => setCurrentView(LessonViews.All)}>{`< Go Back`}</button>
        <ActionButton onClick={handleOnClick} name="Read lesson">
          <img src={openBook} alt="read lesson" />
        </ActionButton>
      </nav>
    </div>
  )
}

export default LessonPage;