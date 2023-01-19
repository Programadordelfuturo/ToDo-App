const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'worker',
  username: 'postgres',
  password: 'ruut',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
});

module.exports = db;