import React from 'react';
import { IPlayBtn } from './types';
import soundImg from '../images/icons/sound.svg';

import './styles.scss';

const PlayBtn: IPlayBtn = ({ disabled, onClick }) => {
  return (
    <button className='play-btn' disabled={disabled} onClick={onClick}>
      <img src={soundImg} />
    </button>
  )
}

export default PlayBtn;