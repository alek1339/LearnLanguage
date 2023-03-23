import React from 'react';
import './styles.scss';

const NoMatch = () => {
  return (
    <div className='no-match-container'>
      <h1>Uh-Oh...</h1>
      <p>The Page you are looking for may have been moved,<br /> deleted, or possibly never existed</p>
      <h2>404</h2>
    </div>
  )
}

export default NoMatch;