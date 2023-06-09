import React, { useState, useEffect } from 'react'
import { IVideoLesson } from './types';
import { useParams } from "react-router-dom";

import './styles.scss';
import { setCurrentLesson } from '../../../actions/practice/practiceLessonsActions';
import { useAppDispatch } from '../../../store';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const VideoLesson: IVideoLesson = () => {
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  const { videoLesson, lessonName } = useSelector((state: RootState) => state.practiceLesson);

  useEffect(() => {
    dispatch(setCurrentLesson(_id || ''));
  }, []);

  return (
    <>
      {videoLesson && (
        <iframe
          allowFullScreen={true}
          src={videoLesson || ''}
          name={lessonName || ''}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allow='encrypted-media'
          x-frame-options='SAMEORIGIN'
          referrerPolicy='no-referrer-when-downgrade'
        />
      )}
    </>
  )
}

export default VideoLesson;