import { ShortlistActions } from '../actions/shortlist'
import { shortlistDefaultState as defaultState } from '../state'

const getReturnOnInvestment = shortlistedProperty => {
  const {
    lettableUnits,
    expectedRentalIncome,
    pricePaid,
    deposit,
    mortgageInterestRate,
    managementCost,
    repairsContingency,
    serviceCharge,
    insurance,
    fees
  } = shortlistedProperty

  const monthlyRent = lettableUnits.toFloat() * expectedRentalIncome.toFloat()
  const annualIncome = monthlyRent * 12

  const annualInterest =
    (pricePaid.toFloat() - deposit.toFloat()) * (mortgageInterestRate.toFloat() / 100)
  const annualManagement = annualIncome * (managementCost.toFloat() / 100)
  const annualRepairs = annualIncome * (repairsContingency.toFloat() / 100)

  const annualProfit =
    annualIncome -
    (annualInterest +
      annualManagement +
      annualRepairs +
      serviceCharge.toFloat() +
      insurance.toFloat())
  const monthlyProfit = annualProfit / 12
  const netYield = annualProfit / pricePaid.toFloat()
  const potentialROI = annualProfit / (deposit.toFloat() + fees.toFloat())

  const roiTotal = potentialROI * 100

  return {
    ...shortlistedProperty,
    annualProfit,
    monthlyProfit,
    netYield: netYield * 100,
    potentialROI: potentialROI * 100,
    scoreInWords:
      roiTotal < 3
        ? 'a poor'
        : roiTotal >= 3 && roiTotal < 10 ? 'a good' : roiTotal > 10 ? 'an excellent' : ''
  }
}

export const ShortlistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ShortlistActions.GET_COMPLETE:
      state = Object.assign({}, state, {
        shortlists: action.payload
      })
      break
    case ShortlistActions.UPDATE:
      state = Object.assign({}, { shortlist: getReturnOnInvestment(action.payload) })
      break
    case ShortlistActions.ADD_SUCCESS:
      state = Object.assign({}, state, {
        shortlists: action.payload
      })
      break
  }

  return state
}
