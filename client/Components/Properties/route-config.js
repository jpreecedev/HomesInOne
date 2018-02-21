import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './index'

export const Routes = () => (
  <Switch>
    <Route exact path="/shell/properties" component={Main} />
  </Switch>
)
