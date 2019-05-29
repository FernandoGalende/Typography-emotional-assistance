export const Types = {
	GET_WATSON_EMOTIONS: 'watson/get_watson_request',
	GET_WATSON_ERROR: 'watson/get_watson_error'
};

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

export const fetchWatson = ({ info }) => ({
	type: Types.GET_WATSON_EMOTIONS,
	payload: { info }
});

export const watsonError = error => ({
	type: Types.GET_WATSON_ERROR,
	error
});
