const router = require("express").Router();
router.use("/pictures", require("./pictureRoute"));

module.exports = router;
