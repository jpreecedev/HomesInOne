import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const themeStyles = theme => ({
  heading: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  lighter: {
    fontWeight: 300
  },
  pageTitle: {
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
    fontWeight: 700
  }
})

const getDisplayClass = variant => {
  switch (variant) {
    case 'heading-1':
      return {
        className: 'display1',
        tag: 'h1'
      }
    case 'heading-2':
      return {
        className: 'display2',
        tag: 'h1'
      }
    case 'heading-3':
      return {
        className: 'display3',
        tag: 'h1'
      }
    case 'heading-4':
      return {
        className: 'display4',
        tag: 'h1'
      }
    case 'headline':
      return {
        className: 'headline',
        tag: 'h2'
      }
    case 'title':
      return {
        className: 'title',
        tag: 'h2'
      }
    case 'subheading':
      return {
        className: 'subheading',
        tag: 'h3'
      }
    default:
      throw new Error('Variant not recognised')
  }
}

const Heading = ({ classes, text, children, variant, color, className, container }) => {
  const displayClass = getDisplayClass(variant)
  const classNames = classnames(
    className,
    { [classes.lighter]: displayClass.className === 'display2' },
    { [classes.pageTitle]: displayClass.className === 'display1' }
  )

  return (
    <Typography
      className={`${container && classes.heading} ${classNames}`}
      variant={displayClass.className}
      component={displayClass.tag}
      color={color}
      gutterBottom={!container}
    >
      {text || children}
    </Typography>
  )
}

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf([
    'heading-1',
    'heading-2',
    'heading-3',
    'heading-4',
    'headline',
    'title',
    'subheading'
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.bool
}

export default withStyles(themeStyles)(Heading)
