import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';

export default class UploadForm extends Component {
	static contextType = IngredientsContext;
	constructor(props) {
		super(props);
		this.state = {
			imageLink: ''
		};
	}

	handleImageSumbit = e => {
		e.preventDefault();
		this.context.clearError();
		const { imageLink } = this.state;
		RecipeApiService.getIngredients(imageLink)
			.then(res => res.json())
			.then(this.context.setIngredients)
			.catch(err => {
				this.context.setError(err);
				this.context.clearIngredients();
			});
	};

	updateImageLink = imageLink => {
		this.setState({ imageLink });
	};

	render() {
		return (
			<form onSubmit={this.handleImageSumbit}>
				<label htmlFor="image_link">Paste Image Link: </label>
				<input
					type="text"
					name="image_link"
					id="image_link"
					onChange={e => this.updateImageLink(e.target.value)}
				/>
				<button type="submit">Search for recipes</button>
			</form>
		);
	}
}
