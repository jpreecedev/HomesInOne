import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

import Heading from './Heading'
import { toggleChecklistItemComplete } from 'Store/actions/checklist'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const CheckboxList = ({ classes, name, items, toggleChecklistItem }) => {
  return (
    <div className={classes.root}>
      <Heading variant='headline' text={name} />
      <List>
        {items && items.map(value => (
          <ListItem key={value.id} button onClick={() => toggleChecklistItem(value)} className={classes.listItem}>
            <Checkbox checked={value.completed} tabIndex={-1} disableRipple />
            <ListItemText primary={value.name} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = store => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleChecklistItem: checklistItem => {
      dispatch(toggleChecklistItemComplete(checklistItem))
    }
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array,
  toggleChecklistItem: PropTypes.func
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CheckboxList))
