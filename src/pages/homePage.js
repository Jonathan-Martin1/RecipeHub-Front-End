import React, { useState } from 'react';

import { curRentState } from '../assets/pageTitles';
import Footer from '../components/footer';
import HomeNav from '../components/homeNav';
import HomePageContent from '../components/homePageContent';

const HomePage = () => {
	//eslint-disable-next-line
	const [currentState, setCurrentState] = useState({ ...curRentState });

	return (
		<div style={{backgroundColor:'cyan'}}>
			<HomeNav />
			<div>
				<HomePageContent />
			</div>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
