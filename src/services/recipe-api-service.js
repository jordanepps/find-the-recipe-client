import config from '../config';

const RecipeApiService = {
	getIngredients(imageLink) {
		//TODO:throw error with bad link
		return fetch(`${config.API_ENDPOINT}/ingredients?image=${imageLink}`, {
			headers: {
				'content-type': 'application/json'
			}
		}).then(res => {
			if (!res.ok) throw Error(res);
			return res;
		});
	}
};

export default RecipeApiService;
