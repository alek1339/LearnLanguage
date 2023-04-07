import React from 'react'
import { IList } from './types';

const List: IList = ({ elements, className, onClick }) => {
  const handleClick = (el: any) => {
    if (onClick) {
      onClick(el);
    }
  }


  return (
    <ul className={className ? className : ''}>
      {elements.map((el, i) => <li key={i}
        onClick={() => handleClick(el)}
      >{el}</li>)}
    </ul>
  )
}

export default List;