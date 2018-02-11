import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { ExampleReducer } from './reducers'

const reducers = combineReducers({
  exampleState: ExampleReducer
})

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
