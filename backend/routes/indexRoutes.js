const error = require("../middleware/error");
const express = require("express");
const userRoute = require("./userRoute");
const adminRoute = require("./adminRoute");
const packageRoute = require("./packageRoute");
const bookingRoute = require("./bookingRoute");
const guideRoute = require("./guideRoute");

const router = express.Router();
// router.use(express.json());

router.use("/user", userRoute);
router.use("/admin", adminRoute);
router.use("/package", packageRoute);
router.use("/book", bookingRoute);
router.use("/guide", guideRoute);

router.use(error);

module.exports = router;
