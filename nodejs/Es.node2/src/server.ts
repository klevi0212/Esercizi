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
import router from "./routes/planets.js";
import setupDb from "./setupDb.js";

dotenv.config();
setupDb();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/planets", router);

app.listen(port, () => {
  console.log(`Server attivo sulla porta ${port}`);
});
