module.exports = (sequelize, DataTypes) => {
  const Twitter = sequelize.define('Twitter', {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Twitter.associate = models => {
    Twitter.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }

  return Twitter
}
