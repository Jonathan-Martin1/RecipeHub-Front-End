import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import { curRentState } from '../assets/pageTitles';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';
import HomeNav from '../components/homeNav';

const ContactPage = () => {
	//eslint-disable-next-line
	const [currentState, setCurrentState] = useState({ ...curRentState });
	return (
		<div>
			<HomeNav />
			<Container
				style={{
					border: '2px solid blue',
					padding: '5px',
					boxShadow: '2px 2px grey',
				}}>
				<h1 style={{ display: 'flex', justifyContent: 'center' }}>
					{currentState.contact.title}
				</h1>
				<ContactForm />
			</Container>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
};

export default ContactPage;
