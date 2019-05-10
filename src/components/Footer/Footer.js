import React, { Component } from 'react';
import clarifai from '../../img/clarifai.png';
import './Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<section>
					<div id="clarifai">
						<a
							href="https://clarifai.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={clarifai} alt="Clarifai Badge" />
						</a>
					</div>
					<div id="edamam-badge" />
				</section>
				<p>
					Designed and built by{' '}
					<a
						href="https://jordanepps.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jordan Epps
					</a>
				</p>
			</footer>
		);
	}
}
