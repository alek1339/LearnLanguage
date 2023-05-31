import React, { useEffect, useState } from 'react';
import ConnectWords from '../ConnectWords';
import ListenWrite from '../ListenWrite';
import MissingWord from '../MissingWord';
import MissingWordWithAudio from '../MissingWordWithAudio';
import Translation from '../Translation';
import { LessonsProgress } from '../../enums/lessonsProgress';

import { ILevelSwitcher } from './types';

const LevelSwitcher: ILevelSwitcher = ({ correctStrike, translation, audioSrc, onSubmit, onContinue, showContinue, submitButtonRef, continueButtonRef, allSentencesHaveAudio }) => {
  const [levelToRender, setLevelToRender] = useState(0);

  useEffect(() => {
    if (LessonsProgress.zeroLevel === correctStrike) {
      setLevelToRender(0);
    } else if (LessonsProgress.firstLevel === correctStrike && !allSentencesHaveAudio) {
      setLevelToRender(0);
    } else if (LessonsProgress.firstLevel === correctStrike && allSentencesHaveAudio) {
      setLevelToRender(1);
    } else if (LessonsProgress.secondLevel === correctStrike) {
      setLevelToRender(2);
    } else if (LessonsProgress.thirdLevel === correctStrike && !allSentencesHaveAudio) {
      setLevelToRender(2);
    } else if (LessonsProgress.thirdLevel === correctStrike && allSentencesHaveAudio) {
      setLevelToRender(3);
    } else if (LessonsProgress.fourthLevel <= correctStrike) {
      setLevelToRender(4);
    }
  }, [correctStrike, allSentencesHaveAudio]);


  return (
    <>
      {LessonsProgress.zeroLevel === levelToRender ? (
        <ConnectWords isCorrect={translation === ''} audioSrc={audioSrc} onSubmit={onSubmit} onContinue={onContinue} showContinue={showContinue} />
      ) : (
        <></>
      )}

      {LessonsProgress.firstLevel === levelToRender ? (
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

      {LessonsProgress.secondLevel === levelToRender ? (
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

      {LessonsProgress.thirdLevel === levelToRender ? (
        <ListenWrite onSubmit={onSubmit} onContinue={onContinue} showContinue={showContinue} />
      ) : (
        <></>
      )}

      {LessonsProgress.fourthLevel <= levelToRender ? (
        <Translation onSubmit={onSubmit} onContinue={onContinue} showContinue={showContinue} />
      ) : (
        <></>
      )}
    </>
  );
};

export default LevelSwitcher;
