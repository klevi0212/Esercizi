// Do
// Write simple Express server that listens on port 3000 (use dotenv to specify the port)
// Create a dummy "database" of planets using a let variable. (You will use this data in further exercises.)
// Configure your app (app.use()) to:
// accept JSON from the Client
// log the Client's requests
// Use

import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";

// Dummy database with initial data:
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));

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
app.listen(port, () => {
  console.log(`Server attivo sulla porta ${port}`);
});
