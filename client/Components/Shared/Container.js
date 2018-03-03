import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'

import Heading from 'Shared/Heading'

const themeStyles = theme => {
  return {
    container: {
      padding: theme.spacing.unit * 2
    },
    root: {
      padding: 0,
      marginTop: theme.spacing.unit * 3
    }
  }
}

const Container = ({ classes, additionalStyles, title, children }) => (
  <Paper component="section" className={`${classes.root} ${additionalStyles}`} elevation={4}>
    <Heading container variant="title" color="primary">
      {title}
    </Heading>
    <div className={classes.container}>{children}</div>
  </Paper>
)

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  additionalStyles: PropTypes.string
}

export default withStyles(themeStyles)(Container)
