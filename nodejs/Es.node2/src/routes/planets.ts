import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/planets.js";
import express from "express";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOneById);

router.post("/", create);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

export default router;
