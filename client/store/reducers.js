import { ExampleActions } from './actions'
import defaultState from './defaultState'

export const ExampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ExampleActions.EXAMPLE_ACTION:
      state = Object.assign({}, state, {
        prop: action.payload
      })
      break
  }

  return state
}
