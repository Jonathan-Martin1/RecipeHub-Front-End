import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import { curRentState } from '../assets/pageTitles';
import ContactForm from '../components/contactForm';
import HomeNav from '../components/homeNav';

const ContactPage = () => {
  //eslint-disable-next-line
  const [currentState, setCurrentState] = useState({ ...curRentState });
  return (
    <Container
      style={{
        border: '2px solid blue',
        padding: '5px',
        boxShadow: '2px 2px grey',
      }}
    >
    <HomeNav />
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        {currentState.contact.title}
      </h1>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
