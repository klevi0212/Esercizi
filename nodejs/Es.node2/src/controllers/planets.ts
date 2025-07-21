// Do
// Add planets Controller (controllers/planets.ts) consisting of the following functions:
// getAll
// getOneById
// create
// updateById
// deleteById.
// Then, replace callback functions in routes (req: Request, res: Response) => with the functions above.
// (For example: the route /api/planets should use getAll function.)
// Use
// The dummy database of planets from the previous exercise.
// Array.prototype.find higher-order function to Get One.
// Spread operator ([...planets]) to Create.
// Array.prototype.map higher-order function to Update.
// Array.prototype.filter higher-order function to Delete.
// Check
// Use Postman to test the routes.

import { Request, Response } from "express";
import Joi from "joi";
import db from "../db.js";
import { error } from "console";
type Planet = {
  id: number;
  name: string;
};

// type Planets = Planet[];

// let planets: Planets = [
//   {
//     id: 1,
//     name: "Earth",
//   },
//   {
//     id: 2,
//     name: "Mars",
//   },
// ];

const planetSchema = Joi.object({
  // id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

async function getAll(req: Request, res: Response) {
  const planets = await db.many("SELECT * FROM planets");
  res.status(200).json(planets);
}
async function getOneById(req: Request, res: Response) {
  const { id } = req.params;
  // const planet = planets.find((p) => p.id === Number(id));
  const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1`, [id]);
  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ error: "This planet doesn't exist!" });
  }
}

async function create(req: Request, res: Response) {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    console.log("Pianeta non creato");
    return res.status(404).json({ msg: "Dati non completi" });
  }
  const { name } = req.body;
  // const newPlanet = { id, name };
  // planets = [...planets, newPlanet];
  // console.log(planets);
  await db.none("INSERT INTO planets (name) VALUES ($1)", [name]);
  res.status(201).json({ msg: "The planet was created with success!" });
}
async function updateById(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  // planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  // console.log(planets);
  console.log("debugg");
  const result = await db.result(
    "UPDATE planets SET name = $1 WHERE id = $2;",
    [name, id]
  );
  if (result.rowCount === 0) {
    return res.status(404).json({ msg: "404: Planet not found!" });
  }
  console.log(result.rowCount);
  res.status(200).json({ msg: "The planet was updated!" });
}
async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  // planets = planets.filter((p) => p.id !== Number(req.params.id));
  // console.log(planets);
  const result = await db.result("DELETE FROM planets WHERE id=$1", [id]);
  if (result.rowCount === 0) {
    return res.status(404).json({ msg: "404: Planet not found!" });
  }
  res.status(200).json({ msg: "The planet was destroyed!" });
}
export { getAll, getOneById, create, updateById, deleteById };
