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
    return <div>
      <Heading text='Checklists' variant='heading-1' />
      <CheckboxList items={this.props.message} />
    </div>
  }
}

const mapStateToProps = store => {
  return {
    message: store.exampleState.message
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
  message: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklists)
