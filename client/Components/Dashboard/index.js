import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../Heading'

const Dashboard = ({message}) => (
  <React.Fragment>
    <Heading text='Dashboard' variant='heading-1' />
  </React.Fragment>
)

Dashboard.propTypes = {
  message: PropTypes.array
}

export default Dashboard
