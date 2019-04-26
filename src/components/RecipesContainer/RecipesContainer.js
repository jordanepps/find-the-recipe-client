import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';
import RecipeCard from '../RecipeCard/RecipeCard';

export default class RecipesContainer extends Component {
	static contextType = IngredientsContext;

	componentDidMount = () => {
		if (this.context.ingredients.length > 0) {
			RecipeApiService.getRecipes(this.context.ingredients)
				.then(res => res.json())
				.then(recipes => {
					this.context.setRecipes(recipes);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	renderRecipeCard = (recipe, i) => {
		const { name, image } = recipe;
		return <RecipeCard key={i} name={name} image={image} />;
	};

	render() {
		return (
			<div>
				<h2>RecipesContainer</h2>
				{this.context.recipes.map(this.renderRecipeCard)}
			</div>
		);
	}
}
