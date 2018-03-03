import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Container from 'Shared/Container'
import SelectList from 'Shared/SelectList'
import SelectListItem from 'Shared/SelectListItem'
import ActionButtonContainer from 'Shared/ActionButtonContainer'
import Button from 'Shared/Button'

const themeStyles = theme => ({
  container: {
    maxWidth: 500,
    paddingBottom: 0
  }
})

const FromTemplate = ({ classes, checklists }) => (
  <Container additionalStyles={classes.container} title="Create a checklist">
    <SelectList label="Select a checklist template">
      {checklists &&
        checklists.map(checklist => (
          <SelectListItem key={checklist.id} value={checklist.name} text={checklist.name} />
        ))}
    </SelectList>
    <ActionButtonContainer>
      <Button color="primary">Create Checklist</Button>
    </ActionButtonContainer>
  </Container>
)

const mapStateToProps = store => {
  return {
    checklists: store.checklistState.checklists
  }
}

FromTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  checklists: PropTypes.array
}

export default withStyles(themeStyles)(connect(mapStateToProps)(FromTemplate))
