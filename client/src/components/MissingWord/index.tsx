import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import { IMissingWord } from "./types";
import PracticeBtns from '../PracticeBtns';

import './styles.scss';

const MissingWord: IMissingWord = ({ onSubmit, onContinue, showContinue }) => {
  const dispatch = useDispatch();
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const [currentSentenceArray, setCurrentSentenceArray] = useState<Array<string>>([]);

  useEffect(() => {
    let temp: any = currentSentence.germanWithHiddenPart?.split(' ');

    temp?.forEach((word: any, index: number) => {
      const brecketsLength: number = 4;
      const pixelsPerLetter: number = 10;

      if (word.includes('{{') && word.includes('}}')) {
        const inputWidth = (word.length - brecketsLength) * pixelsPerLetter;
        temp[index] = (
          <input onChange={onInputChange} style={{ width: inputWidth }} />
        );
      } else {
        temp[index] = word;
      }
    })
    setCurrentSentenceArray(temp);
  }, [currentSentence]);

  const onInputChange = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
    let translatedResult: any = currentSentence.germanWithHiddenPart?.split(' ');

    translatedResult?.forEach((word: any, index: number) => {
      if (word.includes('{{') && word.includes('}}')) {
        translatedResult[index] = e.target.value;
      }
    })

    dispatch({ type: 'SET_CURRENT_TRANSLATION', payload: translatedResult.join(' ') });
  }


  return (
    <div className='missing-words'>
      <span>
        {currentSentenceArray?.map((word, index) => {
          return (
            <span key={index}>{word}</span>
          )
        })
        }
      </span>

      <div>
        <PracticeBtns showContinue={showContinue} onContinue={onContinue} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default MissingWord;