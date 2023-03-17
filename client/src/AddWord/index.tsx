import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useAppDispatch } from '../store';

import { fetchWords, addWord } from '../actions/wordsActions';
import "./styles.scss";


import AdminNav from '../admin/AdminNav';
import { RootState } from '../reducers';
import { IAddWord } from './types';
import { IWord } from '../types/Word';

const AddWord: IAddWord = () => {
  const dispatch = useAppDispatch();
  const words = useSelector((state: RootState) => state.words);
  const [filteredWords, setFilteredWords] = useState<Array<IWord>>([]);
  const [wordInput, setWordInput] = useState('');

  const [english, setEnglish] = useState('');
  const [german, setGerman] = useState('');
  const [plural, setPlural] = useState('');
  const [feminne, setFeminne] = useState('');
  const [masculine, setMasculine] = useState('');
  const [neuter, setNeuter] = useState('');
  const [img, setImg] = useState('');

  const onSubmit = () => {
    const newWord: IWord = {
      english,
      german,
      plural,
      feminne,
      masculine,
      neuter,
      img
    }

    dispatch(addWord(newWord))
  };

  useEffect(() => {
    dispatch(fetchWords());
  }, []);

  const onWordInputChange = (e: ChangeEvent<any>) => {
    setFilteredWords([]);
    setWordInput(e.target.value)

    if (words.length > 0) {
      setFilteredWords(words.filter(w => w.english.startsWith(e.target.value)))
    }
  }

  return (
    <div>
      <AdminNav />
      <div className='new-lesson-container mt-75'>
        <input placeholder='Check if word already exists' onChange={e => onWordInputChange(e)} />
        <div className='words-row'>
          {
            filteredWords.length > 0 && wordInput.length > 0 ?
              <ul className='list-all-words'>
                {
                  filteredWords.map((word, i) => {
                    return (<li key={i}>{word.english}</li>)
                  })
                }
              </ul>
              : ''
          }
        </div>
        <div className='flex direction-column'>
          <input placeholder="English" onChange={(e) => setEnglish(e.target.value)} />
          <input placeholder="German" onChange={(e) => setGerman(e.target.value)} />
          <input placeholder="Plural" onChange={(e) => setPlural(e.target.value)} />
          <input placeholder="Feminne" onChange={(e) => setFeminne(e.target.value)} />
          <input placeholder="Masculine" onChange={(e) => setMasculine(e.target.value)} />
          <input placeholder="Neuter" onChange={(e) => setNeuter(e.target.value)} />
          <input placeholder="Image" onChange={(e) => setImg(e.target.value)} />
        </div>
        <button className='primary-btn mt-75' onClick={() => onSubmit()}>Add Word</button>
      </div>
    </div>
  )
}

export default AddWord;