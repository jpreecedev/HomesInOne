import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class CheckboxList extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: [0]
    }
  }

  handleToggle (value) {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked
    })
  };

  render () {
    const { classes, items } = this.props

    return (
      <div className={classes.root}>
        <List>
          {items && items.map(value => (
            <ListItem key={value.id} button onClick={() => this.handleToggle(value.id)} className={classes.listItem}>
              <Checkbox checked={this.state.checked.indexOf(value.id) !== -1} tabIndex={-1} disableRipple />
              <ListItemText primary={value.text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array
}

export default withStyles(styles)(CheckboxList)
