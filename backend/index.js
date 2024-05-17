const express = require("express");

require("dotenv").config;
const db = require("./config/db");
const config = require("./config/index");
const app = express();
const routes = require("./routes/indexRoutes");
const cors = require("cors");
const router = require("./routes/userRoute");

const PORT = config.PORT;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB connection successful");
});

app.use(cors());
app.use("/", routes);

router.get("/test", (req, res) => {
  res.send("test route");
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
