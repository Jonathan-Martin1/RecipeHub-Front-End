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
					<a href='/' title='Home of RecipeHub'>
						<h1 onClick={userTitleClickHandle}>RecipeHub</h1>
					</a>
					<br />
					<br />
					<div className='home'>
						<a href='/usercontent' title='Home'>
							<h4 onClick={userHomeHandle}>Home</h4>
						</a>
					</div>
					<div className='cata'>
						<a href='/usercontent' title='Create a Categorie'>
							<h4 onClick={userCatagoriesHandle}>Categories</h4>
						</a>
					</div>
					<hr
						style={{
							width: '100%',
							height: '2px',
							backgroundColor: 'white',
							borderWidth: '0',
							textAlign: 'left',
							color: 'white',
							marginLeft: '10px',
						}}
					/>
					<br />
					<div className='viewCategories'>
						<a href='/viewcategories' title='View All Categories'>
							View Categories
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserNav;
