module.exports = (sequelize, DataTypes) => {
  const Facebook = sequelize.define('Facebook', {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Facebook.associate = models => {
    Facebook.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }

  return Facebook
}
