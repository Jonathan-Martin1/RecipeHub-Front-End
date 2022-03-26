import React from 'react';

import MainRecipeContent from '../components/mainRecipeContent';
import UserNav from '../components/userNav';

const UserContent = (props, { loggedIn, setLoggedIn }) => {
	const handleClose = props.handleClose;
	const handleShow = props.handleShow;
	return (
		<div style={{background='cyan'}}>
			<div>
				<UserNav handleShow={handleShow} handleClose={handleClose} />
			</div>
			<div
				style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
				<MainRecipeContent />
			</div>
		</div>
	);
};

export default UserContent;
