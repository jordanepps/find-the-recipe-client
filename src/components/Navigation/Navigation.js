import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navigation.css';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	handleLogoutClick = () => {
		TokenService.clearAuthToken();
	};

	renderLogoutLink = classList => {
		return (
			<ul
				className={classList}
				aria-labelledby="menu-btn-label"
				aria-expanded={this.state.isOpen}
			>
				<li>
					<Link to="/favorites" className="nav-link">
						Favorites
					</Link>
				</li>
				<li>
					<Link onClick={this.handleLogoutClick} to="/" className="nav-link">
						Logout
					</Link>
				</li>
			</ul>
		);
	};

	renderLoginLink = classList => {
		return (
			<ul
				className={classList}
				aria-labelledby="menu-btn-label"
				aria-expanded={this.state.isOpen}
			>
				<li>
					<Link to="/register" className="nav-link">
						Register
					</Link>
				</li>
				<li>
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
			</ul>
		);
	};
	hideShowNavToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		const buttonClassList = this.state.isOpen
			? 'nav-icon menu-open'
			: 'nav-icon';
		const linkClassList = this.state.isOpen ? 'menu show-nav' : 'menu';

		return (
			<Fragment>
				<button
					className="menu-icon"
					aria-controls="menu-btn"
					onClick={this.hideShowNavToggle}
				>
					<span className={buttonClassList} />
				</button>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink(linkClassList)
					: this.renderLoginLink(linkClassList)}
			</Fragment>
		);
	}
}
