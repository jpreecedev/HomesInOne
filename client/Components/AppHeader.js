import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'Shared/Button'

const themeStyles = theme => ({
  container: {
    flex: 1
  }
})

const AppHeader = ({ classes, history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.container}>
        Property Shortlist
      </Typography>
      <Button color="inherit" variant="flat" onClick={() => history.push('/login')}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
)

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(withStyles(themeStyles)(AppHeader))
