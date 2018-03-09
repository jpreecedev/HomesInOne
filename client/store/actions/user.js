import { postData } from 'Store/utils'

export const UserActions = {
  USER_LOGGING_IN: 'USER_LOGGING_IN',
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT'
}

export const login = data => dispatch => {
  dispatch({
    type: UserActions.USER_LOGGING_IN
  })

  return postData('http://localhost:3100/token', data).then(response => {
    dispatch({
      type: UserActions.USER_LOGGED_IN,
      payload: response
    })
  })
}

export function logout() {
  return {
    type: UserActions.USER_LOGGED_OUT
  }
}
