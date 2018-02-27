import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Heading from 'Shared/Heading'
import Table from 'Shared/Table'

const columns = ['Reference', 'Address', 'Potential ROI']
const data = [{ id: 1, reference: '3 bedroom house', address: '1 New Property Lane', potentialROI: '9.5%' }]

const rowClicked = (selectedData, history) => {
  if (selectedData) {
    history.push(`/shell/shortlist/analyse/${selectedData.id}`)
  }
}

const Shortlist = ({ history }) => {
  return (
    <Fragment>
      <Heading text="Shortlist" variant="heading-1" />
      <Heading variant="heading-2">
        Easily track properties you are considering purchasing and see the potential ROI of each
      </Heading>
      <Heading variant="subheading">Click on the property reference for more information.</Heading>
      <Table data={data} columns={columns} rowClicked={selectedData => rowClicked(selectedData, history)} />
    </Fragment>
  )
}

Shortlist.propTypes = {
  history: PropTypes.object.isRequired
}

export default Shortlist
