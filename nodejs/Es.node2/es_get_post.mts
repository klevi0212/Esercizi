import express from "express";
import "express-async-errors";
import morgan from "morgan";

type Planet = { id: number; name: string };

let planets: Planet[] = [
  { id: 1, name: "Mercurio" },
  { id: 2, name: "Venere" },
  { id: 3, name: "Terra" },
  { id: 4, name: "Marte" },
  { id: 5, name: "Giove" },
  { id: 6, name: "Saturno" },
  { id: 7, name: "Urano" },
  { id: 9, name: "Nettuno" },
];
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ error: "Planet not found" });
  }
});

app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res
    .status(201)
    .json({ message: `Ho creato il pianeta ${name} con id ${id}` });
});

app.listen(PORT, () => {
  console.log(`🌍 Server ready at http://localhost:${PORT}`);
});
