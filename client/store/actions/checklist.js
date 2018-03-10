import { CALL_API } from 'redux-api-middleware'

export const ChecklistActions = {
  GET_CHECKLISTS: 'GET_CHECKLISTS',
  GET_CHECKLISTS_COMPLETE: 'GET_CHECKLISTS_COMPLETE',
  GET_CHECKLISTS_FAILED: 'GET_CHECKLISTS_FAILED',

  TOGGLE_CHECKLIST_ITEM_COMPLETE: 'TOGGLE_CHECKLIST_ITEM_COMPLETE'
}

export function getChecklistsSuccess(checklists) {
  return {
    type: ChecklistActions.GET_CHECKLISTS_COMPLETE,
    payload: checklists
  }
}

export function toggleChecklistItemComplete(checklistItem) {
  return {
    type: ChecklistActions.TOGGLE_CHECKLIST_ITEM_COMPLETE,
    payload: checklistItem
  }
}

export const getChecklists = data => ({
  [CALL_API]: {
    types: [
      ChecklistActions.GET_CHECKLISTS,
      ChecklistActions.GET_CHECKLISTS_COMPLETE,
      ChecklistActions.GET_CHECKLISTS_FAILED
    ],
    endpoint: 'http://localhost:3100/api/checklists',
    method: 'GET',
    body: JSON.stringify(data)
  }
})
