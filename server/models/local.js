module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define('Local', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Local.associate = models => {
    Local.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }

  return Local
}
