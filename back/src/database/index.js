const Sequelize = require("sequelize")
const dbConfig = require("../config/database.js");
const Tarefa = require("../models/Tarefa")

const connection = new Sequelize(dbConfig);
Tarefa.init(connection);
module.exports = connection;