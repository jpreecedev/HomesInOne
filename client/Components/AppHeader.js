import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from './Button'

const styles = {
  flex: {
    flex: 1
  }
}

const AppHeader = ({ classes, className }) => {
  return (
    <div className={className}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}>
              HomesInOne.co.uk
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
}

export default withStyles(styles)(AppHeader)
