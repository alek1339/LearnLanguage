import React from 'react';
import { IModal } from './types';

import './styles.scss';

const Modal: IModal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button className="close-button" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Modal;