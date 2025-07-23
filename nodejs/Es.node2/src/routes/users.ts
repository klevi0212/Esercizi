import { logIn, signUp } from "../controllers/users.js";
import express from "express";

const routerUser = express.Router(); 

routerUser.post("/login", logIn)
routerUser.post("/signup", signUp)

export default routerUser;