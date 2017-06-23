'use strict';
const Users = require('./users');

module.exports = function(sequelize, DataTypes) {
  var Friends = sequelize.define('Friends', {
    frienderId: DataTypes.INTEGER,
    befriendedId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Users.hasOne(Friends, {foreignKey: 'frienderId'})
        Users.hasOne(Friends, {foreignKey: 'befrienderId'})
        // associations can be defined here
      }
    }
  });
  return Friends;
};