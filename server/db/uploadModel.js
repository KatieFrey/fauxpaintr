const Sequelize = require("sequelize");
const { db } = require("./indexModel");

const Upload = db.define("upload", {
  file: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Upload;
