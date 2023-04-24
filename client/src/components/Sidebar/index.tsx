import React from 'react'
import { ISidebar } from './types';

import './styles.scss';
import germanFlag from '../../images/germany.png';

const Sidebar: ISidebar = () => {
  return (
    <div className='sidebar-container'>
      <h1>LEarnesta</h1>
      <img className='flag' src={germanFlag} alt="german-flag" />
    </div>
  )
}

export default Sidebar;