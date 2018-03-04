module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User')

  User.associate = models => {
    User.hasOne(models.Local, {
      foreignKey: 'id'
    })
    User.hasOne(models.Facebook, {
      foreignKey: 'id'
    })
    User.hasOne(models.Twitter, {
      foreignKey: 'id'
    })
    User.hasOne(models.Google, {
      foreignKey: 'id'
    })
  }

  return User
}
