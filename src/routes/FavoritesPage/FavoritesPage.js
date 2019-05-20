import React, { Component } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import FavoritesApiService from '../../services/favorites-api-service';
import './FavoritesPage.css';

export default class FavoritesPage extends Component {
	state = {
		recipes: []
	};

	componentDidMount = () => {
		FavoritesApiService.getUserFavorites()
			.then(res => res.json())
			.then(recipes => this.setState({ recipes }))
			.catch(err => console.log(err));
	};

	renderRecipeCard = (recipe, i) => {
		const { recipe_name, image, id, recipe_code } = recipe;
		return (
			<RecipeCard
				key={i}
				name={recipe_name}
				image={image}
				id={id}
				recipe_code={recipe_code}
			/>
		);
	};
	render() {
		return (
			<div className="favorites-container">
				<h2>Favorites</h2>
				<div className="recipes-container">
					{this.state.recipes.map(this.renderRecipeCard)}
				</div>
			</div>
		);
	}
}
