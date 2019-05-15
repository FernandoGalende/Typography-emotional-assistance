const INITIAL_STATE = {
  hasUser: false,
  userName: 'Fer'
}

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_USER':
      return {
        ...state,
        hasUser: !state.hasUser
      }

    default:
      return state
  }
}