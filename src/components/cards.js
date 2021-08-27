import React from 'react';

import {
  Button,
  Card,
  Container,
} from 'react-bootstrap';
import { useHistory } from 'react-router';

const Cards = (props) => {
	// const recipeTitle = props.recipeTitle;
	// const recipeImageURL = props.recipeImageURL;
	const history = useHistory();

	const handleViewRecipe = (event) => {
		event.preventDefault();
		history.push('/viewrecipe');
	};

	return (
		<Container>
			<Card style={{ width: '18rem' }}>
				<Card.Img
					variant='top'
					src='https://www.theseasonedmom.com/wp-content/uploads/2018/02/The-Easiest-Burrito-Recipe-7-150x150.jpg'
				/>
				<Card.Body>
					<Card.Title>Burrito Recipe</Card.Title>
					<Button variant='primary' onClick={handleViewRecipe}>
						Go To Recipe
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Cards;
