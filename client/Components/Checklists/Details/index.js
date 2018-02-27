import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'

import Heading from 'Shared/Heading'
import CheckboxListItem from 'Shared/CheckboxListItem'

const themeStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const Details = ({ classes, checklists, match, history }) => {
  const selectedChecklist = checklists.find(checklist => checklist.id === Number(match.params.id))

  if (!selectedChecklist) {
    history.push('/shell/checklists')
    return null
  }

  const { name, checklistItems } = selectedChecklist

  return (
    <Fragment>
      <Heading text={name} variant="heading-1" />
      <List className={classes.root}>
        {checklistItems &&
          checklistItems.map(checklistItem => (
            <CheckboxListItem key={checklistItem.id} checklistItem={checklistItem} />
          ))}
      </List>
    </Fragment>
  )
}

const mapStateToProps = store => {
  return {
    checklists: store.checklistState.checklists
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
  checklists: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(themeStyles)(connect(mapStateToProps)(Details))
