import React from 'react';

import UserNav from '../components/userNav';

const UserContent = (props, { loggedIn, setLoggedIn }) => {
	const handleClose = props.handleClose;
	const handleShow = props.handleShow;
	return (
		<div>
			<div>
				<UserNav handleShow={handleShow} handleClose={handleClose} />
			</div>
		</div>
	);
};

export default UserContent;
