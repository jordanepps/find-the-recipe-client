import React, { Component } from 'react';

const IngredientsContext = React.createContext({
	imageLink: '',
	ingredients: [],
	recipes: [],
	error: null,
	isAuthorized: false,
	setImageLink: () => {},
	setIngredients: () => {},
	setRecipes: () => {},
	clearRecipes: () => {},
	clearIngredients: () => {},
	setError: () => {},
	clearError: () => {}
});

export default IngredientsContext;

export class IngredientsProvider extends Component {
	state = {
		imageLink: '',
		ingredients: [],
		recipes: [],
		error: null,
		isAuthorized: false
	};

	toggleAuthorized = isAuthorized => {
		this.setState({ isAuthorized });
	};

	setImageLink = imageLink => {
		this.setState({ imageLink });
	};

	setIngredients = ingredients => {
		this.setState({ ingredients });
	};

	clearIngredients = () => {
		this.setState({ ingredients: [] });
	};

	setRecipes = recipes => {
		this.setState({ recipes });
	};

	clearRecipes = () => {
		this.setState({ recipes: [] });
	};

	setError = error => {
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	render() {
		const value = {
			imageLink: this.state.imageLink,
			ingredients: this.state.ingredients,
			recipes: this.state.recipes,
			error: this.state.error,
			setImageLink: this.setImageLink,
			setIngredients: this.setIngredients,
			clearIngredients: this.clearIngredients,
			setRecipes: this.setRecipes,
			clearRecipes: this.clearRecipes,
			setError: this.setError,
			clearError: this.clearError,
			toggleAuthorized: this.toggleAuthorized,
			isAuthorized: this.state.isAuthorized
		};
		return (
			<IngredientsContext.Provider value={value}>
				{this.props.children}
			</IngredientsContext.Provider>
		);
	}
}
