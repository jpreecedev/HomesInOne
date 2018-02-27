import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './index'
import Analyse from './analyse/index'

export const Routes = () => (
  <Switch>
    <Route path="/shell/shortlist/analyse/:id" component={Analyse} />
    <Route exact path="/shell/shortlist" component={Main} />
  </Switch>
)
