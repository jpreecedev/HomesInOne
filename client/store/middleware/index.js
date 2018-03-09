import { CALL_API } from 'redux-api-middleware'

export default store => next => action => {
  const callApi = action[CALL_API]

  if (callApi) {
    const state = store.getState()
    if (state.user && state.user.data) {
      callApi.headers = Object.assign({}, callApi.headers, {
        Authorization: `Bearer ${state.user.data.token}`,
        'Content-Type': 'application/json'
      })
    }
  }

  // Pass the FSA to the next action.
  return next(action)
}
