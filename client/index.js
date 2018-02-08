import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import './styles/vendor.scss'
import './styles/app.css'

import App from './components/App.js'

const HomesInOne = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

render(<HomesInOne />, document.getElementById('root'))
