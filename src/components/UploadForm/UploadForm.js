import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';

export default class UploadForm extends Component {
	static contextType = IngredientsContext;

	handleImageSumbit = e => {
		e.preventDefault();
		this.context.clearError();
		const { imageLink } = this.context;
		RecipeApiService.getIngredients(imageLink)
			.then(res => res.json())
			.then(ingredients => {
				this.context.setIngredients(ingredients);
				this.props.history.push('/recipe-list');
			})
			.catch(err => {
				this.context.setError(err);
				this.context.clearIngredients();
			});
	};

	render() {
		return (
			<form onSubmit={this.handleImageSumbit}>
				<label htmlFor="image_link">Paste Image Link: </label>
				<input
					type="text"
					name="image_link"
					id="image_link"
					onChange={e => this.context.setImageLink(e.target.value)}
				/>
				<button type="submit">Search for recipes</button>
			</form>
		);
	}
}
