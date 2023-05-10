import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useAppDispatch } from '../../store';
import { IConnectWords } from "./types";
import { setCurrentTranslation } from "../../actions/practice/practiceSentencesActions";
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import PracticeBtns from '../PracticeBtns';
import Audio from '../Audio/Audio';

import './styles.scss';

const ConnectWords: IConnectWords = ({ onSubmit, onContinue, showContinue, audioSrc, isCorrect }) => {
  const dispatch = useAppDispatch();
  const [translationInput, setTranslationInput] = useState<Array<string>>(['']);
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [currentSentenceArray, setCurrentSentenceArray] = useState<Array<string>>([]);
  const [playAudio, setPlayAudio] = useState(false);
  const [translationClassName, setTranslationClassName] = useState('words-buble');

  useEffect(() => {
    if (isCorrect) {
      setTranslationClassName('words-buble');
    } else {
      setTranslationClassName('words-buble-incorrect');
    }
  }, [isCorrect]);

  useEffect(() => {
    const germanToArr: Array<string> = currentSentence.german.replace(/,/g, '').replace(/\./g, '').split(' ');
    const commonWords: Array<string> = currentSentence.commonWords || [];
    const sentenceAndCommonWords: Array<string> = [...germanToArr, ...commonWords];
    let temp: Array<string> = sentenceAndCommonWords.sort((a, b) => 0.5 - Math.random());
    temp = temp.filter((word) => word !== '');
    setCurrentSentenceArray(temp);
    setTranslationInput([]);
  }, [currentSentence]);

  // TODO: ADD MISSING TYPES AND REMOVE ANY

  const handleTranslationChange = (e: any, index: number) => {
    if (isCorrect) {
      let prevTranslation: Array<string> = translationInput;
      let prevSentenceArray: Array<string> = currentSentenceArray.filter((word, idx) => idx !== index);
      prevTranslation.push(e.target.innerText)
      setTranslationInput(prevTranslation);
      setCurrentSentenceArray(prevSentenceArray);
      dispatch(setCurrentTranslation(prevTranslation.join(' ')));
    }
  }

  const removeWord = (e: any, index: number) => {
    if (isCorrect) {
      let prevTranslation: Array<string> = translationInput.filter((word, idx) => idx !== index);
      setTranslationInput(prevTranslation);
      dispatch(setCurrentTranslation(prevTranslation.join(' ')));
      setCurrentSentenceArray([...currentSentenceArray, e.target.innerText]);
    }
  }

  const handleSubmit = () => {
    onSubmit();
  }

  const handleOnContinue = () => {
    setPlayAudio(true);
    onContinue();
  }

  return (
    <div className='connect-words'>
      <div className='translation'>
        {translationInput.map((word, index) => {
          return (
            <span onClick={(e) => removeWord(e, index)} className={translationClassName} key={index}>{word} </span>
          )
        })
        }

      </div>
      <div className='words-container'>
        {
          currentSentenceArray.map((word, index) => {
            return (
              <span onClick={(e) => handleTranslationChange(e, index)} className='words-buble' key={index}>{word} </span>
            )
          })
        }
      </div>
      <div>
        <PracticeBtns showContinue={showContinue} onContinue={handleOnContinue} onSubmit={handleSubmit} />
      </div>
      {/* <Audio src={audioSrc} play={playAudio} /> */}
    </div>
  );
}

export default ConnectWords;