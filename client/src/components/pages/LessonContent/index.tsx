import React from 'react';
import LessonText from '../LessonText';
import VideoLesson from '../VideoLesson';

import './styles.scss';
import { ILessonContent } from './types';

const LessonContent: ILessonContent = () => {
  return (
    <div>
      <LessonText />
      <VideoLesson />
    </div>
  )
}

export default LessonContent