import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'

import Heading from './Heading'
import CheckboxListItem from './CheckboxListItem'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const CheckboxList = ({ classes, name, items }) => {
  return (
    <div className={classes.root}>
      <Heading variant='headline' text={name} />
      <List>
        {items && items.map(checklistItem => (<CheckboxListItem key={checklistItem.id} checklistItem={checklistItem} />))}
      </List>
    </div>
  )
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array
}

export default withStyles(styles)(CheckboxList)
