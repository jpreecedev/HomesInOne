module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shortlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pricePaid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deposit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fees: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lettableUnits: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      expectedRentalIncome: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mortgageInterestRate: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      managementCost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      repairsContingency: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      serviceCharge: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      insurance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      monthlyProfit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      annualProfit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      netYield: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      potentialROI: {
        type: Sequelize.STRING,
        allowNull: false
      },
      scoreInWords: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shortlists')
  }
}
