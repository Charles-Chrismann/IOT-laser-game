const fs = require('fs');
const Sequelize = require('sequelize');

const path = require('path');
const basename = path.basename(__filename);

const db = {}

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION
})

fs.readdirSync(__dirname)
.filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
.forEach(file => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model
})

db.sequelize = sequelize
// db.Sequelize = Sequelize

module.exports = db;