import React, { Component } from 'react';
import UploadForm from '../../components/UploadForm/UploadForm';
import './HomePage.css';
import burger from '../../img/burger.png';
export default class HomePage extends Component {
	render() {
		return (
			<div className="page-section">
				<img className="home-image" src={burger} alt="cheese burger" />

				<div>
					<div className="headline-container">
						<h2 className="heading">
							Search for meals <br />
							using AI
						</h2>

						<p>
							Submit an image that contains food and the Clarifai API will use
							artificial intelligence to determine possible matching
							ingredients. The ingredients are then sent to the Edamam API and
							recipes with ingredients most likely matching the image will be
							displayed in order.
						</p>
					</div>
				</div>

				<UploadForm {...this.props} />
			</div>
		);
	}
}
