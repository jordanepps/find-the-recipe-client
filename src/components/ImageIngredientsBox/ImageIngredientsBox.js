import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';

export default class ImageIngredientsBox extends Component {
	static contextType = IngredientsContext;

	renderImage = imageLink => {
		return <img src={imageLink} alt="" />;
	};

	renderIngredient = (ingredient, i) => {
		return (
			<p key={i}>
				{ingredient.name} {ingredient.value}%
			</p>
		);
	};

	render() {
		return (
			<div>
				{this.renderImage(this.context.imageLink)}
				<div>
					<h3>Possible Ingredients:</h3>
					{this.context.ingredients
						.filter(ingredient => ingredient.value >= 83)
						.map(this.renderIngredient)}
				</div>
			</div>
		);
	}
}
