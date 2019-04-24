import React, { Component } from 'react';
import UploadForm from '../../components/UploadForm/UploadForm';
import { IngredientsProvider } from '../../contexts/IngredientsContext';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<h2>HomePage</h2>
				<IngredientsProvider>
					<UploadForm {...this.props} />
				</IngredientsProvider>
			</div>
		);
	}
}
