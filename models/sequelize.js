  const databaseConfig = {
    "dialect": "mysql",
    "host": "localhost",
    "port": 3306,
    "userName": "root",
    "password": "123456",
    "databaseName": "175star",
    "ssl": false,
    "timezone": "+08:00"
}
const Sequelize = require('sequelize');
// const databaseConfig = require("../config/database.json");
// var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
// const sequelize = new Sequelize(match[5], match[1], match[2], {
//   dialect:  'postgres',
//   protocol: 'postgres',
//   port:     match[4],
//   host:     match[3],
//   logging: false,
//   dialectOptions: {
//     ssl: true
//   }
// });
const sequelize = new Sequelize(databaseConfig.databaseName, databaseConfig.userName, databaseConfig.password, {
  host: databaseConfig.host,
  dialect: databaseConfig.dialect,
  protocol: databaseConfig.dialect,
  port: databaseConfig.port,
  // 字段以下划线（_）来分割（默认是驼峰命名风格）
  underscored: true,
  timezone: databaseConfig.timezone,//东八区
  dialectOptions: {
    ssl: databaseConfig.ssl,
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
module.exports = sequelize; 