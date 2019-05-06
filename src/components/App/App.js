import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import RecipeListPage from '../../routes/RecipeListPage/RecipeListPage';
import './App.css';
import { IngredientsProvider } from '../../contexts/IngredientsContext';
import Header from '../Header/Header';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<IngredientsProvider>
					<Switch>
						<Route exact path={'/'} component={HomePage} />
						<Route path={'/recipe-list'} component={RecipeListPage} />
					</Switch>
				</IngredientsProvider>
			</div>
		);
	}
}
