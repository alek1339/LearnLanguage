import React from 'react'
import { IList } from './types';

const List: IList = ({ elements, className }) => {
  return (
    <ul className={className ? className : ''}>
      {elements.map((el, i) => <li key={i}>{el}</li>)}
    </ul>
  )
}

export default List;