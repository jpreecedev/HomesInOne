import React, { Fragment } from 'react'

import Heading from 'Shared/Heading'
import Table from 'Shared/Table'

const Shortlist = () => {
  return (
    <Fragment>
      <Heading text="Shortlist" variant="heading-1" />
      <Table />
    </Fragment>
  )
}

Shortlist.propTypes = {}

export default Shortlist
