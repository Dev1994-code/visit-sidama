const express = require("express");
const reviewCotroller = require("../controller/reviewCotroller");
const router = express.Router();
router.use(express.json());

router.post("/review", reviewCotroller.addReview);
router.get("/review", reviewCotroller.getReviews);

module.exports = router;
