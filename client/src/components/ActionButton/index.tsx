import React from 'react';
import { IActionButton } from './types';

import './styles.scss';

const ActionButton: IActionButton = ({ onClick, children, name }) => {
  return (
    <button className={`action-button`} onClick={onClick}>
      {name}
      {children}
    </button>
  )
}

export default ActionButton;