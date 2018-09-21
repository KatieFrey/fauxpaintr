const router = require("express").Router();
const { Picture, Upload, User, ResultPic } = require("../db/indexModel");

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const picture = await Picture.findById(id);
    res.status(200).send(picture);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
