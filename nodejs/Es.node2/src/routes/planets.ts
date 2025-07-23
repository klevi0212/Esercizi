import {
  create,
  createImage,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/planets.js";
import { logIn } from "../controllers/users.js";
import express from "express";
import { upload } from "../storage.js";

const router = express.Router();

router.get("/planets/", getAll);

router.get("/planets/:id", getOneById);

router.post("/planets/", create);

router.put("/planets/:id", updateById);

router.delete("/planets/:id", deleteById);

router.post("/planets/:id/image", upload.single("image"), createImage);

router.post("/users/login", logIn)

export default router;
