import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Text from 'Shared/Text'

const Results = ({ shortlist }) => {
  if (!(shortlist && shortlist.scoreInWords)) {
    return <Text paragraph={false}>Your investment score will appear here</Text>
  }

  return (
    <Fragment>
      <Text>
        Based on the information provided above, use the following calculations to decide
        if the return on investment meets or exceeds your expections.
      </Text>
      <Text>
        In our opinion, this is <strong>{shortlist.scoreInWords}</strong> investment
      </Text>
      <Text>
        Monthly profit:{' '}
        <strong>&pound;{shortlist.monthlyProfit.formatWithSeparator()}</strong>
      </Text>
      <Text>
        Annual profit:{' '}
        <strong>&pound;{shortlist.annualProfit.formatWithSeparator()}</strong>
      </Text>
      <Text>
        Net yield: <strong>{shortlist.netYield.toFixed(2)}%</strong>
      </Text>
      <Text>
        Return on investment: <strong>{shortlist.potentialROI.toFixed(2)}%</strong>
      </Text>
    </Fragment>
  )
}

Results.propTypes = {
  shortlist: PropTypes.object
}

export default Results
