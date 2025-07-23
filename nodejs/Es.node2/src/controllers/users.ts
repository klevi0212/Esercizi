import dotenv from "dotenv";
import { Request, Response } from "express";
import db from "../db.js";
import jtw from "jsonwebtoken";

dotenv.config()

async function logIn(req: Request, res:Response){
    const{username, password} = req.body
    if (!password){res.status(404).json({msg: "Password non valida"})}
    const user = await db.one('SELECT * FROM users WHERE username=$1', username)

    if (user && user.password===password){
        const payload = {
            id: user.id,
            username,
        }
        const {SECRET = ""}= process.env;
        const token = jtw.sign(payload, SECRET)
        console.log(token)


        await db.none('UPDATE users SET token=$2 WHERE id=$1', [user.id, token])
        res.status(200).json({id:user.id, username, token})
    }else{
        res.status(404).json({msg: "Username or password incorrect."})
    }
}
export {logIn}