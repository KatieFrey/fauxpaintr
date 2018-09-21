const Sequelize = require("sequelize");
const { db } = require("./indexModel");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = User;
