'use strict';
// const Users = require('./users');

module.exports = function(sequelize, DataTypes) {
  var Friends = sequelize.define('Friends', {
    frienderId: DataTypes.INTEGER,
    befriendedId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Friends.belongsTo(models.Users)
        Friends.belongsTo(Users, {as: 'Friender', constraints: false})
        Friends.belongsTo(Users, {as: 'Befriended', constraints: false})
        // associations can be defined here
      }
    }
  });
  return Friends;
}