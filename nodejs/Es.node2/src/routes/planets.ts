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

const routerPlanet = express.Router();

routerPlanet.get("/", getAll);

routerPlanet.get("/:id", getOneById);

routerPlanet.post("/", create);

routerPlanet.put(":id", updateById);

routerPlanet.delete("/:id", deleteById);

routerPlanet.post("/:id/image", upload.single("image"), createImage);

export default routerPlanet;
