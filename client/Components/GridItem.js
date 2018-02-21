import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'

const FlexibleGridItem = ({ children, xs = 12, sm = 12, md = 6, lg = 6, xl = 6 }) => (
  <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    {children}
  </Grid>
)

FlexibleGridItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  xs: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}

export default FlexibleGridItem
