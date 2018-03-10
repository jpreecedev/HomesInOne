import React, { Fragment } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import AppHeader from './AppHeader'

import { Routes as ShortlistRouteConfig } from './Shortlist/route-config'

import styles from 'Styles/App'

const Shell = () => (
  <Fragment>
    <AppHeader />
    <main className={styles.main}>
      <Switch>
        <Route path="/shell/shortlist" component={ShortlistRouteConfig} />
        <Redirect from="/" to="/shell/shortlist" />
      </Switch>
    </main>
  </Fragment>
)

export default withRouter(Shell)
