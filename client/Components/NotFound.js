import React, { Fragment } from 'react'
import Heading from 'Shared/Heading'
import Text from 'Shared/Text'

const NotFound = () => (
  <Fragment>
    <Heading text="Page not found. 404." variant="heading-1" />
    <Text>Sorry we could not find that page</Text>
  </Fragment>
)

export default NotFound
