import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

const combinedReducers = combineReducers({
  checklistState: reducers.ChecklistReducer
})

export default createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
