import React from 'react';
import { ITranslation } from "./types";
import PracticeBtns from '../PracticeBtns';
import TranslationTextArea from '../TranslationTextArea';

import './styles.scss';

const Translation: ITranslation = ({ onSubmit, onContinue, showContinue }) => {
  return (
    <div>
      <TranslationTextArea onSubmit={onSubmit} />
      <div className="d-flex justify-content-center">
        <PracticeBtns showContinue={showContinue} onContinue={onContinue} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Translation;
