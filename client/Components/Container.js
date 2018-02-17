import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'

import Heading from './Heading'

const themeStyles = theme => {
  return {
    container: {
      paddingTop: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingBottom: 0
    },
    root: {
      padding: 0,
      marginTop: theme.spacing.unit * 3
    }
  }
}

const Container = ({ classes, additionalStyles, title, children }) => (
  <Paper className={`${classes.root} ${additionalStyles}`} elevation={4}>
    <Heading container variant='title' color='primary'>
      {title}
    </Heading>
    <div className={classes.container}>
      {children}
    </div>
  </Paper>
)

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  additionalStyles: PropTypes.string
}

export default withStyles(themeStyles)(Container)
