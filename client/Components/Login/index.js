import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Container from '../Container'
import Text from '../Text'
import Input from '../Input'
import ActionButtonContainer from '../ActionButtonContainer'
import Button from '../Button'

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

const Login = ({ classes }) => (
  <Container additionalStyles={classes.container} title="Hello">
    <Text>Please log in with your account</Text>
    <Input id="emailAddress" label="Email Address" />
    <Input id="password" label="Password" type="password" />
    <ActionButtonContainer>
      <Button color="primary">Log In</Button>
    </ActionButtonContainer>
  </Container>
)

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(themeStyles)(Login)
