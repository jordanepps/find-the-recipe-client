import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import './ImageIngredientsBox.css';

export default class ImageIngredientsBox extends Component {
	static contextType = IngredientsContext;

	componentWillMount() {
		if (
			this.context.ingredients.length === 0 &&
			this.context.imageLink === ''
		) {
			if (this.props.history) this.props.history.push('/');
		}
	}

	renderImage = imageLink => {
		return <img className="food-image" src={imageLink} alt="" />;
	};

	renderIngredients = ingredients => {
		let str = ingredients
			.map(ingredient => `${ingredient.name} (${ingredient.value}%)`)
			.join(', ');

		return str;
	};

	render() {
		return (
			<div className="ingredient-container">
				<div>{this.renderImage(this.context.imageLink)}</div>
				<div className="ingredients">
					<h3>Possible ingredients are...</h3>
					<p>{this.renderIngredients(this.context.ingredients)}</p>
				</div>
			</div>
		);
	}
}
