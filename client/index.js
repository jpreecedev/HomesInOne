import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'

import './styles/vendor.css'
import './styles/app.css'

import App from './components/App.js'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

const HomesInOne = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  )
}

render(<HomesInOne />, document.getElementById('root'))
