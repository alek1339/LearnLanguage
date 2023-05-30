import React, { useState, useEffect, ChangeEvent, useMemo } from 'react';
import { useSelector, } from 'react-redux';
import { useAppDispatch } from '../store';
import { fetchWords, addWord } from '../actions/wordsActions';
import AdminNav from '../admin/AdminNav';
import { RootState } from '../reducers';
import { IAddWord } from './types';
import { IWord } from '../types/Word';
import List from '../components/List';
import useFormInputs from '../hooks/useFormInputs';
import "./styles.scss";

const AddWord: IAddWord = () => {
  const dispatch = useAppDispatch();
  const words = useSelector((state: RootState) => state.words);
  const [filteredWords, setFilteredWords] = useState<Array<IWord>>([]);
  const [wordInput, setWordInput] = useState('');

  const { inputs, handleInputChange, handleSubmit, resetInputs } = useFormInputs<IWord>({
    initialValues: {
      english: '',
      german: '',
      plural: '',
      feminine: '',
      masculine: '',
      neuter: '',
      img: '',
    },
    onSubmit: (newWord) => {
      dispatch(addWord(newWord));
      resetInputs();
    },
  });

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

  const memoizedList = useMemo(() => {
    if (filteredWords.length > 0 && wordInput.length > 0) {
      return <List elements={filteredWords.map(w => w.english)} className='list-all-words' />;
    }
    return null;
  }, [filteredWords, wordInput]);

  return (
    <div>
      <AdminNav />
      <div className='new-lesson-container mt-75'>
        <input placeholder='Check if word already exists' onChange={e => onWordInputChange(e)} />
        <div className='words-row'>
          {memoizedList}
        </div>
        <div className='flex direction-column'>
          <input aria-label='English' placeholder="English" name="english" value={inputs.english} onChange={handleInputChange} />
          <input aria-label='German' placeholder="German" name="german" value={inputs.german} onChange={handleInputChange} />
          <input aria-label='Plural' placeholder="Plural" name="plural" value={inputs.plural} onChange={handleInputChange} />
          <input aria-label='Feminine' placeholder="Feminine" name="feminine" value={inputs.feminine} onChange={handleInputChange} />
          <input aria-label='Masculine' placeholder="Masculine" name="masculine" value={inputs.masculine} onChange={handleInputChange} />
          <input aria-label='Neuter' placeholder="Neuter" name="neuter" value={inputs.neuter} onChange={handleInputChange} />
          <input aria-label='Image' placeholder="Image" name="img" value={inputs.img} onChange={handleInputChange} />
        </div>
        <button className='primary-btn mt-75' onClick={(e) => handleSubmit(e)}>Add Word</button>
      </div>
    </div>
  )
}

export default AddWord;