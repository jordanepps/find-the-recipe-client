import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IngredientsProvider } from '../../contexts/IngredientsContext';
import HomePage from '../../routes/HomePage/HomePage';
import RecipeListPage from '../../routes/RecipeListPage/RecipeListPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import Header from '../Header/Header';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<IngredientsProvider>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<PublicOnlyRoute path="/login" component={LoginPage} />
						<PublicOnlyRoute path="/register" component={RegistrationPage} />
						<Route path="/recipe-list" component={RecipeListPage} />
					</Switch>
				</IngredientsProvider>
			</div>
		);
	}
}
