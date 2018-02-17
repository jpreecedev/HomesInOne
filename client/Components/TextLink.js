import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const themeStyles = theme => ({
  textLink: {
    color: theme.palette.primary.main,
    display: 'inline-block'
  }
})

const TextLink = ({classes, to, children, text}) => (
  <Link to={to}>
    <Typography component='span' variant='body1' className={classes.textLink}>
      {children || text}
    </Typography>
  </Link>
)

TextLink.propTypes = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
  text: PropTypes.string
}

export default withStyles(themeStyles)(TextLink)
