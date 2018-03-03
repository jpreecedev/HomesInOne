import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

import { toggleChecklistItemComplete } from 'Store/actions/checklist'

class CheckboxListItem extends Component {
  componentWillMount() {
    this.setState({
      checked: false
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checklistItem.complete
    })
  }

  render() {
    const { checklistItem, toggleChecklistItem } = this.props

    return (
      <ListItem
        key={checklistItem.id}
        button
        onClick={() => toggleChecklistItem(checklistItem)}
      >
        <Checkbox checked={this.state.checked} tabIndex={-1} disableRipple />
        <ListItemText primary={checklistItem.name} />
      </ListItem>
    )
  }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    toggleChecklistItem: checklistItem => {
      dispatch(toggleChecklistItemComplete(checklistItem))
    }
  }
}

CheckboxListItem.propTypes = {
  checklistItem: PropTypes.object.isRequired,
  toggleChecklistItem: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxListItem)
