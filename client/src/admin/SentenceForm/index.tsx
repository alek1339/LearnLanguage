import React, { useEffect, useState } from 'react';
import useFormInputs from '../../hooks/useFormInputs';
import { ISentenceForm } from './types';
import { ISentence } from '../../types/Sentence';

const SentenceForm: ISentenceForm = ({ onSubmit, sentence }) => {
  const [commonWords, setCommonWords] = useState('');
  const [submitBtnText, setSubmitBtnText] = useState('Add sentence');

  const { inputs, handleInputChange, resetInputs, setNewInputValues } = useFormInputs({
    initialValues:
    {
      english: '',
      german: '',
      german2: '',
      german3: '',
      germanWithHiddenPart: '',
      bulgarian: '',
      img: '',
      audio: '',
    },
    onSubmit: () => { }
  });

  useEffect(() => {
    if (sentence) {
      setNewInputValues({
        english: sentence.english,
        german: sentence.german,
        german2: sentence.german2 || '',
        german3: sentence.german3 || '',
        germanWithHiddenPart: sentence.germanWithHiddenPart || '',
        bulgarian: sentence.bulgarian || '',
        img: sentence.img || '',
        audio: sentence.audio || '',
      });
      setSubmitBtnText('Update sentence');

      setCommonWords(sentence.commonWords.join(','));
    } else {
      setSubmitBtnText('Add sentence');
    }

  }, [sentence]);

  const handleOnSubmit = () => {
    const commonWordsArr = commonWords.split(',')
    const { english, german, german2, german3, germanWithHiddenPart, bulgarian, img, audio } = inputs;

    const newSentence: ISentence = {
      english,
      german,
      german2,
      german3,
      germanWithHiddenPart,
      commonWords: commonWordsArr,
      bulgarian,
      img,
      audio,
    }
    onSubmit(newSentence);
    resetInputs();
  }

  return (
    <div>
      <div>
        <input placeholder="English" name='english' value={inputs.english} onChange={(e) => handleInputChange(e)} />
        <input placeholder="German" name='german' value={inputs.german} onChange={(e) => handleInputChange(e)} />
        <input placeholder="German 2" name='german2' value={inputs.german2} onChange={(e) => handleInputChange(e)} />
        <input placeholder="German 3" name='german3' value={inputs.german3} onChange={(e) => handleInputChange(e)} />
        <input placeholder="German with hidden part" name='germanWithHiddenPart' value={inputs.germanWithHiddenPart} onChange={(e) => handleInputChange(e)} />
        <input placeholder="Common words" value={commonWords} onChange={(e) => setCommonWords(e.target.value)} />
        <input placeholder="Bulgarian" name='bulgarian' value={inputs.bulgarian} onChange={(e) => handleInputChange(e)} />
        <input placeholder="Image" name='img' value={inputs.img} onChange={(e) => handleInputChange(e)} />
        <input placeholder="Audio" name='audio' value={inputs.audio} onChange={(e) => handleInputChange(e)} />
      </div>
      <button className='primary-btn mt-75' onClick={handleOnSubmit}>{submitBtnText}</button>
    </div>
  )
}

export default SentenceForm;