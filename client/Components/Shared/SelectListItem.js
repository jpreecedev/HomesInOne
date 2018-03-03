import React from 'react'
import PropTypes from 'prop-types'
import { MenuItem } from 'material-ui/Menu'

const SelectListItem = ({ id, value, children, label }) => (
  <MenuItem key={id} value={value}>
    {children || label}
  </MenuItem>
)

SelectListItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string
}

export default SelectListItem
