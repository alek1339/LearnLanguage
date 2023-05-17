import React from 'react';
import ConnectWords from '../ConnectWords';
import ListenWrite from '../ListenWrite';
import MissingWord from '../MissingWord';
import MissingWordWithAudio from '../MissingWordWithAudio';
import Translation from '../Translation';
import { LessonsProgress } from '../../enums/lessonsProgress';

import { ILevelSwitcher } from './types';

const LevelSwitcher: ILevelSwitcher = ({ correctStrike, translation, audioSrc, onSubmit, onContinue, showContinue, submitButtonRef, continueButtonRef }) => {
  return (
    <>
      {LessonsProgress.zeroLevel === correctStrike ? (
        <ConnectWords isCorrect={translation === ''} audioSrc={audioSrc} onSubmit={onSubmit} onContinue={onContinue} showContinue={showContinue} />
      ) : (
        <></>
      )}

      {LessonsProgress.firstLevel === correctStrike ? (
        <MissingWordWithAudio
          onSubmit={onSubmit}
          onContinue={onContinue}
          showContinue={showContinue}
          submitBtnRef={submitButtonRef}
          continueBtnRef={continueButtonRef}
        />
      ) : (
        <></>
      )}

      {LessonsProgress.secondLevel === correctStrike ? (
        <MissingWord
          onSubmit={onSubmit}
          onContinue={onContinue}
          showContinue={showContinue}
          submitBtnRef={submitButtonRef}
          continueBtnRef={continueButtonRef}
        />
      ) : (
        <></>
      )}

      {LessonsProgress.thirdLevel === correctStrike ? (
        <ListenWrite onSubmit={onSubmit} onContinue={onContinue} showContinue={showContinue} />
      ) : (
        <></>
      )}

      {LessonsProgress.fourthLevel <= correctStrike ? (
        <Translation onSubmit={onSubmit} onContinue={onContinue} showContinue={showContinue} />
      ) : (
        <></>
      )}
    </>
  );
};

export default LevelSwitcher;
