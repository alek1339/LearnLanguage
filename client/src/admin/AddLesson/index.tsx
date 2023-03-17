import React from 'react';
import AdminNav from '../AdminNav'
import NewLesson from '../NewLesson'
import { IAddLesson } from './types';

const AddLesson: IAddLesson = () => {

  return (
    <div>
      <AdminNav />
      <NewLesson />
    </div>
  )
}

export default AddLesson;