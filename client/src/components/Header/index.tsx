import React from 'react';
import book from '../../images/icons/book.png';

import './styles.scss';
import GearDropdown from '../GearDropdown';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='streak'>
        <img className='book-icon' src={book} alt="book-icon" />
        <div>
          <h2>10 days</h2>
          <h3>streak!</h3>
        </div>
      </div>
      <GearDropdown />
    </div>
  )
}

export default Header;