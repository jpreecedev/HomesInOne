import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import AppHeader from './AppHeader'
import AppSideNav from './AppSideNav'

import { Routes as DashboardRouteConfig } from './Dashboard/route-config'
import { Routes as ChecklistsRouteConfig } from './Checklists/route-config'
import { Routes as PropertiesRouteConfig } from './Properties/route-config'
import { Routes as ShortlistRouteConfig } from './Shortlist/route-config'

import styles from 'Styles/App'

const Shell = () => (
  <div className={styles.container}>
    <AppHeader className={styles.header} />
    <AppSideNav className={styles.nav} />
    <main className={styles.main}>
      <Switch>
        <Route path='/shell/dashboard' component={DashboardRouteConfig} />
        <Route path='/shell/checklists' component={ChecklistsRouteConfig} />
        <Route path='/shell/properties' component={PropertiesRouteConfig} />
        <Route path='/shell/shortlist' component={ShortlistRouteConfig} />
        <Redirect from='/' to='/shell/dashboard' />
      </Switch>
    </main>
  </div>
)

export default withRouter(Shell)
