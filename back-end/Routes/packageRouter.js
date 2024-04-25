import { Router } from "express";
const router = Router();

import {
  getAllPackages,
  getSinglePackage,
  updatePackage,
  deletePackage,
  createPackage,
} from "../controllers/packageControllers.js";

router.get("/", getAllPackages);
router.post("/", createPackage);
router
  .route("/:id")
  .get(getSinglePackage)
  .patch(updatePackage)
  .delete(deletePackage);

export default router;
