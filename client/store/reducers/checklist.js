import { ChecklistActions } from '../actions/checklist'
import defaultState from '../defaultState'

export const ChecklistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ChecklistActions.GET_CHECKLISTS_COMPLETE:
      state = Object.assign({}, state, {
        checklists: action.payload
      })
      break
    case ChecklistActions.TOGGLE_CHECKLIST_ITEM_COMPLETE:
      action.payload.complete = !action.payload.complete // TODO
      break
  }

  return state
}
