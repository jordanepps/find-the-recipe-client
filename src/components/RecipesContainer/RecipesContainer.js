import React, { Component, Fragment } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesContainer.css';

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
		const { name, image, id } = recipe;
		return <RecipeCard key={i} name={name} image={image} id={id} />;
	};

	render() {
		return (
			<Fragment>
				<h2 className="recipe-title">Possible recipes</h2>
				<div className="recipes-container">
					{this.context.recipes.map(this.renderRecipeCard)}
				</div>
			</Fragment>
		);
	}
}
