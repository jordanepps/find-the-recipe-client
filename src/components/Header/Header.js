import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<header>
				<Link to="/" className="heading">
					Find The Recipe
				</Link>
				<Navigation />
			</header>
		);
	}
}
