const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
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
    contactInformation: {
      type: String,
    },
    status: {
      type: String,
      default: "active",
    },
    // Other fields as needed
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
