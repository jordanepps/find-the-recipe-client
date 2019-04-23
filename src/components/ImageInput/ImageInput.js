import React, { Component } from 'react';

export default class ImageInput extends Component {
	render() {
		return (
			<div>
				<label htmlFor="image_link">Paste Image Link: </label>
				<input type="text" name="image_link" id="image_link" />
				<button>Search for recipes</button>
			</div>
		);
	}
}
