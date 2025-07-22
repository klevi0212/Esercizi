import {
  create,
  createImage,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/planets.js";
import express from "express";
import { upload } from "../storage.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOneById);

router.post("/", create);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

router.post("/:id/image", upload.single("image"), createImage);

export default router;
