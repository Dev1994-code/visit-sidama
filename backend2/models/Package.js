const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceInfo: {
    type: Number,
    required: true,
  },
  priceDescription: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  activities: { type: [String], required: true },
  image: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  rating: {
    type: Number,
  },
  itinerary: [{ day: { type: String }, info: { type: String } }],
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
