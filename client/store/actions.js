export const ExampleActions = {
  EXAMPLE_ACTION: 'EXAMPLE_ACTION',
  FETCH_OFFERS: 'FETCH_OFFERS',
  FETCH_OFFERS_SUCCESS: 'FETCH_OFFERS_SUCCESS'
}

export const exampleAction = value => {
  return {
    type: ExampleActions.EXAMPLE_ACTION,
    payload: value
  }
}

export function fetchOffersSuccess (offers) {
  return {
    type: ExampleActions.FETCH_OFFERS_SUCCESS,
    payload: offers
  }
}

export const fetchOffers = () => dispatch => {
  dispatch({ type: ExampleActions.FETCH_OFFERS })

  const request = fetch('http://localhost:3001/api')
    .then(response => {
      return response.json()
    })

  return request.then(
    response => dispatch(fetchOffersSuccess(response))
  )
}
