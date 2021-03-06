import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';
import './UploadForm.css';

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

	handleExampleImage = e => {
		e.preventDefault();
		const demoImage =
			'https://clarifai.com/cms-assets/20180320212159/food-003.jpg';
		this.context.setImageLink(demoImage);
		document.getElementById('image_link').value = demoImage;
	};

	render() {
		return (
			<form onSubmit={this.handleImageSumbit}>
				<div className="form-container">
					<label htmlFor="image_link">Paste Image Link</label>
					<span className="example-container">
						or
						<button className="example" onClick={this.handleExampleImage}>
							use example image
						</button>
					</span>
					<input
						type="text"
						name="image_link"
						id="image_link"
						required
						onChange={e => this.context.setImageLink(e.target.value)}
					/>
					<p className="image-error">
						{this.context.error
							? 'Please provide another image and try again'
							: ''}
					</p>
				</div>
				<div className="submit-container">
					<button type="submit">Search for recipes</button>
				</div>
			</form>
		);
	}
}
