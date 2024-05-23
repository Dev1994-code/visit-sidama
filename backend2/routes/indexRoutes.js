const error = require("../middleware/error");
const express = require("express");
const userRoute = require("./userRoute");
const adminRoute = require("./adminRoute");
const packageRoute = require("./packageRoute");
const bookingRoute = require("./bookingRoute");
const reviewRoute = require("./reviewRoute");
const guideRoute = require("./guideRoute");
//const hotelRoute = require("./hotelRoute");

const router = express.Router();
// router.use(express.json());

router.use("/user", userRoute);
router.use("/admin", adminRoute);
router.use("/service", reviewRoute);
router.use("/package", packageRoute);
router.use("/book", bookingRoute);
router.use("/guide", guideRoute);
//router.use("/hotelRoute", hotelRoute);

router.use(error);

module.exports = router;
