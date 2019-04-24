import React, { Component } from 'react';
import IngredientsContext, {
	IngredientsProvider
} from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';

export default class ImageInput extends Component {
	static contextType = IngredientsContext;
	constructor(props) {
		super(props);
		this.state = {
			imageLink: ''
		};
	}

	handleImageSumbit = e => {
		e.preventDefault();
		const { imageLink } = this.state;
		RecipeApiService.getIngredients(imageLink)
			.then(res => res.json())
			.then(this.context.setIngredients)
			.catch(error => {
				console.log(error);
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
