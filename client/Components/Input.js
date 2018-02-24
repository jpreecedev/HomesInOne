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

const renderInput = ({ classes, label, id, type, prefix, input }) => {
  return (
    <FormControl fullWidth className={classes.formControl} aria-describedby={`${label}-label`}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Input
        id={id}
        name={id}
        label={label}
        className={classes.textField}
        type={type}
        startAdornment={prefix && <InputAdornment position="start">{prefix}</InputAdornment>}
        {...input}
      />
    </FormControl>
  )
}

const CustomInput = ({ classes, id, label, type, prefix, defaultValue }) => {
  return (
    <Field
      name={id}
      component={props => {
        props.input.value = defaultValue
        return renderInput({ classes, label, id, type, prefix, ...props })
      }}
    />
  )
}

const sharedPropTypes = {
  classes: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.string,
  input: PropTypes.object,
  value: PropTypes.string
}

CustomInput.propTypes = renderInput.propTypes = sharedPropTypes

export default withStyles(themeStyles)(CustomInput)
