import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>App</h1>
				<Switch>
					<Route exact path={'/'} component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default App;
