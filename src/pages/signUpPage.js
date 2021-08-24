import '../components/signup.css';

import React, { useState } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

import DesignAsset from '../assets/designAssets/undraw_cooking_lyxy.svg';
import Footer from '../components/footer';

const initialForm = {
  registration_id: uuid(),
  howTheyFoundRecipeHub: '',
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  password_match: '',
};

const SignUpForm = () => {
  const [registrationForm, setRegistrationForm] = useState({ ...initialForm });

  const history = useHistory();

  // It's only responsibility is handling form input changes
  const handleChange = ({ target }) => {
    setRegistrationForm({ ...registrationForm, [target.name]: target.value });
  };

  // It's only responsibility is handling the submit
  const submitHandler = (event) => {
    event.preventDefault();
    post();
  };

  const post = () => {
    if (registrationForm.email === '' || registrationForm.password.length < 8) {
      alert(
        `Email must be filled in and password must be 8 characters or more.`
      );
    } else if (
      registrationForm.email !== '' &&
      registrationForm.password === registrationForm.password_match
    ) {
      alert(`You're Email and Password Matches!`);
      const {
        registration_id,
        howTheyFoundRecipeHub,
        username,
        first_name,
        last_name,
        email,
        password,
      } = registrationForm;
      axios
        .post('http://localhost:5000/registration', {
          data: {
            registration_id: registration_id,
            howTheyFoundRecipeHub: howTheyFoundRecipeHub,
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
          },
        })
        .then((response) => {
          console.log(`statusCode: ${response.statusCode}`);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      history.push('/Login');
    } else {
      alert(`Email and Password Do Not Match!`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        padding: '10px',
        justifyContent: 'center',
      }}
    >
    <div style={{padding: '200px'}}>
      <ul>
      <li><h3>Store your recipes</h3></li>
      <h6>Take your favorite recipe from anywhere and import them to one place.</h6>
      <li><h3>Keep the recipes categorized</h3></li>
      <h6>Add your own categories to each recipe so you never lose them.</h6>
      <li><h3>Never forget your personal changes</h3></li>
      <h6>Give your recipes some notes so you never forget to tweak your ingredients.</h6>
      </ul>
    </div>
      <div className='p-3 rounded' style={{ border: '2px solid blue' }}>
        <div
          className='card-title'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <h3 className='page-title'>Sign Up Today!</h3>
        </div>
        <div>
        <img src={DesignAsset} alt='RecipeHub'/>
        </div>
        <form
          onSubmit={submitHandler}
          className='card-body'
          style={{ color: '#fff' }}
        >
          <label
            htmlFor='howTheyFoundRecipeHub'
            className='d-block'
            style={{ color: 'black' }}
          >
            How did you find out about RecipeHub?
          </label>
          <input
            name='howTheyFoundRecipeHub'
            type='text'
            id='howTheyFoundRecipeHub'
            required
            onChange={handleChange}
            value={registrationForm.howTheyFoundRecipeHub}
            style={{ width: '500px', marginBottom: '5px' }}
          />
          <label
            htmlFor='first_name'
            className='d-block'
            style={{ color: 'black' }}
          >
            First Name:
          </label>
          <input
            name='first_name'
            type='text'
            id='first_name'
            required
            onChange={handleChange}
            value={registrationForm.first_name}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label
            htmlFor='last_name'
            className='d-block'
            style={{ color: 'black' }}
          >
            Last Name:
          </label>
          <input
            name='last_name'
            type='text'
            id='last_name'
            required
            onChange={handleChange}
            value={registrationForm.last_name}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label
            htmlFor='username'
            className='d-block'
            style={{ color: 'black' }}
          >
            Username:
          </label>
          <input
            name='username'
            type='text'
            id='username'
            required
            onChange={handleChange}
            value={registrationForm.username}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='email' className='d-block' style={{ color: 'black' }}>
            Email:
          </label>
          <input
            name='email'
            type='text'
            id='email'
            required
            onChange={handleChange}
            value={registrationForm.email}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label
            htmlFor='password'
            className='d-block'
            style={{ color: 'black' }}
          >
            Password:{' '}
          </label>
          <input
            name='password'
            type='password'
            id='password'
            required
            onChange={handleChange}
            value={registrationForm.password}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label
            htmlFor='password_match'
            className='d-block'
            style={{ color: 'black' }}
          >
            Confirm password:
          </label>
          <input
            name='password_match'
            type='password'
            id='password_match'
            required
            onChange={handleChange}
            value={registrationForm.password_match}
            style={{ width: '100%' }}
          />
          <button type='submit' className='btn btn-primary mt-3'>
            Register
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUpForm;
