import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

let packages = [
  { id: nanoid(), nameOfPackage: "Dayeyans", location: "bensa" },
  {
    id: nanoid(),
    nameOfPackage: "chemebalala",
    location: "Aleta-wendo",
  },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.post("/", (req, res) => {
//   console.log(req);
//   res.json({ message: "data received", data: req.body });
// });

// create package
app.post("/api/packages", (req, res) => {
  const { nameOfPackage, location } = req.body;
  if (!nameOfPackage || !location) {
    return res
      .status(400)
      .json({ msg: "please provide packageId and location" });
  }
  const id = nanoid(10);
  const newPackage = { id, nameOfPackage, location };
  packages.push(newPackage);
  res.status(201).json({ newPackage });
});

// get all packages
app.get("/api/packages", (req, res) => {
  res.json({ packages });
});

// GET SINGLE PACKAGE
app.get("/api/packages/:id", (req, res) => {
  const { id } = req.params;
  const sPackage = packages.find((sPackage) => sPackage.id === id);
  if (!sPackage) {
    return res.status(404).json({ msg: `no package with id ${id}` });
  }
  res.status(200).json({ sPackage });
});

// EDIT package

app.patch("/api/packages/:id", (req, res) => {
  const { nameOfPackage, location } = req.body;
  if (!nameOfPackage || !location) {
    return res
      .status(400)
      .json({ msg: "please provide package-name and location" });
  }
  const { id } = req.params;
  const Packag = packages.find((Packag) => Packag.id === id);
  if (!Packag) {
    return res.status(404).json({ msg: `no package with id ${id}` });
  }

  Packag.nameOfPackage = nameOfPackage;
  Packag.location = location;
  res.status(200).json({ msg: "job modified", Packag });
});

// delete package

app.delete("/api/packages/:id", (req, res) => {
  const { id } = req.params;
  const Packag = packages.find((Packag) => Packag.id === id);
  if (!Packag) {
    return res.status(404).json({ msg: `no package with id ${id}` });
  }
  const newPackages = packages.filter((Packag) => Packag.id !== id);
  packages = newPackages;
  res.status(200).json({ msg: "job deleted" });
});

app.listen(5300, () => {
  console.log("server is running..");
});
