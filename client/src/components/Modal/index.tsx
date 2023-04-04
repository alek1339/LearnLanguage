import React from 'react';
import { IModal } from './types';

import './styles.scss';
import { ModalBody } from 'react-bootstrap';

const Modal: IModal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <ModalBody>{children}</ModalBody>
        <button className="close-button" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Modal;