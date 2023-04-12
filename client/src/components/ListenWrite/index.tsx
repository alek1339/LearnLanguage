import React, { useEffect, useState } from 'react';
import { ListenWriteProps } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import PracticeBtns from '../PracticeBtns';
import Audio from '../Audio/Audio';
import { setCurrentTranslation } from '../../actions/practice/practiceSentencesActions';
import { useAppDispatch } from '../../store';

const ListenWrite: ListenWriteProps = ({
  onSubmit,
  onContinue,
  showContinue,
}) => {
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [disablePlay, setDisablePlay] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [audioSrc, setAudioSrc] = useState('./audio1.mp3');

  const dispatch = useAppDispatch();
  const [translationInput, setTranslationInput] = useState('');
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
      <textarea
        className={`txt-area ${focusedClass}`}
        value={translationInput}
        onChange={(e) => handleTranslationChange(e.target.value)}
        onKeyDown={onFormChange}
        onFocus={() => setFocusedClass('focused')}
        onBlur={() => setFocusedClass('')}
        placeholder="Type in German"
      />
      <div>
        <PracticeBtns showContinue={showContinue} onContinue={handleOnContinue} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default ListenWrite;