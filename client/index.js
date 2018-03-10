import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import store from './store'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './auth'

import 'whatwg-fetch'
import 'typeface-roboto'
import 'Styles/global'
import './shared'

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

const PropertyShortlist = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={userIsNotAuthenticatedRedir(LoginRouteConfig)} />
            <Route path="/shell" component={userIsAuthenticatedRedir(Shell)} />
            <Redirect from="/" to="/shell" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

render(<PropertyShortlist />, document.getElementById('root'))
