const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  //   img: {
  //     type: String,
  //     required: true,
  //   },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Hotels = mongoose.model("Hotels", hotelSchema);

export default Hotels;
