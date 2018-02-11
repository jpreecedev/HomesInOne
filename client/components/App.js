import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import AppHeader from './AppHeader'
import AppSideNav from './AppSideNav'
import NotFound from './NotFound'

import { Routes as DashboardRouteConfig } from './Dashboard/route-config'
import { Routes as ChecklistsRouteConfig } from './Checklists/route-config'
import { Routes as PropertiesRouteConfig } from './Properties/route-config'
import { Routes as ShortlistRouteConfig } from './Shortlist/route-config'

import styles from 'Styles/App'

const App = () => (
  <div className={styles.container}>
    <AppHeader className={styles.header} />
    <AppSideNav className={styles.nav} />
    <main className={styles.main}>
      <Switch>
        <Route path='/dashboard' component={DashboardRouteConfig} />
        <Route path='/checklists' component={ChecklistsRouteConfig} />
        <Route path='/properties' component={PropertiesRouteConfig} />
        <Route path='/shortlist' component={ShortlistRouteConfig} />
        <Route path='*' component={NotFound} />
      </Switch>
    </main>
  </div>
)

const mapStateToProps = store => {
  return {
    prop: store.exampleState.prop
  }
}

export default withRouter(connect(mapStateToProps)(App))
