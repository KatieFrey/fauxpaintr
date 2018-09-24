// const router = require("express").Router();
// const { Picture, Upload, User, ResultPic } = require("../db/indexModel");

// router.get("/", async (req, res, next) => {
//   try {
//     const pictures = await Picture.findAll({});
//     res.status(200).send(pictures);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const picture = await Picture.findById(id);
//     res.status(200).send(picture);
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
