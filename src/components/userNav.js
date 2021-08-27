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
		<div className='otherNav'>
			<div className='userNav'>
				<div className='userTitle'>
					<a href='/' title='Home'>
						<h1 onClick={userTitleClickHandle}>RecipeHub</h1>
					</a>
					<br />
					<br />
					<a href='/userContent' title='User Content'>
						<h4 onClick={userHomeHandle}>Home</h4>
					</a>
					<a href='/userContent' title='User Content'>
						<h4 onClick={userCatagoriesHandle}>Catagories</h4>
					</a>
					<hr
						style={{
							width: '100%',
							textAlign: 'left',
							color: 'white',
							marginLeft: '10px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserNav;
