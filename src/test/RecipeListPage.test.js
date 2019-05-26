import React from 'react';
import ReactDOM from 'react-dom';
import RecipeListPage from '../routes/RecipeListPage/RecipeListPage';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<RecipeListPage />, div);
	ReactDOM.unmountComponentAtNode(div);
});
