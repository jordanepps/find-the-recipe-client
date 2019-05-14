import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navigation.css';
import IngredientsContext from '../../contexts/IngredientsContext';

export default class Navigation extends Component {
	static contextType = IngredientsContext;

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isMobile: false
		};
	}

	componentDidMount = () => {
		window.addEventListener(
			'resize',
			this.throttle(this.handleWindowResize, 300)
		);
	};

	componentWillUnmount = () => {
		window.removeEventListener(
			'resize',
			this.throttle(this.handleWindowResize, 300)
		);
	};

	throttle = (fn, threshhold = 250, scope) => {
		let last, deferTimer;
		return function() {
			let context = scope || this;

			let now = +new Date(),
				args = arguments;
			if (last && now < last + threshhold) {
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function() {
					last = now;
					fn.apply(context, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	};

	handleWindowResize = () => {
		this.setState({ isMobile: window.innerWidth < 768 });
	};

	handleLogoutClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
		this.context.toggleAuthorized();
		TokenService.clearAuthToken();
	};

	renderLogoutLink = classList => {
		const { isOpen, isMobile } = this.state;

		let tab;
		if ((!isOpen && !isMobile) || isOpen) {
			tab = 0;
		} else {
			tab = -1;
		}

		return (
			<ul
				className={classList}
				aria-labelledby="menu-btn-label"
				aria-expanded={isOpen}
			>
				<li>
					<Link
						to="/favorites"
						className="nav-link"
						onClick={this.hideShowNavToggle}
						tabIndex={tab}
					>
						Favorites
					</Link>
				</li>
				<li>
					<Link
						onClick={this.handleLogoutClick}
						to="/"
						className="nav-link"
						tabIndex={tab}
					>
						Logout
					</Link>
				</li>
			</ul>
		);
	};

	renderLoginLink = classList => {
		const { isOpen, isMobile } = this.state;
		let tab;
		if ((!isOpen && !isMobile) || isOpen) {
			tab = 0;
		} else {
			tab = -1;
		}
		return (
			<ul
				className={classList}
				aria-labelledby="menu-btn-label"
				aria-expanded={isOpen}
			>
				<li>
					<Link
						to="/register"
						className="nav-link"
						onClick={this.hideShowNavToggle}
						tabIndex={tab}
					>
						Register
					</Link>
				</li>
				<li>
					<Link
						to="/login"
						className="nav-link"
						onClick={this.hideShowNavToggle}
						tabIndex={tab}
					>
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
