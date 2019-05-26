import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesPage from '../routes/FavoritesPage/FavoritesPage';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<FavoritesPage />, div);
	ReactDOM.unmountComponentAtNode(div);
});
