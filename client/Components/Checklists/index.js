import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Text from '../Text'
import TextLink from '../TextLink'
import Heading from '../Heading'

import FromTemplate from './FromTemplate'

import { getChecklists } from 'Store/actions/checklist'

class Checklists extends Component {
  componentWillMount() {
    this.props.loadChecklists()
  }

  render() {
    const { checklists } = this.props

    return (
      <React.Fragment>
        <Heading text="Checklists" variant="heading-1" />
        {checklists &&
          checklists.map((checklist, index) => (
            <Text key={index}>
              Hello, this is some text <TextLink to={`/shell/checklists/${checklist.id}/details`} text={checklist.name} />
            </Text>
          ))}
        <FromTemplate />
      </React.Fragment>
    )
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
