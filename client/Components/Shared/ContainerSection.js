import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import Heading from 'Shared/Heading'

const themeStyles = theme => {
  return {
    container: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit
    }
  }
}

const ContainerSectionHeading = ({ classes, title }) => (
  <Heading className={classes.container} variant="title" color="default">
    {title}
  </Heading>
)

ContainerSectionHeading.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default withStyles(themeStyles)(ContainerSectionHeading)
