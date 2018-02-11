import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const getDisplayClass = variant => {
  switch (variant) {
    case 'heading-1':
      return 'display1'
    case 'heading-2':
      return 'display2'
    case 'heading-3':
      return 'display3'
    case 'heading-4':
      return 'display4'
    case 'headline':
      return 'headline'
    default:
      throw new Error('Variant not recognised')
  }
}

const Heading = ({ text, children, variant, color }) => (
  <Typography variant={getDisplayClass(variant)} color={color} gutterBottom>
    {text || children}
  </Typography>
)

Heading.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf(['heading-1', 'heading-2', 'heading-3', 'heading-4', 'headline']),
  color: PropTypes.string
}

export default Heading
