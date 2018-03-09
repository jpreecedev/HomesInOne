import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import middleware from './middleware'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

const combinedReducers = combineReducers(Object.assign({}, reducers, {}))

export default createStore(
  combinedReducers,
  compose(
    applyMiddleware(middleware, apiMiddleware, thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
