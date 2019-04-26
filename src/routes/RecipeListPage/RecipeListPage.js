import React, { Component } from 'react';
import ImageIngredientsBox from '../../components/ImageIngredientsBox/ImageIngredientsBox';
import RecipesContainer from '../../components/RecipesContainer/RecipesContainer';

export default class RecipeListPage extends Component {
	render() {
		return (
			<div>
				<h2>RecipeListPage</h2>
				<ImageIngredientsBox />
				<RecipesContainer />
			</div>
		);
	}
}
