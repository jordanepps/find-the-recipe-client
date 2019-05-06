import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
	handleLogoutClick = () => {
		TokenService.clearAuthToken();
	};

	renderLogoutLink() {
		return (
			<ul id="menu">
				<li>
					<Link to="/favorites">Favorites</Link>
				</li>
				<li>
					<Link onClick={this.handleLogoutClick} to="/">
						Logout
					</Link>
				</li>
			</ul>
		);
	}

	renderLoginLink() {
		return (
			<ul id="menu">
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		);
	}

	render() {
		return (
			<header>
				<Link to="/" id="logo">
					Find The Recipe
				</Link>
				<input type="checkbox" id="menu-btn" />
				<label id="menu-icon" htmlFor="menu-btn">
					<span id="navicon" />
				</label>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</header>
		);
	}
}
