import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Text from '../Text'
import Container from '../Container'

const Results = ({ shortlist }) => (
  <Container title="Your results">
    <Text>
      Based on the information provided above, use the following calculations to decide if the return on investment meets or exceeds your
      expections.
    </Text>
    <Text>
      In our opinion, this is <strong>{shortlist.scoreInWords}</strong> investment
    </Text>
    <Text>
      Monthly profit: <strong>&pound;{shortlist.monthlyProfit.formatWithSeparator()}</strong>
    </Text>
    <Text>
      Annual profit: <strong>&pound;{shortlist.annualProfit.formatWithSeparator()}</strong>
    </Text>
    <Text>
      Net yield: <strong>{shortlist.netYield.toFixed(2)}%</strong>
    </Text>
    <Text>
      Return on investment: <strong>{shortlist.roi.toFixed(2)}%</strong>
    </Text>
  </Container>
)

Results.propTypes = {
  shortlist: PropTypes.object
}

const mapStateToProps = store => {
  return {
    shortlist: store.shortlistState.shortlist
  }
}

export default connect(mapStateToProps)(Results)
