'use strict';
const sequelize  = require('./sequelize');
//需要类型
const Sequelize  = require('sequelize');

const ticketType = sequelize.define('ticketType', {
  type_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
 
ticketType.sync(); //创建表

module.exports = ticketType;
 