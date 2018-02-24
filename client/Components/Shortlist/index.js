import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { updateShortlist } from '../../store/actions/shortlist'

import Heading from '../Heading'
import Text from '../Text'
import Container from '../Container'
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
    const { handleSubmit, processForm, shortlist } = this.props
    const { reference, address, pricePaid, deposit } = shortlist

    return (
      <React.Fragment>
        <Heading text="Shortlist" variant="heading-1" />
        <Text>Work out the potential Return on investment (ROI) so you can compare with other investment opportunities</Text>
        <Grid>
          <GridItem>
            <Container title="Purchase financials">
              <form onSubmit={handleSubmit(processForm)}>
                <Input id="reference" label="Reference" defaultValue={reference} />
                <Input id="address1" label="First line of address" defaultValue={address} />
                <Input id="purchasePrice" label="Purchase price" type="number" prefix="£" defaultValue={pricePaid} />
                <Input id="deposit" label="Deposit" prefix="£" type="number" defaultValue={deposit} />
                <Input
                  id="refurbFees"
                  label="Refurbishment, fees, furnishings and other costs"
                  type="number"
                  prefix="£"
                  defaultValue={shortlist.fees}
                />
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
