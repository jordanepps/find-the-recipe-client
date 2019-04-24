import React, { Component } from 'react';
import IngredientsContext from '../../contexts/IngredientsContext';

export default class ImageIngredientsBox extends Component {
	static contextType = IngredientsContext;

	renderImage = imageLink => {
		return <img src={imageLink} alt="" />;
	};

	render() {
		return <div>{this.renderImage(this.context.imageLink)}</div>;
	}
}
