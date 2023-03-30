import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useAppDispatch } from '../store';

import { fetchWords, addWord } from '../actions/wordsActions';
import "./styles.scss";


import AdminNav from '../admin/AdminNav';
import { RootState } from '../reducers';
import { IAddWord } from './types';
import { IWord } from '../types/Word';
import List from '../components/List';

const AddWord: IAddWord = () => {
  const dispatch = useAppDispatch();
  const words = useSelector((state: RootState) => state.words);
  const [filteredWords, setFilteredWords] = useState<Array<IWord>>([]);
  const [wordInput, setWordInput] = useState('');

  const [inputs, setInputs] = useState({
    english: '',
    german: '',
    plural: '',
    feminine: '',
    masculine: '',
    neuter: '',
    img: ''
  });

  const onSubmit = () => {
    const newWord: IWord = {
      english: inputs.english,
      german: inputs.german,
      plural: inputs.plural,
      feminine: inputs.feminine,
      masculine: inputs.masculine,
      neuter: inputs.neuter,
      img: inputs.img
    }

    dispatch(addWord(newWord));
    clearInputs();
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

  const clearInputs = () => {
    setInputs({
      english: '',
      german: '',
      plural: '',
      feminine: '',
      masculine: '',
      neuter: '',
      img: ''
    });
  };



  const handleOnSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();
    onSubmit();
    clearInputs();

  };

  const onInputChange = (e: ChangeEvent<any>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <AdminNav />
      <div className='new-lesson-container mt-75'>
        <input placeholder='Check if word already exists' onChange={e => onWordInputChange(e)} />
        <div className='words-row'>
          {
            filteredWords.length > 0 && wordInput.length > 0 ?
              <List elements={filteredWords.map(w => w.english)} className='list-all-words' />
              : ''
          }
        </div>
        <div className='flex direction-column'>
          <input placeholder="English" name="english" value={inputs.english} onChange={onInputChange} />
          <input placeholder="German" name="german" value={inputs.german} onChange={onInputChange} />
          <input placeholder="Plural" name="plural" value={inputs.plural} onChange={onInputChange} />
          <input placeholder="Feminine" name="feminine" value={inputs.feminine} onChange={onInputChange} />
          <input placeholder="Masculine" name="masculine" value={inputs.masculine} onChange={onInputChange} />
          <input placeholder="Neuter" name="neuter" value={inputs.neuter} onChange={onInputChange} />
          <input placeholder="Image" name="img" value={inputs.img} onChange={onInputChange} />
        </div>
        <button className='primary-btn mt-75' onClick={(e) => handleOnSubmit(e)}>Add Word</button>
      </div>
    </div>
  )
}

export default AddWord;