import { CALL_API } from 'redux-api-middleware'

export const ShortlistActions = {
  UPDATE_SHORTLIST: 'UPDATE_SHORTLIST',

  ADD_TO_SHORTLIST: 'ADD_TO_SHORTLIST',
  ADD_TO_SHORTLIST_SUCCESS: 'ADD_TO_SHORTLIST_SUCCESS',
  ADD_TO_SHORTLIST_FAILURE: 'ADD_TO_SHORTLIST_FAILURE',

  GET_SHORTLIST: 'GET_SHORTLIST',
  GET_SHORTLIST_SUCCESS: 'GET_SHORTLIST_SUCCESS',
  GET_SHORTLIST_FAILURE: 'GET_SHORTLIST_FAILURE'
}

export function updateShortlist(shortlist) {
  return {
    type: ShortlistActions.UPDATE_SHORTLIST,
    payload: shortlist
  }
}

export const getShortlists = data => ({
  [CALL_API]: {
    types: [
      ShortlistActions.GET_SHORTLIST,
      ShortlistActions.GET_SHORTLIST_SUCCESS,
      ShortlistActions.GET_SHORTLIST_FAILURE
    ],
    endpoint: 'http://localhost:3100/api/shortlists',
    method: 'GET',
    body: JSON.stringify(data)
  }
})

export const addToShortlist = data => ({
  [CALL_API]: {
    types: [
      ShortlistActions.ADD_TO_SHORTLIST,
      ShortlistActions.ADD_TO_SHORTLIST_SUCCESS,
      ShortlistActions.ADD_TO_SHORTLIST_FAILURE
    ],
    endpoint: 'http://localhost:3100/api/shortlist',
    method: 'POST',
    body: JSON.stringify(data)
  }
})
