import { nanoid } from "nanoid";

let packages = [
  { id: nanoid(), nameOfPackage: "Dayeyans", location: "bensa" },
  {
    id: nanoid(),
    nameOfPackage: "chemebalala",
    location: "Aleta-wendo",
  },
];

export const getAllPackages = async (req, res) => {
  res.json({ packages });
};

export const getSinglePackage = async (req, res) => {
  const { id } = req.params;
  const sPackage = packages.find((sPackage) => sPackage.id === id);
  if (!sPackage) {
    throw new Error("no job with that id");
    return res.status(404).json({ msg: `no package with id ${id}` });
  }
  res.status(200).json({ sPackage });
};

export const createPackage = async (req, res) => {
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
};

export const updatePackage = async (req, res) => {
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
};

export const deletePackage = async (req, res) => {
  const { id } = req.params;
  const Packag = packages.find((Packag) => Packag.id === id);
  if (!Packag) {
    return res.status(404).json({ msg: `no package with id ${id}` });
  }
  const newPackages = packages.filter((Packag) => Packag.id !== id);
  packages = newPackages;
  res.status(200).json({ msg: "job deleted" });
};
