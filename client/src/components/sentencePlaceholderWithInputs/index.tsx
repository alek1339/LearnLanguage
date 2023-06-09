import React, { useEffect, useRef, useState } from 'react';
import { SentencePlaceholderWithInputsProps } from './types';
import { useDispatch } from 'react-redux';

import './styles.scss';

const SentencePlaceholderWithInputs: SentencePlaceholderWithInputsProps = ({ currentSentence, submitBtnRef, continueBtnRef, isCorrect }) => {
  const dispatch = useDispatch();
  const [currentSentenceArray, setCurrentSentenceArray] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrongAnswerClass: string = 'wrong-answer';

  useEffect(() => {
    if (!isCorrect && inputRef.current) {
      inputRef.current.classList.add(wrongAnswerClass);
    } else if (inputRef.current) {
      inputRef.current.classList.remove(wrongAnswerClass);
    }
  }, [isCorrect]);

  useEffect(() => {
    let temp: any = currentSentence.germanWithHiddenPart?.split(' ');

    temp?.forEach((word: any, index: number) => {
      const brecketsLength: number = 4;
      const pixelsPerLetter: number = 10;

      if (word.includes('{{') && word.includes('}}')) {
        inputRef.current && (inputRef.current.value = '');
        const inputWidth = (word.length - brecketsLength) * pixelsPerLetter;
        temp[index] = (
          <input ref={inputRef} autoFocus onKeyDown={onPressKey} onChange={onInputChange} style={{ width: inputWidth }} />
        );
      } else {
        temp[index] = word;
      }
    })
    setCurrentSentenceArray(temp);
  }, [currentSentence]);

  const onPressKey = (e: any) => {

    if (e.key === 'Enter') {
      if (submitBtnRef?.current) {
        submitBtnRef.current.click();
      } else if (continueBtnRef?.current) {
        continueBtnRef.current.click();
      }
    }
  }

  const onInputChange = (e: any) => {
    let translatedResult: any = currentSentence.germanWithHiddenPart?.split(' ');

    translatedResult?.forEach((word: any, index: number) => {
      if (word.includes('{{') && word.includes('}}')) {
        translatedResult[index] = e.target.value;
      }
    })
    dispatch({ type: 'SET_CURRENT_TRANSLATION', payload: translatedResult.join(' ') });
  }
  return (
    <div className='sentence-placeholder-with-input-container'>
      <span>
        {currentSentenceArray?.map((word, index) => {
          return (
            <span key={index}>{word}</span>
          )
        })
        }
      </span>
    </div>
  )
}

export default SentencePlaceholderWithInputs;

