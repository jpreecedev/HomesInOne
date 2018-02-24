import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { updateShortlist } from '../../store/actions/shortlist'

import Heading from '../Heading'
import Text from '../Text'
import Container from '../Container'
import ContainerSection from '../ContainerSection'
import Input from '../Input'
import Grid from '../Grid'
import GridItem from '../GridItem'
import Button from '../Button'

import Results from './results'
import validate from './validate'

class Shortlist extends Component {
  componentWillMount() {
    this.props.processForm(this.props.shortlist)
  }

  render() {
    const { handleSubmit, processForm } = this.props

    return (
      <React.Fragment>
        <Heading text="Shortlist" variant="heading-1" />
        <Text>
          Work out the potential Return on investment (ROI) so you can compare with other investment opportunities
        </Text>
        <Grid>
          <GridItem>
            <Container title="Purchase financials">
              <form onSubmit={handleSubmit(processForm)}>
                <Input id="reference" label="Reference" />
                <Input id="address1" label="First line of address" />
                <Input id="purchasePrice" label="Purchase price" type="number" prefix="£" />
                <Input id="deposit" label="Deposit" prefix="£" type="number" />
                <Input id="refurbFees" label="Refurbishment &amp; fees" type="number" prefix="£" />

                <ContainerSection title="Rental" />
                <Input id="lettableUnits" label="Lettable units" type="number" />
                <Input id="expectedRentalIncome" label="Rental income per unit" type="number" prefix="£" />

                <ContainerSection title="On-going costs" />
                <Input id="mortgageInterestRate" label="Mortgage interest rate" type="number" suffix="%" />
                <Input id="managementCost" label="Management cost (Monthly)" type="number" suffix="%" />
                <Input id="repairsContingency" label="Repairs contingency" type="number" suffix="%" />
                <Input id="serviceCharge" label="Service charge and ground rent (Annual)" type="number" prefix="£" />
                <Input id="insurance" label="Insurance (Annual)" prefix="£" type="number" />

                <Button type="submit" color="primary" variant="raised">
                  Update score
                </Button>
              </form>
            </Container>
          </GridItem>
          <GridItem>
            <Results />
          </GridItem>
        </Grid>
      </React.Fragment>
    )
  }
}

Shortlist.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  processForm: PropTypes.func.isRequired,
  shortlist: PropTypes.object.isRequired
}

const mapStateToProps = store => {
  return {
    shortlist: store.shortlistState.shortlist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: values => {
      dispatch(updateShortlist(values))
    }
  }
}

export default reduxForm({ form: 'shortlist', validate })(connect(mapStateToProps, mapDispatchToProps)(Shortlist))
