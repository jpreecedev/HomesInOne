import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const Text = ({ children }) => (
  <Typography variant="body1" paragraph>
    {children}
  </Typography>
)

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Text
