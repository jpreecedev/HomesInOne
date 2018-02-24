export const ShortlistActions = {
  UPDATE: 'UPDATE'
}

export function updateShortlist(shortlist) {
  return {
    type: ShortlistActions.UPDATE,
    payload: shortlist
  }
}
