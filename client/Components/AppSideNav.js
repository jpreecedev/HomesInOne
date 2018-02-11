import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import DashboardIcon from 'material-ui-icons/Dashboard'
import HomeIcon from 'material-ui-icons/Home'
import ListIcon from 'material-ui-icons/List'
import VisibilityIcon from 'material-ui-icons/Visibility'

import NavLink from './NavLink'
import styles from 'Styles/AppSideNav'

const themeStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing.unit
  },
  link: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    flex: '1 1 0'
  }
})

const AppSideNav = ({classes}) => (
  <div className={`${classes.root} ${styles.sidebar}`}>
    <List component='nav'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <NavLink to={'/'} className={classes.link}>
          <ListItemText primary='Dashboard' />
        </NavLink>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <NavLink to={'/properties'} className={classes.link}>
          <ListItemText primary='Properties' />
        </NavLink>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <NavLink to={'/shortlist'} className={classes.link}>
          <ListItemText primary='Shortlist' />
        </NavLink>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <NavLink to={'/checklists'} className={classes.link}>
          <ListItemText primary='Checklists' />
        </NavLink>
      </ListItem>
    </List>
  </div>
)

AppSideNav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(themeStyles)(AppSideNav)
