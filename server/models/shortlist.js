module.exports = (sequelize, DataTypes) => {
  const Shortlist = sequelize.define('Shortlist', {
    reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pricePaid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deposit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lettableUnits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expectedRentalIncome: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mortgageInterestRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    managementCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    repairsContingency: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceCharge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    insurance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monthlyProfit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    annualProfit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    netYield: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    potentialROI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scoreInWords: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return Shortlist
}
