import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import store from './store'

import 'whatwg-fetch'
import 'typeface-roboto'
import 'Styles/global'

import { Routes as LoginRouteConfig } from './components/Login/route-config'
import Shell from './components/Shell.js'

const HomesInOne = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginRouteConfig} />
          <Route path='/shell' component={Shell} />
          <Redirect from='/' to='/shell' />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

render(<HomesInOne />, document.getElementById('root'))
