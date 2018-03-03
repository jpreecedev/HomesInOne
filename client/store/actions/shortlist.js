import { postData } from 'Store/utils'

export const ShortlistActions = {
  UPDATE: 'UPDATE',
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  GET: 'GET',
  GET_COMPLETE: 'GET_COMPLETE'
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

export const getShortlists = () => dispatch => {
  dispatch({ type: ShortlistActions.GET })

  const request = fetch('http://localhost:3100/api/shortlists').then(response => {
    return response.json()
  })

  return request.then(response => dispatch(getShortlistSuccess(response)))
}

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
