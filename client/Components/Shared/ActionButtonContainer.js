import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const themeStyles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * -1
  }
})

const Login = ({ classes, children }) => {
  const buttons = children ? (Array.isArray(children) ? children : [children]) : []

  return <div className={classes.container}>{buttons}</div>
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default withStyles(themeStyles)(Login)
