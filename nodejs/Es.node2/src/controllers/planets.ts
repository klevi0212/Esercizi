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
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};
const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
};
const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  console.log(planets);
  res.status(201).json({ msg: "The planet was created" });
};
const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  console.log(planets);
  res.status(200).json({ msg: "The planet was updated" });
};
const deleteById = (req: Request, res: Response) => {
  // const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(req.params.id));
  console.log(planets);
  res.status(200).json({ msg: "The planet was destroyed" });
};
export { getAll, getOneById, create, updateById, deleteById };
