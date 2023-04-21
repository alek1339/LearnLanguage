import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';

import './styles.scss';
import { IAdminNav } from './types';

const AdminNav: IAdminNav = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
  }, [location]);


  return (
    <div>

      <div className='admin-nav'>
        <Nav.Link className={location.pathname.endsWith('admin') ? "primary-btn active-btn" : 'primary-btn'} href='/admin'>{' '}Lessons</Nav.Link>
        <Nav.Link className={location.pathname.endsWith('admin') ? "primary-btn active-btn" : 'primary-btn'} href='/admin/sentences'>{' '}Sentences</Nav.Link>
        <Nav.Link className={location.pathname.endsWith('add-lesson') ? "primary-btn active-btn" : 'primary-btn'} href='/admin/add-lesson'>{' '}New Lesson</Nav.Link>
        <Nav.Link className={location.pathname.endsWith('add-word') ? "primary-btn active-btn" : 'primary-btn'} href='/admin/add-word'>{' '}New Word</Nav.Link>
        <Nav.Link className={location.pathname.endsWith('add-sentence') ? "primary-btn active-btn" : 'primary-btn'} href='/admin/add-sentence'>{' '}New Sentence</Nav.Link>
        <Nav.Link className={location.pathname.endsWith('add-question') ? "primary-btn active-btn" : 'primary-btn'} href='/admin/add-question'>{' '}New Question</Nav.Link>
      </div>
    </div>
  )
}

export default AdminNav;