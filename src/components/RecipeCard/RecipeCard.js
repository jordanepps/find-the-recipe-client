import React, { Component } from 'react';

export default class RecipeCard extends Component {
	render() {
		const { name, image } = this.props;
		return (
			<div>
				<img src={image} alt={name} />
				<p>{name}</p>
			</div>
		);
	}
}
