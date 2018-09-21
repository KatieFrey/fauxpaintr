const db = require("./indexModel");

const Picture = require("./pictureModel");
const Upload = require("./uploadModel");
const ResultPic = require("./resultPicModel");
const User = require("./userModel");

Upload.belongsTo(User);
ResultPic.belongsTo(User);
Picture.hasMany(Upload);

module.exports = {
  Upload,
  Picture,
  ResultPic,
  User
};
