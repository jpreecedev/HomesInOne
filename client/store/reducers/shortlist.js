import { ShortlistActions } from '../actions/shortlist'
import { roi } from 'Store/utils'

export const defaultState = {
  shortlist: {
    shortlistedPropertyId: null,
    reference: '3 bedroom house',
    address: '1 new property lane',
    pricePaid: 60000,
    deposit: 15000,
    fees: 15000,
    lettableUnits: 1,
    expectedRentalIncome: 500,
    mortgageInterestRate: 5,
    managementCost: 0,
    repairsContingency: 10,
    serviceCharge: 0,
    insurance: 300,
    monthlyProfit: 0,
    annualProfit: 0,
    netYield: 0,
    potentialROI: 0,
    scoreInWords: ''
  }
}

export default function ShortlistReducer(state = defaultState, action) {
  switch (action.type) {
    case ShortlistActions.UPDATE_SHORTLIST:
      state = Object.assign({}, { shortlist: roi.getReturnOnInvestment(action.payload) })
      break
    case ShortlistActions.GET_SHORTLIST_SUCCESS:
      state = Object.assign({}, state, {
        shortlists: action.payload
      })
      break
    case ShortlistActions.ADD_TO_SHORTLIST_SUCCESS:
      state = Object.assign({}, state, {
        shortlists: action.payload
      })
      break
    default:
      return state
  }
  return state
}
