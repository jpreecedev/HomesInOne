import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const AppButton = ({ classes, children, color, variant, onClick }) => (
  <Button color={color} className={classes.button} variant={variant} onClick={onClick}>
    {children}
  </Button>
)

AppButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['flat', 'raised', 'fab']),
  onClick: PropTypes.func
}

export default withStyles(styles)(AppButton)
