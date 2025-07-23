import { logIn, logOut, signUp } from "../controllers/users.js";
import express from "express";
import authorize from "../authorize.js";

const routerUser = express.Router(); 

routerUser.post("/login", logIn)
routerUser.post("/signup", signUp)
routerUser.get("/logout", authorize, logOut )

export default routerUser;