'use strict';
const sequelize  = require('./sequelize');
//需要类型
const Sequelize  = require('sequelize');

/**
 * 点赞表，需要记录每一个赞的reply和用户，防治重复点赞和允许撤销点赞（点赞第二次视为撤销）
 */
const Ticket = sequelize.define('ticket', {
  types: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  coupon: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
 
Ticket.sync(); //创建表

module.exports = Ticket;
 