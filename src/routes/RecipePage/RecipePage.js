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
			RecipeApiService.getSelectedRecipe(recipeLink)
				.then(res => res.json())
				.then(recipe => this.setState({ recipe }))
				.catch(err => console.log(err));
		}
	};

	renderLabels = (labelName, values) => {
		let str;
		if (values) {
			str = values.join(' ');
			return (
				<div className={`${labelName} labels`}>
					<h4>{`${labelName}:`}</h4>
					<p>{str}</p>
				</div>
			);
		}
	};

	renderIngredients = ingredients => {
		if (ingredients)
			return (
				<div className="ingredients-container">
					<h4>Ingredients:</h4>
					{ingredients.map((line, i) => (
						<p key={i} className="ingredient-line">
							{line}
						</p>
					))}
				</div>
			);
	};

	renderSource = (source, source_url) => {
		if (source)
			return (
				<div className="Source">
					<h4>Source:</h4>
					<a href={source_url} target="_blank" rel="noopener noreferrer">
						{source}
					</a>
				</div>
			);
	};

	renderServing = (servings, calories) => {
		if (servings) {
			return (
				<div className="Serving">
					<h4>Serving Size:</h4>
					<p>{servings}</p>
					<h4>Calories Per Serving:</h4>
					<p>{Math.round(calories / servings).toString()}</p>
				</div>
			);
		}
	};

	renderAddtoFavoritesBtn = isAuthorized => {
		if (isAuthorized)
			return (
				<div className="favorite-btn">
					<button>Add to Favorite</button>
				</div>
			);
	};

	render() {
		const {
			name,
			image,
			cautions,
			health_labels,
			ingredient_lines,
			servings,
			calories,
			source,
			source_url
		} = this.state.recipe;
		return (
			<div className="recipe-container">
				<h2>{name}</h2>
				{this.renderAddtoFavoritesBtn(this.context.isAuthorized)}
				<div className="image-container">
					<img src={image} alt={name} />
				</div>

				{this.renderServing(servings, calories)}
				{this.renderLabels('Cautions', cautions)}
				{this.renderLabels('Health Labels', health_labels)}
				{this.renderIngredients(ingredient_lines)}
				{this.renderSource(source, source_url)}
			</div>
		);
	}
}
