import React from 'react';
import book from '../../images/icons/book.png';
import gear from '../../images/icons/gear.png';

import './styles.scss';

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
      <img className='gear-icon' src={gear} alt="gear-icon" />
    </div>
  )
}

export default Header;