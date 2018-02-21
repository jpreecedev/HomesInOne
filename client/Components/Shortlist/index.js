import React from 'react'

import Heading from '../Heading'
import Text from '../Text'
import Container from '../Container'
import Input from '../Input'
import Grid from '../Grid'
import GridItem from '../GridItem'

const Shortlist = () => (
  <React.Fragment>
    <Heading text="Shortlist" variant="heading-1" />
    <Text>
      Work out the potential Return on investment (ROI) so you can compare with other investment opportunities
    </Text>
    <Grid>
      <GridItem>
        <Container title="Purchase financials">
          <Input id="reference" label="Reference" />
          <Input id="address1" label="First line of address" />
          <Input id="purchasePrice" label="Purchase price" />
          <Input id="deposit" label="Deposit" prefix="£" />
          <Input id="refurbFees" label="Refurbishment, fees, furnishings and other costs" />
        </Container>
      </GridItem>
    </Grid>
  </React.Fragment>
)

export default Shortlist
