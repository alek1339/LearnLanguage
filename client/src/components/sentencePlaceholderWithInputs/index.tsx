import React, { useEffect, useState } from 'react';
import { SentencePlaceholderWithInputsProps } from './types';
import { useDispatch } from 'react-redux';

const SentencePlaceholderWithInputs: SentencePlaceholderWithInputsProps = ({ currentSentence, onSubmit, sumbitBtnRef }) => {
  const dispatch = useDispatch();
  const [currentSentenceArray, setCurrentSentenceArray] = useState<Array<string>>([]);

  useEffect(() => {
    let temp: any = currentSentence.germanWithHiddenPart?.split(' ');

    temp?.forEach((word: any, index: number) => {
      const brecketsLength: number = 4;
      const pixelsPerLetter: number = 10;

      if (word.includes('{{') && word.includes('}}')) {
        const inputWidth = (word.length - brecketsLength) * pixelsPerLetter;
        temp[index] = (
          <input onKeyDown={onPressKey} onChange={onInputChange} style={{ width: inputWidth }} />
        );
      } else {
        temp[index] = word;
      }
    })
    setCurrentSentenceArray(temp);
  }, [currentSentence]);

  const onPressKey = (e: any) => {
    if (e.key === 'Enter') {
      if (sumbitBtnRef?.current) {
        sumbitBtnRef.current.click();
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
    <div>
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

