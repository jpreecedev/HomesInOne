import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from 'Store/actions/user'

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

const Login = ({ classes, handleSubmit, processForm }) => (
  <Container additionalStyles={classes.container} title="Hello">
    <form onSubmit={handleSubmit(processForm)}>
      <Text>Please log in with your account</Text>
      <Input id="emailAddress" label="Email Address" />
      <Input id="password" label="Password" type="password" />
      <ActionButtonContainer>
        <Button type="submit" color="primary">
          Log In
        </Button>
      </ActionButtonContainer>
    </form>
  </Container>
)

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  processForm: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: credentials => {
      dispatch(login(credentials))
    }
  }
}

export default reduxForm({
  form: 'login',
  initialValues: {
    emailAddress: 'test2@test.com',
    password: 'password123'
  }
})(withStyles(themeStyles)(connect(null, mapDispatchToProps)(Login)))
