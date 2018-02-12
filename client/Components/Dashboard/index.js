import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../Heading'

const Dashboard = ({message}) => (
  <div>
    <Heading text='Dashboard' variant='heading-1' />
  </div>
)

Dashboard.propTypes = {
  message: PropTypes.array
}

export default Dashboard
