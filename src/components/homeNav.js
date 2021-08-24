import './App.css';
import '../components/user.css';

import React from 'react';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeNav(props) {
  return (
      <Container className='p-0' fluid={true}>
        <Navbar loggedIn={props.loggedIn} className='border-bottom' expand='lg'>
        <div className='homeTitle'><Navbar.Brand>RecipeHub</Navbar.Brand></div>
          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
              <Link className='nav-link' to='/signup'>
                Sign Up
              </Link>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  )
}

export default HomeNav
