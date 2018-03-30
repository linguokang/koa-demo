'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Code = sequelize.define('code', {
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  },
);

Code.sync(); //创建表

module.exports = Code;