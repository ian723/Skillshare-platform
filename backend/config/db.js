const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('skill_platform_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
