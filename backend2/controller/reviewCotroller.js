const Review = require("../models/Review");

const addReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    const newReview = new Review({ name, rating, comment });

    // Save the review to the database
    const savedReview = await newReview.save();

    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ error: "Failed to add the review" });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to get reviews" });
  }
};

module.exports = { addReview, getReviews };
