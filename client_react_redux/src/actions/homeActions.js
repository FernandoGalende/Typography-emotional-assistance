export const toggleUserAction = () => ({
	type: 'TOGGLE_USER'
});

export const fetchDataFulFilled = payload => ({
	type: 'FETCH_DATA_FULFILLED',
	payload,
});

export const fetchDataRejected = payload => ({
	type: 'FETCH_DATA_REJECTED',
	payload
})

export const fetchWatson = payload => {

	return dispatch => {
		const BASE_URL = process.env.REACT_APP_API_BASEURL;

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
				dispatch(fetchDataFulFilled(results));
			})
			.catch((error) => {
				dispatch(fetchDataRejected(error));
			});
	};
};
