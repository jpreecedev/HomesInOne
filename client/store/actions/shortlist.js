import { CALL_API } from 'redux-api-middleware'
import { postData } from 'Store/utils'

export const ShortlistActions = {
  UPDATE: 'UPDATE',
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  GET: 'GET',
  GET_COMPLETE: 'GET_COMPLETE',
  GET_FAILURE: 'GET_FAILRE'
}

export function updateShortlist(shortlist) {
  return {
    type: ShortlistActions.UPDATE,
    payload: shortlist
  }
}

export function getShortlistSuccess(shortlists) {
  return {
    type: ShortlistActions.GET_COMPLETE,
    payload: shortlists
  }
}

export const getShortlists = data => ({
  [CALL_API]: {
    types: [ShortlistActions.GET, ShortlistActions.GET_COMPLETE, ShortlistActions.GET_FAILURE],
    endpoint: 'http://localhost:3100/api/shortlists',
    method: 'GET',
    body: JSON.stringify(data)
  }
})

export function addToShortlistSuccess(shortlist) {
  return {
    type: ShortlistActions.ADD_SUCCESS,
    payload: shortlist
  }
}

export const addToShortlist = shortlist => dispatch => {
  dispatch({ type: ShortlistActions.ADD })

  return postData('http://localhost:3100/api/shortlist', shortlist).then(response => {
    dispatch(addToShortlistSuccess(response))
  })
}
