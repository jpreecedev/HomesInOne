import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const Text = ({ children, paragraph = true }) => (
  <Typography variant="body1" paragraph={paragraph}>
    {children}
  </Typography>
)

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  paragraph: PropTypes.bool
}

export default Text
