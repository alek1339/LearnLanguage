import React from 'react';
import { AnswerProps } from './types';

import './styles.scss';

const Answer: AnswerProps = ({ answer, isCorrect }) => {
  const className = isCorrect ? 'correct' : 'incorrect';

  return (
    <div className={`answer-container`}>
      <div className={`answer-container-${className}`}>
        {answer}
      </div>
    </div>
  )
}

export default Answer;