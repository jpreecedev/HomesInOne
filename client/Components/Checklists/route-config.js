import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './index'
import Details from './Details'

export const Routes = () => (
  <Switch>
    <Route path="/shell/checklists/:id/details" component={Details} />
    <Route path="/shell/checklists" component={Main} />
  </Switch>
)
