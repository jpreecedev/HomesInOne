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

const AppHeader = ({ classes, className, history }) => (
  <div className={className}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.container}>
          HomesInOne.co.uk
        </Typography>
        <Button color="inherit" onClick={() => history.push('/login')}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(withStyles(themeStyles)(AppHeader))
