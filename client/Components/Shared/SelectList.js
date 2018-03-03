import React from 'react'
import PropTypes from 'prop-types'

import SelectListItem from 'Shared/SelectListItem'

import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

const themeStyles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    display: 'flex'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const SelectList = ({ classes, label, children }) => {
  const selectListItems = children
    ? Array.isArray(children) ? children : [children]
    : []

  if (selectListItems && selectListItems.length) {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        {
          <Select value={selectListItems[0].props.value}>
            {selectListItems &&
              selectListItems.map((selectListItem, index) => {
                return (
                  <SelectListItem key={index} value={selectListItem.props.value}>
                    {selectListItem.props.text}
                  </SelectListItem>
                )
              })}
          </Select>
        }
      </FormControl>
    )
  }

  return null
}

SelectList.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default withStyles(themeStyles)(SelectList)
