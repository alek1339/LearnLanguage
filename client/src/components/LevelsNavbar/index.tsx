import React from 'react';
import { ILevelsNavbar } from './types';
import { Link } from 'react-router-dom';

import './styles.scss';
import { LanguageLevels } from '../../enums/languageLevels';

const LevelsNavbar: ILevelsNavbar = ({ level, setLevel }) => {

  return (
    <div className="levels-navigation">
      <button
        className={`levels-links${level === LanguageLevels[0] ? '__active' : ''}`}
        onClick={() => setLevel(LanguageLevels[0])}
      >
        Beginner A1
      </button>
      <button
        className={`levels-links${level === LanguageLevels[1] ? '__active' : ''}`}
        onClick={() => setLevel(LanguageLevels[1])}
      >
        Elementary A2
      </button>
      <button
        className={`levels-links${level === LanguageLevels[2] ? '__active' : ''}`}
        onClick={() => setLevel(LanguageLevels[2])}
      >
        Intermediate B1
      </button>
      <button
        className={`levels-links${level === LanguageLevels[3] ? '__active' : ''}`}
        onClick={() => setLevel(LanguageLevels[3])}
      >
        Upper Intermediate B2
      </button>
      <button
        className={`levels-links${level === LanguageLevels[4] ? '__active' : ''}`}
        onClick={() => setLevel(LanguageLevels[4])}
      >
        Advanced C1
      </button>
      <button
        className={`levels-links${level === LanguageLevels[5] ? '__active' : ''}`}
        onClick={() => setLevel(LanguageLevels[5])}
      >
        Mastery C2
      </button>
    </div>
  )
}

export default LevelsNavbar;