import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { updateShortlist } from 'Store/actions/shortlist'
import { shortlistDefaultState as defaultState } from 'Store/state'

import Heading from 'Shared/Heading'
import Text from 'Shared/Text'
import Container from 'Shared/Container'
import ContainerSection from 'Shared/ContainerSection'
import Input from 'Shared/Input'
import Grid from 'Shared/Grid'
import GridItem from 'Shared/GridItem'

import Results from './results'
import validate from './validate'

class Analyse extends Component {
  componentWillMount() {
    this.props.processForm(this.props.shortlist)
  }

  render() {
    const { handleSubmit, processForm, shortlist } = this.props

    return (
      <form onSubmit={handleSubmit(processForm)}>
        <Heading text="Shortlist" variant="heading-1" />
        <Text>
          Work out the potential Return on investment (ROI) so you can compare with other investment opportunities
        </Text>
        <Grid>
          <GridItem>
            <Container title="Purchase financials">
              <Input id="reference" label="Reference" />
              <Input id="address" label="First line of address" />
              <Input id="pricePaid" label="Purchase price" type="number" prefix="£" />
              <Input id="deposit" label="Deposit" prefix="£" type="number" />
              <Input id="fees" label="Refurbishment &amp; fees" type="number" prefix="£" />

              <ContainerSection title="Rental" />
              <Input id="lettableUnits" label="Lettable units" type="number" />
              <Input id="expectedRentalIncome" label="Rental income per unit" type="number" prefix="£" />

              <ContainerSection title="On-going costs" />
              <Input id="mortgageInterestRate" label="Mortgage interest rate" type="number" suffix="%" />
              <Input id="managementCost" label="Management cost (Monthly)" type="number" suffix="%" />
              <Input id="repairsContingency" label="Repairs contingency" type="number" suffix="%" />
              <Input id="serviceCharge" label="Service charge and ground rent (Annual)" type="number" prefix="£" />
              <Input id="insurance" label="Insurance (Annual)" prefix="£" type="number" />
            </Container>
          </GridItem>
          <GridItem>
            <Results shortlist={shortlist} />
          </GridItem>
        </Grid>
      </form>
    )
  }
}

Analyse.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  processForm: PropTypes.func.isRequired,
  shortlist: PropTypes.object
}

const mapStateToProps = store => {
  return {
    shortlist: store.shortlistState.shortlist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: shortlist => {
      dispatch(updateShortlist(shortlist))
    }
  }
}

export default reduxForm({
  form: 'analyse',
  validate,
  initialValues: {
    ...defaultState.shortlist
  }
})(connect(mapStateToProps, mapDispatchToProps)(Analyse))
