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
    marginTop: theme.spacing.unit
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
      <ListItem component={NavLink} to={'/dashboard'} className={classes.link} button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem component={NavLink} to={'/properties'} className={classes.link} button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='Properties' />
      </ListItem>
      <ListItem component={NavLink} to={'/shortlist'} className={classes.link} button>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary='Shortlist' />
      </ListItem>
      <ListItem component={NavLink} to={'/checklists'} className={classes.link} button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary='Checklists' />
      </ListItem>
    </List>
  </div>
)

AppSideNav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(themeStyles)(AppSideNav)
