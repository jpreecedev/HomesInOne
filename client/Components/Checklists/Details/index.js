import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'

import Heading from '../../Heading'
import CheckboxListItem from '../../CheckboxListItem'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const Details = ({ classes, checklists, match }) => {
  const selectedChecklist = checklists.find(checklist => checklist.id === Number(match.params.id))
  const { name, checklistItems } = selectedChecklist

  return <div>
    <Heading text={name} variant='heading-3' />
    <List className={classes.root}>
      {checklistItems && checklistItems.map(checklistItem => (<CheckboxListItem key={checklistItem.id} checklistItem={checklistItem} />))}
    </List>
  </div>
}

const mapStateToProps = store => {
  return {
    checklists: store.checklistState.checklists
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
  checklists: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapStateToProps)(Details))
