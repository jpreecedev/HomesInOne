import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Heading from 'Shared/Heading'
import ActionButtonContainer from 'Shared/ActionButtonContainer'
import Button from 'Shared/Button'
import Table from 'Shared/Table'

import { getShortlists } from 'Store/actions/shortlist'

const columnMap = {
  reference: 'Reference',
  address: 'Address',
  potentialROI: 'Potential ROI'
}

const showDetails = (selectedData, history) => {
  history.push(`/shell/shortlist/analyse/${selectedData ? selectedData.id : ''}`)
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
          Easily track properties you are considering purchasing and see the potential ROI
          of each
        </Heading>
        {!shortlists && (
          <Heading variant="subheading">
            You have no shortlisted items right now, click New to get started.
          </Heading>
        )}
        {shortlists && (
          <Fragment>
            <Heading variant="subheading">
              Click on the property reference for more information.
            </Heading>
            <Table
              data={shortlists}
              columnMap={columnMap}
              rowClicked={selectedData => showDetails(selectedData, history)}
            />
          </Fragment>
        )}
        <ActionButtonContainer>
          <Button color="primary" onClick={() => showDetails(null, history)}>
            New
          </Button>
        </ActionButtonContainer>
      </Fragment>
    )
  }
}

const mapStateToProps = store => {
  return {
    shortlists: store.shortlists.all
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
