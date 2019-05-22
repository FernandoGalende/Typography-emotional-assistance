const INITIAL_STATE = {
	hasUser: true,
  userName: 'Fer',
};

export const home = (state = INITIAL_STATE, action) =>  {
	switch (action.type) {
		case 'TOGGLE_USER': {
			return {
				...state,
				hasUser: !state.hasUser,
			};
		}
		default:
			return state;
	}
}
