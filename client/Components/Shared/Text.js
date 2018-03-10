import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const Text = ({ children, paragraph = true, ...props }) => (
  <Typography variant="body1" paragraph={paragraph} {...props}>
    {children}
  </Typography>
)

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  paragraph: PropTypes.bool,
  props: PropTypes.object
}

export default Text
