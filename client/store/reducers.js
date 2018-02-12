import { ChecklistActions } from './actions/checklist'
import defaultState from './defaultState'

export const ExampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ChecklistActions.ADD_CHECKLIST_ITEM:
      state = Object.assign({}, state, {
        message: action.payload
      })
      break
  }

  return state
}
