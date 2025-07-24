const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Poll = require('./Poll')(sequelize, DataTypes);
db.PollOption = require('./PollOption')(sequelize, DataTypes);
db.VoteLog = require('./VoteLog')(sequelize, DataTypes);

Object.keys(db).forEach(model => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

module.exports = db;
