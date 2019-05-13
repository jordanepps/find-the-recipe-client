import React, { Component } from 'react';
import ImageIngredientsBox from '../../components/ImageIngredientsBox/ImageIngredientsBox';
import RecipesContainer from '../../components/RecipesContainer/RecipesContainer';

export default class RecipeListPage extends Component {
	render() {
		return (
			<div>
				<ImageIngredientsBox history={this.props.history} />
				<RecipesContainer />
			</div>
		);
	}
}
