import React, { useState, ChangeEvent } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';

import { fetchSentences, addSentence } from '../../actions/sentencesActions';
import { RootState } from '../../reducers';
import { ISentence, ISentenceInitialState } from '../../types/Sentence';

import AdminNav from '../AdminNav'
import { IAddSentence } from './types';
import SentenceForm from '../SentenceForm';

import './styles.scss';

const AddSentence: IAddSentence = () => {
  const dispatch = useAppDispatch();
  const [filteredSentences, setFilteredSentences] = useState([ISentenceInitialState]);
  const [senteneInput, setSentenceInput] = useState('');
  const sentences = useSelector((state: RootState) => state.sentences);


  const onSubmit = (newSentence: ISentence) => {
    dispatch(addSentence(newSentence))
    dispatch(fetchSentences());
  };

  const onSentenceInputChange = (e: ChangeEvent<any>) => {
    setFilteredSentences([]);
    setSentenceInput(e.target.value)

    if (sentences.length > 0) {
      setFilteredSentences(sentences.filter(s => s.english.startsWith(e.target.value)))
    }
  }

  return (
    <div className='add-sentence-container'>
      <AdminNav />
      <div className='add-sentence'>
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
        <SentenceForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default AddSentence;