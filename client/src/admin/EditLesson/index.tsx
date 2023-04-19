import React, { useEffect } from 'react';
import { IEditLesson } from './types';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { fetchLesson, updateLesson } from '../../actions/lessonsActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ILesson } from '../../types/Lesson';
import LessonForm from '../LessonForm';

const EditLesson: IEditLesson = () => {
  const dispatch = useAppDispatch();
  const { _id } = useParams();
  const lesson: ILesson = useSelector((state: RootState) => state.lesson);

  useEffect(() => {
    if (_id) {
      dispatch(fetchLesson(_id))
    }
    console.log(lesson);
  }, [_id]);

  const onSubmit = (updatedLesson: ILesson) => {
    if (_id) {
      dispatch(updateLesson(_id, updatedLesson));
    }
  }

  return (
    <div>
      <h1 className="flex justify-center">Edit lesson</h1>
      <LessonForm lesson={lesson} onSubmit={onSubmit} />
    </div>
  )
}

export default EditLesson;