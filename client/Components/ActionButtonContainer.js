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

const Login = ({classes, children}) => (
  <div className={classes.container}>
    {children}
  </div>
)

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired
}

export default withStyles(themeStyles)(Login)
