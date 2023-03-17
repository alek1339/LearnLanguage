import React, { useState, useEffect, ChangeEvent } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';

import { fetchSentences, addSentence } from '../../actions/sentencesActions';
import { RootState } from '../../reducers';
import { ISentence, ISentenceInitialState } from '../../types/Sentence';

import AdminNav from '../AdminNav'
import { IAddSentence } from './types';

const AddSentence: IAddSentence = () => {
  const dispatch = useAppDispatch();
  const [filteredSentences, setFilteredSentences] = useState([ISentenceInitialState]);
  const [senteneInput, setSentenceInput] = useState('');
  const sentences = useSelector((state: RootState) => state.sentences);
  const [english, setEnglish] = useState('');
  const [german, setGerman] = useState('');
  const [german2, setGerman2] = useState('');
  const [german3, setGerman3] = useState('');
  const [germanWithHiddenPart, setGermanWithHiddenPart] = useState('');
  const [commonWords, setCommonWords] = useState(['']);
  const [bulgarian, setBulgarian] = useState('');
  const [img, setImg] = useState('');
  const [audio, setAudio] = useState('');

  const resetInitialValues = () => {
    setFilteredSentences([]);
    setSentenceInput('');
    setEnglish('');
    setGerman('');
    setGerman2('');
    setGerman3('');
    setBulgarian('');
    setImg('');
    setGermanWithHiddenPart('');
    setCommonWords(['']);
  }

  const onSubmit = () => {
    const newSentence: ISentence = {
      english,
      german,
      german2,
      german3,
      germanWithHiddenPart,
      commonWords,
      bulgarian,
      img,
      audio,
    }
    dispatch(addSentence(newSentence))
    dispatch(fetchSentences());
    resetInitialValues()
  };

  useEffect(() => {
    dispatch(fetchSentences());
  }, [germanWithHiddenPart, commonWords, audio, german, english, bulgarian, german2, german3, dispatch]);


  const onSentenceInputChange = (e: ChangeEvent<any>) => {
    setFilteredSentences([]);
    setSentenceInput(e.target.value)

    if (sentences.length > 0) {
      setFilteredSentences(sentences.filter(s => s.english.startsWith(e.target.value)))
    }
  }

  return (
    <div>
      <AdminNav />
      <div>
        <input placeholder='Check if sentence already exists' onChange={e => onSentenceInputChange(e)} />
        <div className='sentences-row'>
          {
            filteredSentences.length > 0 && senteneInput.length > 0 ?
              <ul className='list-all-sentences'>
                {
                  filteredSentences.map((sentence, i) => {
                    return (<li key={i}>{sentence.english}</li>)
                  })
                }
              </ul>
              : ''
          }
        </div>

        <div>
          <input placeholder="English" value={english} onChange={(e) => setEnglish(e.target.value)} />
          <input placeholder="German" value={german} onChange={(e) => setGerman(e.target.value)} />
          <input placeholder="German 2" value={german2} onChange={(e) => setGerman2(e.target.value)} />
          <input placeholder="German 3" value={german3} onChange={(e) => setGerman3(e.target.value)} />
          <input placeholder="German with hidden part" value={germanWithHiddenPart} onChange={(e) => setGermanWithHiddenPart(e.target.value)} />
          <input placeholder="Common words" value={commonWords} onChange={(e) => setCommonWords((alreadyAdded) => [...alreadyAdded, e.target.value])} />
          <input placeholder="Bulgarian" value={bulgarian} onChange={(e) => setBulgarian(e.target.value)} />
          <input placeholder="Image" value={img} onChange={(e) => setImg(e.target.value)} />
          <input placeholder="Audio" value={audio} onChange={(e) => setAudio(e.target.value)} />
        </div>
      </div>
      <button className='primary-btn mt-75' onClick={() => onSubmit()}>Add Sentence</button>
    </div>
  )
}

export default AddSentence;