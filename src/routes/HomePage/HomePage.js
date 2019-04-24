import React, { Component } from 'react';
import UploadForm from '../../components/UploadForm/UploadForm';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<h2>HomePage</h2>
				<UploadForm {...this.props} />
			</div>
		);
	}
}
