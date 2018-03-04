module.exports = (sequelize, DataTypes) => {
  const Google = sequelize.define('Google', {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Google.associate = models => {
    Google.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }

  return Google
}
