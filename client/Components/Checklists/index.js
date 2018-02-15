import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Heading from '../Heading'
import CheckboxList from '../CheckboxList'

import { getChecklists } from 'Store/actions/checklist'

class Checklists extends Component {
  componentWillMount () {
    this.props.loadChecklists()
  }

  render () {
    const { checklists } = this.props

    return <div>
      <Heading text='Checklists' variant='heading-1' />
      {
        checklists && checklists.map(checklist => <CheckboxList key={checklist.id} name={checklist.name} items={checklist.checklistItems} />)
      }
    </div>
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
