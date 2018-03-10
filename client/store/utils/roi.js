export const getReturnOnInvestment = shortlistedProperty => {
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

  let scoreInWords = ''
  if (roiTotal < 3) {
    scoreInWords = 'a poor'
  } else {
    if (roiTotal >= 3 && roiTotal < 10) {
      scoreInWords = 'a good'
    }
    if (roiTotal > 10) {
      scoreInWords = 'an excellent'
    }
  }

  return {
    ...shortlistedProperty,
    annualProfit,
    monthlyProfit,
    netYield: netYield * 100,
    potentialROI: potentialROI * 100,
    scoreInWords: scoreInWords
  }
}
