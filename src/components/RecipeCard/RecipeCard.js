import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default class RecipeCard extends Component {
	render() {
		const { name, image, id, recipe_code } = this.props;
		// const toLink = id.split('_').pop();
		const toLink = recipe_code
			? recipe_code.split('_').pop()
			: id.split('_').pop();
		return (
			<div className="recipe-card">
				<Link to={`/recipe/${toLink}`}>
					<img src={image} alt={name} />
					<p>{name}</p>
				</Link>
			</div>
		);
	}
}
