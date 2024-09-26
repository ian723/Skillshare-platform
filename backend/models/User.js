const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false }, // 'teacher', 'learner'
  skills: { type: DataTypes.TEXT, allowNull: false }, // Store skills in JSON format
});

module.exports = User;
