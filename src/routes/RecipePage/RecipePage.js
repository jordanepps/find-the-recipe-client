import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';
import RecipeApiService from '../../services/recipe-api-service';
import './RecipePage.css';

export default class RecipePage extends Component {
	static contextType = IngredientsContext;

	state = {
		recipeEndpoint: 'http://www.edamam.com/ontologies/edamam.owl#recipe_',
		recipe: {}
	};

	componentDidMount = () => {
		const { recipeId } = this.props.match.params;
		const { recipeEndpoint } = this.state;
		const recipeLink = `${recipeEndpoint}${recipeId}`;
		const recipe = this.context.recipes.filter(
			recipe => recipe.id === recipeLink
		)[0];

		if (recipe) {
			this.setState({ recipe });
		} else {
			console.log('no');
		}
	};
	render() {
		const { name } = this.state.recipe;
		return (
			<div className="recipe-container">
				<h2>{name}</h2>
			</div>
		);
	}
}
