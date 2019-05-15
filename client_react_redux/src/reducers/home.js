const INITIAL_STATE = {
	hasUser: true,
  userName: 'Fer',
  emotionalResults: {}
};

export default function search(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'TOGGLE_USER':
			return {
				...state,
				hasUser: !state.hasUser,
			};

		case 'UPDATE_EMOTIONAL_RESULTS':
			return {
				...state,
				emotionalResults: action.results,
			};

		default:
			return state;
	}
}
