import React from 'react';
import ReactDOM from 'react-dom';
import RecipePage from '../routes/RecipePage/RecipePage';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<RecipePage />, div);
	ReactDOM.unmountComponentAtNode(div);
});
