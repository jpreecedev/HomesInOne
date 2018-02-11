import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const themeStyles = theme => ({
  textField: {
    width: '100%'
  }
})

const Input = ({classes, id, label, type}) => (
  <TextField id={id} name={id} label={label} className={classes.textField} type={type} margin='normal' />
)

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default withStyles(themeStyles)(Input)
