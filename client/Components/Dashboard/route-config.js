import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './index'

export const Routes = () => (
  <Switch>
    <Route path='/shell/dashboard' component={Main} />
  </Switch>
)
