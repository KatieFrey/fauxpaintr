const Sequelize = require("sequelize");
const { db } = require("./indexModel");

const Picture = db.define("picture", {
  name: {
    type: Sequelize.STRING
  },
  artistName: {
    type: Sequelize.STRING
  },
  painting: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Picture;
