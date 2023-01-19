const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const Adresses = db.define('adresses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id',
    }
  }
});

module.exports = Adresses;