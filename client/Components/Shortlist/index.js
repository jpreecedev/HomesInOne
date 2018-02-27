import React, { Fragment } from 'react'

import Heading from 'Shared/Heading'
import Table from 'Shared/Table'

const Shortlist = () => {
  return (
    <Fragment>
      <Heading text="Shortlist" variant="heading-1" />
      <Heading variant="heading-2">
        Easily track properties you are considering purchasing and see the potential ROI of each
      </Heading>
      <Heading variant="subheading">Click on the property reference for more information.</Heading>
      <Table />
    </Fragment>
  )
}

Shortlist.propTypes = {}

export default Shortlist
