import React, { Component } from 'react';

export default class RegistrationPage extends Component {
	static defaultProps = {
		history: {
			push: () => {}
		}
	};

	handleRegistrationSuccess = user => {
		const { history } = this.props;
		history.push('/login');
	};

	render() {
		return (
			<section>
				<h2>Register</h2>
			</section>
		);
	}
}
