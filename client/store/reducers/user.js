import { UserActions } from '../actions/user'

const initialState = {
  data: null,
  isLoading: false
}

export default function UserReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UserActions.USER_LOGGING_IN:
      return { ...initialState, isLoading: true }
    case UserActions.USER_LOGGED_IN:
      return { data: payload, isLoading: false }
    case UserActions.USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
