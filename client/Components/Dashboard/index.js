import React from 'react'
import PropTypes from 'prop-types'

import Heading from 'Shared/Heading'

const Dashboard = ({ message }) => <Heading text="Dashboard" variant="heading-1" />

Dashboard.propTypes = {
  message: PropTypes.array
}

export default Dashboard
