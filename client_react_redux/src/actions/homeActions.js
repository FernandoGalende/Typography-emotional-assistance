import { Types } from '../constants'


export const toggleUserAction = () => ({
	type: Types.TOGGLE_USER
});

export const fetchDataFulFilled = payload => ({
	type: Types.FETCH_DATA_FULFILLED,
	payload,
});

export const fetchDataRejected = payload => ({
	type: Types.FETCH_DATA_REJECTED,
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
