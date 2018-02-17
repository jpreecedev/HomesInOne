import React from 'react'
import Heading from './Heading'
import Text from './Text'

const NotFound = () => (
  <React.Fragment>
    <Heading text='Page not found. 404.' variant='heading-1' />
    <Text>
      Sorry we could not find that page
    </Text>
  </React.Fragment>
)

export default NotFound
