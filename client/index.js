import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

import 'Styles/vendor'
import 'Styles/global'

import App from './components/App.js'

const HomesInOne = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

render(<HomesInOne />, document.getElementById('root'))
