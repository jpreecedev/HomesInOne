module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define('Checklist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Checklist.associate = (models) => {
    Checklist.hasMany(models.ChecklistItem, {
      foreignKey: 'checklistId',
      as: 'checklistItems'
    })
  }

  return Checklist
}
