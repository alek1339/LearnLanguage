import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import { IMyNavbar } from './types';

import './styles.scss'
import { RootState } from '../../reducers';
import { ICurrentUser } from '../../types/User';

const MyNavbar: IMyNavbar = () => {
  const dispatch = useDispatch();
  const currentUser: ICurrentUser = useSelector((state: RootState) => state.auth);

  const [openedDropdown, setOpenedDropdown] = useState('');
  return (
    <Navbar expand="lg">
      {/* <Nav.Link className='nav-link' href='/'>{' '} <img src={logo} alt='logo' style={logoStyle} /></Nav.Link>    */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='navbar-nav'>
          <Nav.Link className='nav-link' href='/'>{' '}Home</Nav.Link>
          <Nav.Link className='nav-link' href='/profile'>{' '}Profile</Nav.Link>
          {!currentUser.isAuthenticated &&
            <>
              <Nav.Link className='nav-link' href='/register'>{' '}Register</Nav.Link>
              <Nav.Link className='nav-link' href='/login'>{' '}Login</Nav.Link>
            </>
          }
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}




export default MyNavbar