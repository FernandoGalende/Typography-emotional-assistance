export const toggleUserAction = () => ({
	type: 'TOGGLE_USER',
});

export const updateEmotionalResults = (results) => ({
	type: 'UPDATE_EMOTIONAL_RESULTS',
	results,
});

export const fetchWatson = payload => {
	return (dispatch, getState) => {
		const BASE_URL = process.env.REACT_APP_API_BASEURL;
		console.log('getState: ', getState())

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(payload),
		};

		return fetch(`${BASE_URL}/watson`, options)
			.then((res) => res.json())
			.then((results) => {
				console.log('sucessful fetch',results)
				dispatch(updateEmotionalResults(results));

			})
			.catch((error) => console.error(`Fetch error: ${error}`));
	};
};
