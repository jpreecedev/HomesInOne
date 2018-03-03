import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const themeStyles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const AppButton = ({ classes, children, color, variant, onClick, type = 'button' }) => (
  <Button type={type} color={color} className={classes.button} variant={variant} onClick={onClick}>
    {children}
  </Button>
)

AppButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']).isRequired,
  variant: PropTypes.oneOf(['flat', 'raised', 'fab']).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired
}

export default withStyles(themeStyles)(AppButton)
