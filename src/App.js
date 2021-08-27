import './components/App.css';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { curRentState } from './assets/pageTitles';
import HomeNav from './components/homeNav';
import HomePageContent from './components/homePageContent';
import NewRecipe from './components/newRecipe';
import ContactForm from './pages/contactPage';
import Login from './pages/loginPage';
import SignUpForm from './pages/signUpPage';
import UserContent from './pages/userContent';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	//eslint-disable-next-line
	const [currentState, setCurrentStat] = useState({ ...curRentState });
	return (
		<Router>
			<Switch>
				<Route
					path='/'
					exact
					render={() => (
						<div>
							<HomeNav />
							<HomePageContent
								title={currentState.home.title}
								text={currentState.home.text}
							/>
						</div>
					)}
				/>
				<Route path='/contact' render={() => <ContactForm />} />
				<Route
					path='/signup'
					render={() => (
						<div>
							<HomeNav />
							<SignUpForm title={currentState.signup.title} />
						</div>
					)}
				/>
				<Route
					path='/login'
					render={() => (
						<div>
							<HomeNav />
							<Login
								title={currentState.login.title}
								setLoggedIn={setLoggedIn}
								loggedIn={loggedIn}
							/>
						</div>
					)}
				/>
				<Route
					path='/usercontent'
					render={() => (
						<div>
							<UserContent setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
						</div>
					)}
				/>
				<Route
					path='/newrecipe'
					render={() => (
						<div>
							<NewRecipe />
						</div>
					)}
				/>
				<Route>
					<HomeNav />
					<h1>404 Not Found</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
