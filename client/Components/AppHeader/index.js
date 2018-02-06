import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    width: '100%'
  }
}

const AppHeader = (props) => {
  const { classes } = props
  return (
    <header className={classes.root}>
      Header
    </header>
  )
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppHeader)
