import React, { Component } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import { IngredientsProvider } from '../../contexts/IngredientsContext';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<h2>HomePage</h2>
				<IngredientsProvider>
					<ImageInput />
				</IngredientsProvider>
			</div>
		);
	}
}
