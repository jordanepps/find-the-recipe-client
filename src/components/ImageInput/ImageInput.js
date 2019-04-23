import React, { Component } from 'react';

export default class ImageInput extends Component {
	render() {
		return (
			<div>
				<label htmlFor="image-link">Paste Image Link: </label>
				<input type="text" name="image-link" id="image-link" />
				<button>Search for recipes</button>
			</div>
		);
	}
}
