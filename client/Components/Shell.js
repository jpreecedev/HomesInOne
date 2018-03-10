import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import AppHeader from './AppHeader'

import { Routes as ShortlistRouteConfig } from './Shortlist/route-config'

import styles from 'Styles/App'

const Shell = () => (
  <div className={styles.container}>
    <AppHeader className={styles.header} />
    <main className={styles.main}>
      <Switch>
        <Route path="/shell/shortlist" component={ShortlistRouteConfig} />
        <Redirect from="/" to="/shell/shortlist" />
      </Switch>
    </main>
  </div>
)

export default withRouter(Shell)
