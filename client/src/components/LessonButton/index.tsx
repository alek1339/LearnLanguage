import React from 'react'
import { ILessonButton } from './types';
import './styles.scss';

const LessonButton: ILessonButton = ({ btnText, onClick }) => {
  return (
    <button className='lesson__open_button' onClick={onClick}  >
      <div className={"lesson__link"}>
        {btnText}
      </div>
    </button>
  )
}

export default LessonButton;