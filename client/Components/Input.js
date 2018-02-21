import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Input, { InputAdornment, InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

const themeStyles = theme => ({
  textField: {
    width: '100%',
    marginTop: 0,
    marginBottom: theme.spacing.unit * 2
  }
})

const TextField = ({ classes, id, label, type, prefix }) => (
  <FormControl fullWidth className={classes.formControl} aria-describedby={`${label}-label`}>
    <InputLabel id={`${label}-label`}>{label}</InputLabel>
    <Input
      id={id}
      name={id}
      label={label}
      className={classes.textField}
      type={type}
      startAdornment={prefix && <InputAdornment position="start">{prefix}</InputAdornment>}
    />
  </FormControl>
)

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  prefix: PropTypes.string
}

export default withStyles(themeStyles)(TextField)
