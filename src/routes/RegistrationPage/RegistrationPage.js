import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationPage.css';

export default class RegistrationPage extends Component {
	static defaultProps = {
		history: {
			push: () => {}
		}
	};

	state = {
		error: null,
		passwordMatchError: null
	};

	handleRegistrationSuccess = user => {
		const { history } = this.props;
		history.push('/login?success');
	};

	handleFormSubmit = e => {
		e.preventDefault();
		const { full_name, user_name, password, verify_password } = e.target;

		if (password.value !== verify_password.value) {
			return this.setState({ passwordMatchError: 'Password does not match' });
		}

		this.setState({ error: null });

		AuthApiService.postUser({
			full_name: full_name.value,
			user_name: user_name.value,
			password: password.value
		})
			.then(user => {
				full_name.value = '';
				user_name.value = '';
				password.value = '';
				verify_password.value = '';

				this.handleRegistrationSuccess();
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	renderPasswordErrorMessage = error => {
		return error ? (
			<div>
				<h3 className="error">{error}</h3>
			</div>
		) : (
			''
		);
	};

	resetPasswordError = () => {
		this.setState({ passwordMatchError: null });
	};

	render() {
		const { passwordMatchError, error } = this.state;
		return (
			<section className="registration-container">
				<h2>Register</h2>
				<h3 className="error">{error}</h3>

				<form onSubmit={this.handleFormSubmit}>
					<div>
						<label htmlFor="full_name">Full Name:</label>
						<input id="full_name" name="full_name" type="text" required />
					</div>

					<div>
						<label htmlFor="user_name">Username:</label>
						<input
							id="user_name"
							name="user_name"
							type="text"
							autoComplete="username"
							required
							onChange={this.resetPasswordError}
						/>
					</div>

					<div>
						<label htmlFor="password">Password:</label>
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="new-password"
							required
						/>
					</div>
					{this.renderPasswordErrorMessage(passwordMatchError)}
					<div>
						<label htmlFor="verify_password">Verify Password:</label>
						<input
							id="verify_password"
							name="verify_password"
							type="password"
							autoComplete="new-password"
							required
							onChange={this.resetPasswordError}
						/>
					</div>

					<div className="submit-container">
						<button type="submit">Register</button>
					</div>
				</form>
			</section>
		);
	}
}
