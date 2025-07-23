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


        await db.none('UPDATE users SET token=$2 WHERE id=$1', [user.id, token])
        res.status(200).json({id:user.id, username, token})
        console.log("pippo", token)
    }else{
        res.status(404).json({msg: "Username or password incorrect."})
    }
}
async function signUp(req:Request, res:Response){
    const{username, password} = req.body
    const user = await db.oneOrNone('SELECT * FROM users WHERE username=$1', username)

    if(user){
        res.status(409).json({msg: "Username already in use!"})
    }else{
        const{id} = await db.one(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, password]
        )
        res.status(201).json({id, msg:"Signup successful. Now you can log in."})
    }
}

async function logOut(req:Request, res:Response){
    const user:any = req.user;
    await db.none('UPDATE users SET token=$2 WHERE id=$1', [user?.id, null])
    res.status(200).json({msg:"You have logout with success."})
}
export {logIn, signUp, logOut}