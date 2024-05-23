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

module.exports = { addReview };
