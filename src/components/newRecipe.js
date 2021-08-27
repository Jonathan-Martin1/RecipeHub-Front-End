import './user.css';

import React, { useState } from 'react';

import {
  Container,
  Form,
} from 'react-bootstrap';

import UserNav from './userNav';

const NewRecipe = () => {
	const initialData = {
		recipeTitle: '',
		recipeCookTime: '',
		recipeInstructions: '',
		recipeIngredients: '',
	};
	const [formData, setFormData] = useState(initialData);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleChange = (event) => {
		setFormData(() => {
			return { ...formData, [event.target.name]: event.target.value };
		});
	};

	return (
		<Container
			style={{
				display: 'flex',
				margin: 'auto',
				width: 'auto',
				padding: '10px',
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
								// required
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
							<input
								name='recipeCookTime'
								type='text'
								className='form-control'
								id='recipeCookTime'
								value={formData.recipeCookTime}
								onChange={handleChange}
								// required
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
							<input
								name='recipeIngredients'
								type='text'
								className='form-control'
								id='recipeIngredients'
								value={formData.recipeIngredients}
								onChange={handleChange}
								// required
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
							<input
								name='recipeInstructions'
								type='text'
								className='form-control'
								id='recipeInstructions'
								value={formData.recipeInstructions}
								onChange={handleChange}
								// required
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
