import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Input, { InputAdornment, InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

import { Field } from 'redux-form'

const themeStyles = theme => ({
  textField: {
    width: '100%',
    marginTop: 0,
    marginBottom: theme.spacing.unit * 2
  }
})

const renderInput = ({ classes, label, id, type, prefix, suffix, input }) => {
  return (
    <FormControl fullWidth aria-describedby={`${label}-label`}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Input
        id={id}
        name={id}
        label={label}
        className={classes.textField}
        type={type}
        startAdornment={prefix && <InputAdornment position="start">{prefix}</InputAdornment>}
        endAdornment={suffix && <InputAdornment position="end">{suffix}</InputAdornment>}
        {...input}
      />
    </FormControl>
  )
}

const CustomInput = props => {
  return (
    <Field
      name={props.id}
      component={componentProps => renderInput({ ...componentProps, ...props })}
    />
  )
}

const sharedPropTypes = {
  classes: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  input: PropTypes.object
}

CustomInput.propTypes = renderInput.propTypes = sharedPropTypes

export default withStyles(themeStyles)(CustomInput)
