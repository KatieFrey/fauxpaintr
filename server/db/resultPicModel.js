const Sequelize = require("sequelize");
const { db } = require("./indexModel");

const ResultPic = db.define("resultpic", {
  name: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
});

module.exports = ResultPic;
