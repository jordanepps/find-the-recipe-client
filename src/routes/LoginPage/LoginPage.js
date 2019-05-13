import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginPage.css';

export default class LoginPage extends Component {
	state = { error: null };

	handleLoginSuccess = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/';
		history.push(destination);
	};

	handleFormSubmit = e => {
		e.preventDefault();
		this.setState({ error: null });
		const { user_name, password } = e.target;

		AuthApiService.postLogin({
			user_name: user_name.value,
			password: password.value
		})
			.then(res => {
				user_name.value = '';
				password.value = '';
				TokenService.saveAuthToken(res.authToken);
				this.handleLoginSuccess();
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	render() {
		let registrationSuccess = this.props.location.search
			? 'Registration Successful!'
			: '';

		return (
			<section className="login-container">
				<h2>Login</h2>
				<h3 className={this.state.error ? 'error' : 'success'}>
					{this.state.error || registrationSuccess}
				</h3>
				{/* <h3 className="error">{this.state.error}</h3> */}
				<form onSubmit={this.handleFormSubmit}>
					<div>
						<label htmlFor="user_name">Username:</label>
						<input
							id="user_name"
							name="user_name"
							type="text"
							autoComplete="username"
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="password"
							required
						/>
					</div>
					<div className="submit-container">
						<button type="submit">Login</button>
					</div>
				</form>
			</section>
		);
	}
}
