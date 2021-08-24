import './App.css';

import React, { useState } from 'react';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { curRentState } from '../assets/pageTitles';
import ContactForm from '../pages/contactPage';
import Login from '../pages/loginPage';
import SignUpForm from '../pages/signUpPage';
import UserContent from '../pages/userContent';
import Footer from './footer';
import HomePageContent from './homePageContent';

function HomeNav() {
  //eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false)

  //eslint-disable-next-line
  const [currentState, setCurrentState] = useState({ ...curRentState })

  return (
    <Router>
      <Container className='p-0' fluid={true}>
        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>RecipeHub</Navbar.Brand>
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
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <div>
                <HomeNav />
                <HomePageContent
                  title={currentState.home.title}
                  text={currentState.home.text}
                />
              </div>
            )}
          />
          <Route path='/contact' render={() => <ContactForm />} />
          <Route
            path='/signup'
            render={() => (
              <div>
                <HomeNav />
                <SignUpForm title={currentState.signup.title} />
              </div>
            )}
          />
          <Route
            path='/login'
            render={() => (
              <div>
                <HomeNav />
                <Login
                  title={currentState.login.title}
                  setLoggedIn={setLoggedIn}
                  loggedIn={loggedIn}
                />
              </div>
            )}
          />
          <Route path='/usercontent'>
            <UserContent />
          </Route>
          <Route>
            <HomeNav />
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  )
}

export default HomeNav
