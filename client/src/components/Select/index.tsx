import React from 'react'
import { ISelect } from './types';

import './styles.scss';

const Select: ISelect = ({ options, onClick, header }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleHeaderClick = () => {
    console.log('clicked', showDropdown);
    setShowDropdown(!showDropdown);
  }

  const handleOnClick = (option: string) => {
    onClick(option);
    setShowDropdown(false);
  }

  return (
    <div className='select-container'>
      <h3 onClick={handleHeaderClick}>{header}</h3>
      {showDropdown && (
        <ul className='dropdown'>
          {options.map((option, index) => (
            <li className='dropdown-item' key={index} onClick={() => handleOnClick(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select;