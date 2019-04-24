import React, { Component } from 'react';

const IngredientsContext = React.createContext({
	imageLink: '',
	ingredients: [],
	error: null,
	setImageLink: () => {},
	setIngredients: () => {},
	clearIngredients: () => {},
	setError: () => {},
	clearError: () => {}
});

export default IngredientsContext;

export class IngredientsProvider extends Component {
	state = { imageLink: '', ingredients: [], error: null };

	setImageLink = imageLink => {
		this.setState({ imageLink });
	};

	setIngredients = ingredients => {
		this.setState({ ingredients });
	};

	clearIngredients = () => {
		this.setState({ ingredients: [] });
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
			error: this.state.error,
			setImageLink: this.setImageLink,
			setIngredients: this.setIngredients,
			clearIngredients: this.clearIngredients,
			setError: this.setError,
			clearError: this.clearError
		};
		return (
			<IngredientsContext.Provider value={value}>
				{this.props.children}
			</IngredientsContext.Provider>
		);
	}
}
