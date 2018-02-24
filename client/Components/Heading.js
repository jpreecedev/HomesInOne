import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const themeStyles = theme => ({
  heading: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  }
})

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
    case 'title':
      return 'title'
    default:
      throw new Error('Variant not recognised')
  }
}

const Heading = ({ classes, text, children, variant, color, className, container }) => (
  <header>
    <Typography className={container && classes.heading} variant={getDisplayClass(variant)} color={color} gutterBottom={!container}>
      {text || children}
    </Typography>
  </header>
)

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf(['heading-1', 'heading-2', 'heading-3', 'heading-4', 'headline', 'title']),
  color: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.bool
}

export default withStyles(themeStyles)(Heading)
