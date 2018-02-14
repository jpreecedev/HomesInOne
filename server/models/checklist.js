'use strict';
module.exports = (sequelize, DataTypes) => {
  var Checklist = sequelize.define('Checklist', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Checklist;
};