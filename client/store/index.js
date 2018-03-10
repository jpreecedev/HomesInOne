/* eslint-disable no-underscore-dangle */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import throttle from 'lodash/throttle'

import middleware from './middleware'
import reducers from './reducers'
import { localStorage } from './utils'

const combinedReducers = combineReducers(Object.assign({}, reducers, {}))
const persistedState = localStorage.loadState()

const store = createStore(
  combinedReducers,
  persistedState,
  compose(
    applyMiddleware(middleware, apiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.subscribe(
  throttle(() => {
    localStorage.saveState({
      user: store.getState().user
    })
  })
)

export default store
