'use strict';
module.exports = (sequelize, DataTypes) => {
  var ChecklistItem = sequelize.define('ChecklistItem', {
    name: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChecklistItem;
};