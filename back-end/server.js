import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

let jobs = [
  { Packageid: nanoid(), nameOfPackage: "Dayeyans", Location: "bensa" },
  {
    Packageid: nanoid(),
    nameOfPackage: "chemebalala",
    Location: "Aleta-wendo",
  },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.post("/api/packages", (req, res) => {
  const { nameOfPackage, location } = req.body;
  if (!nameOfPackage || !location) {
    return res
      .status(400)
      .json({ msg: "please provide packageId and location" });
  }
  const id = nanoid(10);
  const job = { id, nameOfPackage, location };
  jobs.push(job);
  res.json({ jobs });
});

app.get("/api/packages", (req, res) => {
  res.json({ jobs });
});

app.listen(5300, () => {
  console.log("server is running..");
});
