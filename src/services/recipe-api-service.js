import config from '../config';

const RecipeApiService = {
	getIngredients(imageLink) {
		return fetch(`${config.API_ENDPOINT}/ingredients?image=${imageLink}`, {
			headers: {
				'content-type': 'application/json'
			}
		});
	}
};

export default RecipeApiService;
