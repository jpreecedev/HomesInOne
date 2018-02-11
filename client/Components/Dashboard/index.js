import React from 'react'
import Heading from '../Heading'
import Button from '../Button'

import styles from 'Styles/Dashboard'

const Dashboard = () => (
  <div>
    <Heading text='Dashboard' variant='heading-1' />
    <Button color='primary' variant='raised'>
      Hello, World!
    </Button>
  </div>
)

export default Dashboard
