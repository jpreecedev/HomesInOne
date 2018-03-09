import { CALL_API } from 'redux-api-middleware'

export const UserActions = {
  USER_LOGGING_IN: 'USER_LOGGING_IN',
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  USER_LOG_IN_FAILED: 'USER_LOG_IN_FAILED',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT'
}

export const login = data => ({
  [CALL_API]: {
    types: [
      UserActions.USER_LOGGING_IN,
      UserActions.USER_LOGGED_IN,
      UserActions.USER_LOG_IN_FAILED
    ],
    endpoint: 'http://localhost:3100/token',
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }
})

export function logout() {
  return {
    type: UserActions.USER_LOGGED_OUT
  }
}
