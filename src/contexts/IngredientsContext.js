import React, { Component } from 'react';

const IngredientsContext = React.createContext({
	ingredients: [],
	error: null,
	setIngredients: () => {},
	clearIngredients: () => {},
	setError: () => {},
	clearError: () => {}
});

export default IngredientsContext;

export class IngredientsProvider extends Component {
	state = { ingredients: [], error: null };

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
			ingredients: this.state.ingredients,
			error: this.state.error,
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
