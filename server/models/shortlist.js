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
    potentialROI: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Shortlist
}
