import { ShortlistActions } from '../actions/shortlist'
import { shortlistDefaultState as defaultState } from '../state'

import { roi } from 'Store/utils'

export default function ShortlistReducer(state = defaultState, action) {
  switch (action.type) {
    case ShortlistActions.UPDATE_SHORTLIST:
      state = Object.assign({}, { shortlist: roi.getReturnOnInvestment(action.payload) })
      break
    case ShortlistActions.GET_SHORTLIST_SUCCESS:
      state = Object.assign({}, state, {
        shortlists: action.payload
      })
      break
    case ShortlistActions.ADD_TO_SHORTLIST_SUCCESS:
      state = Object.assign({}, state, {
        shortlists: action.payload
      })
      break
    default:
      return state
  }
  return state
}
