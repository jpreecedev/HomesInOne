import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Heading from 'Shared/Heading'
import Table from 'Shared/Table'

import { getShortlists } from 'Store/actions/shortlist'

const columnMap = {
  reference: 'Reference',
  address: 'Address',
  potentialROI: 'Potential ROI'
}

const rowClicked = (selectedData, history) => {
  if (selectedData) {
    history.push(`/shell/shortlist/analyse/${selectedData.id}`)
  }
}

class Shortlist extends Component {
  componentWillMount() {
    this.props.loadShortlists()
  }

  render() {
    const { history, shortlists } = this.props

    return (
      <Fragment>
        <Heading text="Shortlist" variant="heading-1" />
        <Heading variant="heading-2">
          Easily track properties you are considering purchasing and see the potential ROI of each
        </Heading>
        <Heading variant="subheading">
          Click on the property reference for more information.
        </Heading>
        {shortlists && (
          <Table
            data={shortlists}
            columnMap={columnMap}
            rowClicked={selectedData => rowClicked(selectedData, history)}
          />
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = store => {
  return {
    shortlists: store.shortlistState.shortlists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadShortlists: () => {
      dispatch(getShortlists())
    }
  }
}

Shortlist.propTypes = {
  history: PropTypes.object.isRequired,
  loadShortlists: PropTypes.func.isRequired,
  shortlists: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Shortlist)
