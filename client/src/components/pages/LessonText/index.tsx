import React, { useState, useEffect } from 'react'
import { ILessonText } from './types';
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
import { setCurrentLesson } from '../../../actions/practice/practiceLessonsActions';
import { useAppDispatch } from '../../../store';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

import './styles.scss';

const LessonText: ILessonText = () => {
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  const { videoLesson, lessonName, textLesson } = useSelector((state: RootState) => state.practiceLesson);

  useEffect(() => {
    dispatch(setCurrentLesson(_id || ''));
  }, []);

  console.log(textLesson);
  return (
    <>
      {textLesson && <div className="lesson-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(textLesson) }} />}
    </>
  )
}

export default LessonText;