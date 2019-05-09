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
							Search for meals <br />using AI
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
							in massa tempor nec feugiat nisl pretium fusce id. Sed enim ut sem
							viverra aliquet eget sit. Aliquam sem fringilla ut morbi tincidunt
							augue. Interdum velit laoreet id donec ultrices tincidunt.
						</p>
					</div>
				</div>

				<UploadForm {...this.props} />
			</div>
		);
	}
}
