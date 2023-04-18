import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import { IMissingWord } from "./types";
import PracticeBtns from '../PracticeBtns';
import SentencePlaceholderWithInputsProps from '../sentencePlaceholderWithInputs';

import './styles.scss';

const MissingWord: IMissingWord = ({ onSubmit, onContinue, showContinue, submitBtnRef, continueBtnRef }) => {
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);

  return (
    <div className='missing-words'>
      <SentencePlaceholderWithInputsProps submitBtnRef={submitBtnRef} continueBtnRef={continueBtnRef} currentSentence={currentSentence} />
      <div>
        <PracticeBtns submitBtnRef={submitBtnRef} continueBtnRef={continueBtnRef} showContinue={showContinue} onContinue={onContinue} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default MissingWord;