import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IngredientsProvider } from '../../contexts/IngredientsContext';
import HomePage from '../../routes/HomePage/HomePage';
import RecipeListPage from '../../routes/RecipeListPage/RecipeListPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import RecipePage from '../../routes/RecipePage/RecipePage';
import FavoritesPage from '../../routes/FavoritesPage/FavoritesPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import './App.css';

export default class App extends Component {
	render() {
		this.componentDidMount = () => {
			console.log('mount');
		};
		return (
			<div className="App">
				<IngredientsProvider>
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<PublicOnlyRoute path="/login" component={LoginPage} />
						<PublicOnlyRoute path="/register" component={RegistrationPage} />
						<Route path="/recipe-list" component={RecipeListPage} />
						<Route path="/recipe/:recipeId" component={RecipePage} />
						<PrivateRoute path="/favorites" component={FavoritesPage} />
					</Switch>
				</IngredientsProvider>
				<Footer />
			</div>
		);
	}
}
