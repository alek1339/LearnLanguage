import React from 'react';
import { ILevelsNavbar } from './types';

import './styles.scss';
import { LanguageLevels } from '../../enums/languageLevels';
import Header from '../Header';
import { LessonViews } from '../../enums/lessonViews';

const LevelsNavbar: ILevelsNavbar = ({ level, setLevel, setCurrentView }) => {
  const handleOnClick = (view: string, level: string) => {
    setCurrentView(view);
    setLevel(level);
  };

  return (
    <div className="levels-navigation-container">
      <div className='nav-header'>
        <Header />
      </div>
      <div className="levels-navigation-buttons">
        <button
          className={`levels-links${level === LanguageLevels[0] ? '__active' : ''}`}
          onClick={() => handleOnClick(LessonViews.All, LanguageLevels[0])}
        >
          Beginner A1
        </button>
        <button
          className={`levels-links${level === LanguageLevels[1] ? '__active' : ''}`}
          onClick={() => handleOnClick(LessonViews.All, LanguageLevels[1])}
        >
          Elementary A2
        </button>
        <button
          className={`levels-links${level === LanguageLevels[2] ? '__active' : ''}`}
          onClick={() => handleOnClick(LessonViews.All, LanguageLevels[2])}
        >
          Intermediate B1
        </button>
        <button
          className={`levels-links${level === LanguageLevels[3] ? '__active' : ''}`}
          onClick={() => handleOnClick(LessonViews.All, LanguageLevels[3])}
        >
          Upper Intermediate B2
        </button>
        <button
          className={`levels-links${level === LanguageLevels[4] ? '__active' : ''}`}
          onClick={() => handleOnClick(LessonViews.All, LanguageLevels[4])}
        >
          Advanced C1
        </button>
        <button
          className={`levels-links${level === LanguageLevels[5] ? '__active' : ''}`}
          onClick={() => handleOnClick(LessonViews.All, LanguageLevels[5])}
        >
          Mastery C2
        </button>
      </div>
    </div>
  )
}

export default LevelsNavbar;