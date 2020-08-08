const config = require("./index");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: 'sequelize',
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
    seederStorage: 'sequelize',
  },
  production: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    use_env_variable: 'DATABASE_URL'
  }
}