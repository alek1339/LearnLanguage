import React, { useEffect, useState } from 'react';
import { ITranslationTextArea } from './types';
import { useSelector } from 'react-redux';
import { setCurrentTranslation } from '../../actions/practice/practiceSentencesActions';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../store';
import { ISentence } from '../../types/Sentence';

const TranslationTextArea: ITranslationTextArea = ({ onSubmit, resetTranslation, setResetTranslation }) => {
  const dispatch = useAppDispatch();
  const [translationInput, setTranslationInput] = useState('');
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [focusedClass, setFocusedClass] = useState('');

  useEffect(() => {
    if (resetTranslation) {
      setTranslationInput('');
      setResetTranslation(false);
    }
  }, [resetTranslation]);

  useEffect(() => {
    setTranslationInput('');
  }, [currentSentence]);

  const handleTranslationChange = (e: any) => {
    setTranslationInput(e);
    dispatch(setCurrentTranslation(e));
  }

  const onFormChange = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <>
      <textarea
        className={`txt-area ${focusedClass}`}
        value={translationInput}
        onChange={(e) => handleTranslationChange(e.target.value)}
        onKeyDown={onFormChange}
        onFocus={() => setFocusedClass('focused')}
        onBlur={() => setFocusedClass('')}
        placeholder="Type in German"
      />
    </>
  )
}

export default TranslationTextArea;