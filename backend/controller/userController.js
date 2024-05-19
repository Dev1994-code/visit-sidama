const User = require("../models/User");
const asyncMiddleware = require("../middleware/async");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.detail = asyncMiddleware(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.status(201).json(user);
});

exports.register = asyncMiddleware(async (req, res) => {
  const { username, password, email, contactInformation } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  let user = new User({
    username,
    password: hashedPassword,
    email,
    contactInformation,
  });

  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIREDIN,
  });
  res.status(201).json({ user, token });
});

exports.login = asyncMiddleware(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Compare passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIREDIN,
  });

  // Send user details and token
  res.status(200).json({ user, token });
});

exports.update = asyncMiddleware(async (req, res) => {
  const { id } = req.params;
  const { username, name, email, contactInformation } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    {
      username,
      name,
      email,
      contactInformation,
    },
    { new: true }
  );
  res.status(200).json({ user });
});

exports.userActive = asyncMiddleware(async (req, res) => {
  const users = await User.find({ status: "active" });
  // console.log("users:", users);

  res.status(201).json(users);
});

exports.userBanned = asyncMiddleware(async (req, res) => {
  const users = await User.find({ status: "ban" });

  res.status(201).json(users);
});
