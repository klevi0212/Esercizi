import { NextFunction, Request, Response } from "express";
import passport from "passport";


function authorize(req:Request, res: Response, next: NextFunction){
    passport.authenticate("jwt", {session: false},
        (err = "", user = "")=>{
            if (!user||err){
                res.status(200).json({msg:"You are not authorized!"})
            } else {
                req.user = user;
                next()
            }
        }
    )(req, res, next)
}
export default authorize
