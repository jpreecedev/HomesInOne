import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOffers } from 'Store/actions'

import Heading from '../Heading'
import Button from '../Button'
import Text from '../Text'

const Dashboard = ({handleClick, message}) => (
  <div>
    <Heading text='Dashboard' variant='heading-1' />
    <Button color='primary' variant='raised' onClick={() => handleClick()}>
        Hello, World!
    </Button>
    { message && <Text>{ message }</Text> }
  </div>
)

const mapStateToProps = store => {
  return {
    message: store.exampleState.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(fetchOffers())
    }
  }
}

Dashboard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  message: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
