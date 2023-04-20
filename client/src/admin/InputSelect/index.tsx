import React, { ChangeEvent, FC } from 'react';
import List from '../../components/List';

import { IInputSelect, MyObjectType } from './types';
import './styles.scss';

const InputSelect: IInputSelect<{ sentenceInput: string }> = ({ onInputChange, inputs, filtered, onSelect }) => {
  return (
    <div className='input-select-container'>
      <input
        id="word-input"
        name="sentenceInput"
        onChange={(e) => onInputChange(e)}
        value={inputs.sentenceInput}
      />
      <div>
        {filtered.length > 0 && inputs.sentenceInput.length > 0 ? (
          <div className="dropdown">
            <List
              elements={filtered.map((s: MyObjectType) => s.german)}
              onClick={onSelect}
              className='list-all-words'
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default InputSelect;
