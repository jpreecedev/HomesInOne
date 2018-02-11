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
    default:
      throw new Error('Variant not recognised')
  }
}

const Heading = ({ text, variant }) => (
  <div className='border-bottom pb-2 mb-3'>
    <Typography variant={getDisplayClass(variant)} gutterBottom>
      {text}
    </Typography>
  </div>
)

Heading.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['heading-1', 'heading-2', 'heading-3', 'heading-4'])
}

export default Heading
