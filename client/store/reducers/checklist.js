import { ChecklistActions } from '../actions/checklist'

const defaultState = {
  checklists: []
}

const toggleChecklistItem = (checklists, payload) => {
  return checklists.map(checklist => {
    if (checklist.id !== payload.checklistId) {
      return checklist
    }

    const updatedChecklist = Object.assign({}, checklist)
    updatedChecklist.checklistItems = updatedChecklist.checklistItems.map(checklistItem => {
      if (checklistItem.id !== payload.id) {
        return checklistItem
      }
      return Object.assign({}, checklistItem, {
        complete: !checklistItem.complete
      })
    })

    return updatedChecklist
  })
}

export const ChecklistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ChecklistActions.GET_CHECKLISTS_COMPLETE:
      state = Object.assign({}, state, {
        checklists: action.payload
      })
      break
    case ChecklistActions.TOGGLE_CHECKLIST_ITEM_COMPLETE:
      state = Object.assign({}, state, {
        checklists: toggleChecklistItem(state.checklists, action.payload)
      })
      break
  }

  return state
}
