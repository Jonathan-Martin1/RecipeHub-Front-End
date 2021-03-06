import './user.css';

import React, { useState } from 'react';

import {
  Container,
  Form,
} from 'react-bootstrap';
import { useHistory } from 'react-router';

import UserNav from './userNav';

const NewRecipe = (props) => {
	const initialData = {
		recipeTitle: '',
		recipeImageURL: '',
		recipeCookTime: '',
		recipeInstructions: '',
		recipeIngredients: '',
	};
	const [formData, setFormData] = useState(initialData);
	const history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		props = formData;
		history.push('/usercontent');
	};

	const handleChange = (event) => {
		setFormData(() => {
			return {
				...formData,
				[event.target.name]: event.target.value,
			};
		});
	};

	return (
		<Container
			style={{
				display: 'flex',
				margin: 'auto',
				width: 'auto',
				justifyContent: 'center',
			}}>
			<div>
				<UserNav />
				<div className='addRecipeTitle'>
					<h1>Add A Recipe</h1>
				</div>
				<div>
					<Form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label
								htmlFor='recipeTitle'
								className='form-label'
								style={{
									color: 'black',
									display: 'flex',
									justifyContent: 'center',
								}}>
								Recipe Title
							</label>
							<input
								name='recipeTitle'
								type='text'
								className='form-control'
								id='recipeTitle'
								value={formData.recipeTitle}
								onChange={handleChange}
								required
							/>
							<label
								htmlFor='recipeImageURL'
								className='form-label'
								style={{
									color: 'black',
									display: 'flex',
									justifyContent: 'center',
								}}>
								Recipe Image Address URL
							</label>
							<input
								name='recipeImageURL'
								type='text'
								className='form-control'
								id='recipeImageURL'
								value={formData.recipeImageURL}
								onChange={handleChange}
								required
							/>
							<label
								htmlFor='recipeCookTime'
								className='form-label'
								style={{
									color: 'black',
									display: 'flex',
									justifyContent: 'center',
								}}>
								Recipe Cook Time
							</label>
							<textarea
								name='recipeCookTime'
								type='text'
								className='form-control'
								id='recipeCookTime'
								value={formData.recipeCookTime}
								onChange={handleChange}
							/>
							<label
								htmlFor='recipeIngredients'
								className='form-label'
								style={{
									color: 'black',
									display: 'flex',
									justifyContent: 'center',
								}}>
								Recipe Ingredients
							</label>
							<textarea
								name='recipeIngredients'
								type='text'
								className='form-control'
								id='recipeIngredients'
								value={formData.recipeIngredients}
								onChange={handleChange}
							/>
							<label
								htmlFor='recipeInstructions'
								className='form-label'
								style={{
									color: 'black',
									display: 'flex',
									justifyContent: 'center',
								}}>
								Recipe Instructions
							</label>
							<textarea
								name='recipeInstructions'
								type='text'
								className='form-control'
								id='recipeInstructions'
								value={formData.recipeInstructions}
								onChange={handleChange}
							/>
						</div>
						<button
							type='submit'
							className='btn btn-success'
							style={{
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: '#283349',
							}}>
							Save
						</button>
					</Form>
				</div>
			</div>
		</Container>
	);
};

export default NewRecipe;
