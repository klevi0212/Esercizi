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
import setupDb from "./setupDb.js";
import routerPlanet from "./routes/planets.js";
import routerUser from "./routes/users.js";

dotenv.config();
setupDb();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/planets", routerPlanet);
app.use("/api/users", routerUser)

app.listen(port, () => {
  console.log(`Server attivo sulla porta ${port}`);
});
