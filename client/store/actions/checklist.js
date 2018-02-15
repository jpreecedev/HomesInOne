export const ChecklistActions = {
  CREATE_CHECKLIST: 'CREATE_CHECKLIST',
  GET_CHECKLISTS: 'GET_CHECKLISTS',
  ADD_CHECKLIST_ITEM: 'ADD_CHECKLIST_ITEM'
}

export function getChecklistsSuccess (checklistItem) {
  return {
    type: ChecklistActions.ADD_CHECKLIST_ITEM,
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
