import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { updateShortlist, addToShortlist } from 'Store/actions/shortlist'
import { defaultState } from 'Store/reducers/shortlist'

import Heading from 'Shared/Heading'
import Container from 'Shared/Container'
import ContainerSection from 'Shared/ContainerSection'
import Input from 'Shared/Input'
import Grid from 'Shared/Grid'
import GridItem from 'Shared/GridItem'
import Button from 'Shared/Button'

import Results from './results'
import validate from './validate'

class Analyse extends Component {
  componentWillMount() {
    if (this.props.shortlist) {
      this.props.processForm(this.props.shortlist)
    }
  }

  addToShortlist(shortlist) {
    this.props.addToShortlist(shortlist)
  }

  render() {
    const { handleSubmit, processForm, shortlist } = this.props

    return (
      <form onSubmit={handleSubmit(processForm)}>
        <Heading text="Shortlist" variant="heading-1" />
        <Heading variant="heading-2">
          Easily track properties you are considering purchasing and see the potential ROI
          of each
        </Heading>
        <Grid>
          <GridItem>
            <Container title="Purchase financials">
              <Input id="reference" label="Reference" />
              <Input id="address" label="First line of address" />
              <Input id="pricePaid" label="Purchase price" type="number" prefix="£" />
              <Input id="deposit" label="Deposit" prefix="£" type="number" />
              <Input
                id="fees"
                label="Refurbishment &amp; fees"
                type="number"
                prefix="£"
              />

              <ContainerSection title="Rental" />
              <Input id="lettableUnits" label="Lettable units" type="number" />
              <Input
                id="expectedRentalIncome"
                label="Rental income per unit"
                type="number"
                prefix="£"
              />

              <ContainerSection title="On-going costs" />
              <Input
                id="mortgageInterestRate"
                label="Mortgage interest rate"
                type="number"
                suffix="%"
              />
              <Input
                id="managementCost"
                label="Management cost (Monthly)"
                type="number"
                suffix="%"
              />
              <Input
                id="repairsContingency"
                label="Repairs contingency"
                type="number"
                suffix="%"
              />
              <Input
                id="serviceCharge"
                label="Service charge and ground rent (Annual)"
                type="number"
                prefix="£"
              />
              <Input id="insurance" label="Insurance (Annual)" prefix="£" type="number" />
            </Container>
          </GridItem>
          <GridItem>
            <Container title="Your results">
              <Results shortlist={shortlist} />
              <Button type="submit" color="primary" variant="raised">
                Update score
              </Button>
              <Button
                type="button"
                color="primary"
                variant="raised"
                onClick={() => this.addToShortlist(shortlist)}
              >
                Add to shortlist
              </Button>
            </Container>
          </GridItem>
        </Grid>
      </form>
    )
  }
}

Analyse.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  processForm: PropTypes.func.isRequired,
  addToShortlist: PropTypes.func.isRequired,
  shortlist: PropTypes.object
}

const mapStateToProps = (store, { match }) => {
  const shortlistId = match && match.params && parseInt(match.params.id, 10)
  const all = store.shortlists.all
  const shortlist = all.find(s => s.id === shortlistId)
  const result = shortlist || { ...defaultState.active }

  return {
    shortlist: result,
    initialValues: result
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: shortlist => {
      dispatch(updateShortlist(shortlist))
    },
    addToShortlist: shortlist => {
      dispatch(addToShortlist(shortlist))
    }
  }
}

export default reduxForm({
  form: 'analyse',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Analyse))
