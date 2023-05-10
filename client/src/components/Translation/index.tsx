import React, { useState } from 'react';
import { ITranslation } from "./types";
import PracticeBtns from '../PracticeBtns';
import TranslationTextArea from '../TranslationTextArea';

import './styles.scss';

const Translation: ITranslation = ({ onSubmit, onContinue, showContinue }) => {
  const [resetTranslation, setResetTranslation] = useState(false);

  const handleContinue = () => {
    setResetTranslation(true); // set flag to reset TranslationTextArea state
    onContinue(); // execute onContinue callback function passed as props
  }

  return (
    <div className='translate-sentence-container'>
      <TranslationTextArea onSubmit={onSubmit} resetTranslation={resetTranslation} setResetTranslation={setResetTranslation} />
      <div className="d-flex justify-content-center">
        <PracticeBtns showContinue={showContinue} onContinue={handleContinue} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Translation;
