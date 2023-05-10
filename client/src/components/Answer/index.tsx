import React from 'react';
import { AnswerProps } from './types';

import pen from '../../images/icons/pen.png';

import './styles.scss';

const Answer: AnswerProps = ({ answer, isCorrect }) => {
  const className = isCorrect ? 'correct' : 'incorrect';

  return (
    <div className={`answer-container`}>
      <span className={`answer-container-${className}`}>
        <img src={pen} alt="pen" />
        {answer}
      </span>
    </div>
  )
}

export default Answer;