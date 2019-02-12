require('dotenv').config()
const path = require('path');

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DEV,
    host: "127.0.0.1",
    dialect: "postgres",
    seederStorage: "json",
    seederStoragePath: path.resolve('seeders', "sequelizeData.json"),
    seederStorageTableName: "sequelize_data"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD,
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
