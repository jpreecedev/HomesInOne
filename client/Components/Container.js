import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'

const themeStyles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const Container = ({ classes, additionalStyles, children }) => {
  return (
    <Paper className={`${classes.root} ${additionalStyles}`} elevation={4}>
      {children}
    </Paper>
  )
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  additionalStyles: PropTypes.string
}

export default withStyles(themeStyles)(Container)
