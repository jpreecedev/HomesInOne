export const ChecklistActions = {
  GET_CHECKLISTS: 'GET_CHECKLISTS',
  GET_CHECKLISTS_COMPLETE: 'GET_CHECKLISTS_COMPLETE',
  TOGGLE_CHECKLIST_ITEM_COMPLETE: 'TOGGLE_CHECKLIST_ITEM_COMPLETE'
}

export function getChecklistsSuccess (checklists) {
  return {
    type: ChecklistActions.GET_CHECKLISTS_COMPLETE,
    payload: checklists
  }
}

export function toggleChecklistItemComplete (checklistItem) {
  return {
    type: ChecklistActions.TOGGLE_CHECKLIST_ITEM_COMPLETE,
    payload: checklistItem
  }
}

export const getChecklists = () => dispatch => {
  dispatch({ type: ChecklistActions.GET_CHECKLISTS })

  const request = fetch('http://localhost:3100/api/checklists')
    .then(response => {
      return response.json()
    })

  return request.then(
    response => dispatch(getChecklistsSuccess(response))
  )
}
