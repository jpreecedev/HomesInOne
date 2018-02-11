import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const Text = ({children}) => (
  <Typography variant='body1' gutterBottom>
    {children}
  </Typography>
)

Text.propTypes = {
  children: PropTypes.string.isRequired
}

export default Text
