import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {
	return (
		<footer className='mt-6'>
			<Container fluid={true}>
				<Row className='justify-content-center p-3'>
					<Col className='p-1' md={3} sm={12}>
						Co.Lab | You Belong In Tech!
					</Col>
					<Col className='p-1 d-flex justify-content-center' md={3}>
						Copyright @ 2021
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
