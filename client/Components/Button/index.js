import React from 'react'
import Button from 'material-ui/Button'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const AppButton = props => {
  const { children, variant, color, classes } = props
  return (
    <Button variant={variant || 'raised'} color={color || 'primary'} className={classes.button}>
      {children}
    </Button>
  )
}

export default withStyles(styles)(AppButton)
