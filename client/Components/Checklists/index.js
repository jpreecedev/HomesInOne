import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Heading from '../Heading'

import { getChecklists } from 'Store/actions/checklist'

class Checklists extends Component {
  componentWillMount () {
    this.props.loadChecklists()
  }

  render () {
    const { checklists } = this.props

    return <React.Fragment>
      <Heading text='Checklists' variant='heading-1' />
      {
        checklists && checklists.map((checklist, index) =>
          <Link key={index} to={`/shell/checklists/${checklist.id}/details`}>
            {checklist.name}
          </Link>
        )
      }
    </React.Fragment>
  }
}

const mapStateToProps = store => {
  return {
    checklists: store.checklistState.checklists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadChecklists: () => {
      dispatch(getChecklists())
    }
  }
}

Checklists.propTypes = {
  loadChecklists: PropTypes.func.isRequired,
  checklists: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklists)
