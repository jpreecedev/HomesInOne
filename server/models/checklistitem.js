module.exports = (sequelize, DataTypes) => {
  const ChecklistItem = sequelize.define('ChecklistItem', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  ChecklistItem.associate = (models) => {
    ChecklistItem.belongsTo(models.Checklist, {
      onDelete: 'CASCADE'
    })
  }

  return ChecklistItem
}
