import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import store from './store'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import 'whatwg-fetch'
import 'typeface-roboto'
import 'Styles/global'
import './global'

import { Routes as LoginRouteConfig } from './components/Login/route-config'
import Shell from './components/Shell.js'

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '1rem'
    }
  }
})

const HomesInOne = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginRouteConfig} />
            <Route path="/shell" component={Shell} />
            <Redirect from="/" to="/shell" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

render(<HomesInOne />, document.getElementById('root'))
