import config from '../config';
import TokenService from './token-service';

const FavoritesApiService = {
	postFavorite(recipe) {
		return fetch(`${config.API_ENDPOINT}/favorites`, {
			method: 'POST',
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify({ recipe })
		}).then(res => {
			if (!res.ok) throw Error(res);
			return res;
		});
	},
	removeFavorite(recipe) {
		return fetch(`${config.API_ENDPOINT}/favorites`, {
			method: 'DELETE',
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify({ recipe })
		}).then(res => {
			if (!res.ok) throw Error(res);
			return res;
		});
	},
	getCurrentFavorite(recipe_code) {
		return fetch(
			`${config.API_ENDPOINT}/favorites?recipe_code=${encodeURIComponent(
				recipe_code
			)}`,
			{
				method: 'GET',
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
					'content-type': 'application/json'
				}
			}
		).then(res => {
			if (!res.ok) throw Error(res);
			return res;
		});
	},
	getUserFavorites() {
		return fetch(`${config.API_ENDPOINT}/favorites`, {
			method: 'GET',
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`,
				'content-type': 'application/json'
			}
		}).then(res => {
			if (!res.ok) throw Error(res);
			return res;
		});
	}
};

export default FavoritesApiService;
