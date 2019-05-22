import { createSelector } from 'reselect';

const INITIAL_STATE = {
  emotionalResults: {},
  fetchStatus: ''
};

export const emotions = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'FETCH_DATA_FULFILLED': {
			return {
				...state,
				emotionalResults: action.payload,
				fetchStatus: 'success'
			};
		}
		case 'FETCH_DATA_REJECTED': {
				return {
					...state,
					fetchStatus: `failed with error: ${action.payload}`,
				};
		}
		default:
			return state;
	}
}

export const getJoyEmotion = createSelector(state => state.emotionalResults && state.emotionalResults.joy, joy => joy);