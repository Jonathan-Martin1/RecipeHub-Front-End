import '../components/user.css';

import React from 'react';

import { useHistory } from 'react-router';

const UserNav = (props) => {
	const history = useHistory();
	let handleShow = props.handleShow;
	const userTitleClickHandle = (event) => {
		event.preventDefault();
		history.push('/');
	};
	const userHomeHandle = (event) => {
		event.preventDefault();
		history.push('/usercontent');
	};
	const userCatagoriesHandle = (event) => {
		event.preventDefault();
		handleShow();
	};
	return (
		<div>
			<div className='userNav'>
				<div className='userTitle'>
					<a href='/' title='Home'>
						<h1 onClick={userTitleClickHandle}>RecipeHub</h1>
					</a>
				</div>
				<div className='home-categories'>
					<a href='/userContent' title='User Content'>
						<h1 onClick={userHomeHandle}>Home</h1>
					</a>
				</div>
				<div className='categories'>
					<a href='/userContent' title='User Content'>
						<h1 onClick={userCatagoriesHandle}>Catagories</h1>
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserNav;
