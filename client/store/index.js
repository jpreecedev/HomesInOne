import { createStore, combineReducers } from 'redux'

import { ExampleReducer } from './reducers'

const reducers = combineReducers({
  exampleState: ExampleReducer
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
