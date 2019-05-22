const INITIAL_STATE = {
	hasUser: true,
  userName: 'Fer',
  emotionalResults: {}
};

export default function search(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'TOGGLE_USER': {
			return {
				...state,
				hasUser: !state.hasUser,
			};
		}
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
