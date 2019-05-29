import { Types } from '../constants'

const INITIAL_STATE = {
	hasUser: true,
  userName: 'Fer',
};

export const user = (state = INITIAL_STATE, action) =>  {
	switch (action.type) {
		case Types.TOGGLE_USER: {
			return {
				...state,
				hasUser: !state.hasUser,
			};
		}
		default:
			return state;
	}
}
