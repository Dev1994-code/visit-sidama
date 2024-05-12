const mongoose = require("mongoose");

const tourGuideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Additional properties specific to Operator
  // company: {
  //   type: String,
  //   required: true,
  // },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  role: { type: String, default: "TourGuide" },
  // Other operator specific properties
  status: {
    type: String,
    default: "active",
  },
});

const TourGuide = mongoose.model("TourGuide", tourGuideSchema);

module.exports = TourGuide;
