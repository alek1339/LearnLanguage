import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';

import { fetchQuestions, addQuestion } from '../../actions/questionsActions';
import { RootState } from '../../reducers';
import { IQuestion } from '../../types/Question';

import AdminNav from '../AdminNav';
import { IAddQuestion } from './types';

const intitialQuestion = [{
  question: '',
  answer: '',
}]

const AddQuestion: IAddQuestion = () => {
  const dispatch = useAppDispatch();
  const questions = useSelector((state: RootState) => state.questions);
  const [filteredQuestions, setFilteredQuestions] = useState<Array<IQuestion>>(intitialQuestion);
  const [questionInput, setQuestionInput] = useState('');

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const onSubmit = () => {
    const newQuestion = {
      question,
      answer,
    }

    dispatch(addQuestion(newQuestion))
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const onQuestionInputChange = (e: ChangeEvent<any>) => {
    setFilteredQuestions([]);
    setQuestionInput(e.target.value)

    if (questions.length > 0) {
      setFilteredQuestions(questions.filter(q => q.question.startsWith(e.target.value)))
    }
  }

  return (
    <div>
      <AdminNav />
      <div className='new-question-container mt-75'>
        <input placeholder='Check if word already exists' onChange={e => onQuestionInputChange(e)} />
        <div className='question-row'>
          {
            filteredQuestions.length > 0 && questionInput.length > 0 ?
              <ul className='list-all-questions'>
                {
                  filteredQuestions.map((quest, i) => {
                    return (<li key={i}>{quest.question}</li>)
                  })
                }
              </ul>
              : ''
          }
        </div>
        <div className='flex direction-column'>
          <input placeholder="Question" onChange={(e) => setQuestion(e.target.value)} />
          <input placeholder="Answer" onChange={(e) => setAnswer(e.target.value)} />
        </div>
        <button className='primary-btn mt-75' onClick={() => onSubmit()}>Add Question</button>
      </div>
    </div>
  )
}

export default AddQuestion;