import dotenv from "dotenv";
import passport from "passport";
import passportJWT from "passport-jwt";
import db from "./db.js"

dotenv.config()
const {SECRET = ""}= process.env

passport.use(
    new passportJWT.Strategy(
        {
            jwtFromRequest:passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SECRET,
        },
        async(payload , done )=>{
            const user = await db.one('SELECT * FROM users WHERE id=$1', payload.id);
            console.log(user);
            try {
                return user ? done (null, user): done(new Error("User not found."));
            }catch(error){
                done(error)
            }
        }
    )
)