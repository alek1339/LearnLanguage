import React, { useEffect, useRef, useState } from 'react'
import { MissingWordWithAudioProps } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import PracticeBtns from '../PracticeBtns';
import SentencePlaceholderWithInputs from '../sentencePlaceholderWithInputs';
import Audio from '../Audio/Audio';

const MissingWordWithAudio: MissingWordWithAudioProps = ({ onSubmit, onContinue, showContinue }) => {
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [disablePlay, setDisablePlay] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [audioSrc, setAudioSrc] = useState('./audio1.mp3');
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (currentSentence.audio) {
      setAudioSrc(currentSentence.audio);
      setPlayAudio(true);

      setTimeout(() => {
        setPlayAudio(false);
      }
        , 3000);
    }
  }, [currentSentence]);

  const handlePlayAudio = () => {
    setPlayAudio(true);
    setDisablePlay(true);

    setTimeout(() => {
      setPlayAudio(false);
      setDisablePlay(false);
    }, 3000);
  }

  return (
    <div className='missing-words'>
      <button disabled={disablePlay} onClick={handlePlayAudio}>Play</button>
      <Audio play={playAudio} src={audioSrc} />
      <SentencePlaceholderWithInputs sumbitBtnRef={submitButtonRef} currentSentence={currentSentence} onSubmit={onSubmit} />
      <div>
        <PracticeBtns buttonRef={submitButtonRef} showContinue={showContinue} onContinue={onContinue} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default MissingWordWithAudio;