const Squelize = require('sequelize');

const dbConfig = require('../config/database');

const connection = new Squelize(dbConfig[process.env.NODE_ENV]);
module.exports = connection;