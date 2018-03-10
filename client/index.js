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

import Shell from './components/Shell'
import Login from './components/Login'
import Signup from './components/Signup'

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
            <Route path="/login" component={userIsNotAuthenticatedRedir(Login)} />
            <Route path="/signup" component={userIsNotAuthenticatedRedir(Signup)} />
            <Route path="/shell" component={userIsAuthenticatedRedir(Shell)} />
            <Redirect from="/" to="/shell" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

render(<PropertyShortlist />, document.getElementById('root'))
