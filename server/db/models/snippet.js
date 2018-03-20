const Sequelize = require('sequelize');
const db = require('../db');

const Snippet = db.define('snippet', {
  command: {
    type: Sequelize.STRING,
    allowNull: false
  },
  code: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Snippet;
