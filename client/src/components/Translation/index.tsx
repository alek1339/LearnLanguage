import React, { useEffect, useState, ChangeEvent } from 'react';
import { useSelector } from "react-redux";
import { useAppDispatch } from '../../store';
import { ITranslation } from "./types";
import { setCurrentTranslation } from "../../actions/practice/practiceSentencesActions";
import PracticeBtns from '../PracticeBtns';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';

import './styles.scss';


const Translation: ITranslation = ({ onSubmit, onContinue, showContinue }) => {
  const dispatch = useAppDispatch();
  const [translationInput, setTranslationInput] = useState('');
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [focusedClass, setFocusedClass] = useState('');

  useEffect(() => {
    setTranslationInput('');
  }, [currentSentence]);

  const onFormChange = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  }

  const handleOnContinue = () => {
    onContinue();
    setTranslationInput('');
  }

  const handleTranslationChange = (e: any) => {
    setTranslationInput(e);
    dispatch(setCurrentTranslation(e));
  }

  return (
    <div>
      <textarea
        className={`txt-area ${focusedClass}`}
        value={translationInput}
        onChange={(e) => handleTranslationChange(e.target.value)}
        onKeyDown={onFormChange}
        onFocus={() => setFocusedClass('focused')}
        onBlur={() => setFocusedClass('')}
        placeholder="Type in German"
      />
      <div className="d-flex justify-content-center">
        <PracticeBtns showContinue={showContinue} onContinue={handleOnContinue} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Translation;
