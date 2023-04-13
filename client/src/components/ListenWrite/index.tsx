import React, { useEffect, useState } from 'react';
import { ListenWriteProps } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import PracticeBtns from '../PracticeBtns';
import Audio from '../Audio/Audio';
import TranslationTextArea from '../TranslationTextArea';

const ListenWrite: ListenWriteProps = ({
  onSubmit,
  onContinue,
  showContinue,
}) => {
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [disablePlay, setDisablePlay] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [audioSrc, setAudioSrc] = useState('./audio1.mp3');
  const [resetTranslation, setResetTranslation] = useState(false);

  const handleContinue = () => {
    setResetTranslation(true); // set flag to reset TranslationTextArea state
    onContinue(); // execute onContinue callback function passed as props
  }

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
    <div>
      <button disabled={disablePlay} onClick={handlePlayAudio}>Play</button>
      <Audio play={playAudio} src={audioSrc} />
      <TranslationTextArea onSubmit={onSubmit} resetTranslation={resetTranslation} setResetTranslation={setResetTranslation} />
      <div>
        <PracticeBtns showContinue={showContinue} onContinue={handleContinue} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default ListenWrite;