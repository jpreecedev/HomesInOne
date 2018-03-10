import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signup } from 'Store/actions/user'

import Container from 'Shared/Container'
import Text from 'Shared/Text'
import Input from 'Shared/Input'
import ActionButtonContainer from 'Shared/ActionButtonContainer'
import Button from 'Shared/Button'

const themeStyles = theme => ({
  container: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loginButton: {
    marginRight: 0
  }
})

const Signup = ({ classes, handleSubmit, processForm, hasAttemptedLogin }) => (
  <Container additionalStyles={classes.container} title="Sign up">
    <form onSubmit={handleSubmit(processForm)}>
      <Text>Please enter your email address and a password</Text>
      <Input id="emailAddress" label="Email Address" />
      <Input id="password" label="Password" type="password" />
      <Input id="passwordConfirm" label="Confirm Password" type="password" />
      <ActionButtonContainer>
        <Button type="submit" color="primary">
          Sign up
        </Button>
      </ActionButtonContainer>
    </form>
  </Container>
)

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  processForm: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  hasAttemptedLogin: PropTypes.bool.isRequired
}

const mapStateToProps = store => {
  return {
    hasAttemptedLogin: store.user.attempted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: credentials => {
      dispatch(signup(credentials))
    }
  }
}

export default reduxForm({
  form: 'signup'
})(
  withStyles(themeStyles)(connect(mapStateToProps, mapDispatchToProps)(Signup))
)
