import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

const themeStyles = theme => ({
  root: {
    flexGrow: 1
  }
})

const FlexibleBoxGrid = ({ classes, children }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      {children}
    </Grid>
  </div>
)

FlexibleBoxGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default withStyles(themeStyles)(FlexibleBoxGrid)
