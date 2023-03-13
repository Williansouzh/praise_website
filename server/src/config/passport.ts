import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Users } from '../models/Users';
import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';

dotenv.config()
//configurar Strategy
const notAuthrizedJson = {
    status: 401,
    message: 'Not authorized'
}
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PRIVATE_KEY as string
}
passport.use(new JWTStrategy(options, async (payload, done)=>{
    const user = await Users.findByPk(payload.id);
    if(user){
        return done(null, user)
    }else{
        return done(notAuthrizedJson, false)
    }
}));

export const generateToken = (data: Object)=>{
    return JWT.sign(data, process.env.PRIVATE_KEY as string)
};
export const privateRoute = (req: Request, res: Response, next: NextFunction)=>{
    const authFunction = passport.authenticate('jwt', (err:any, user:any)=>{
        if(user){
            next()
        }else{
            next(notAuthrizedJson)
            res.json({
                notAuthrizedJson
            })
        }
    })
    authFunction(req, res, next)
};

export const verifyToken = (req: Request, res: Response, next: NextFunction)=>{
    let token: any = req.headers.authorization;
    JWT.verify(token, process.env.PRIVATE_KEY as string, (err: any, decoded: any)=>{

    })
    if(!token){
        res.json('error, token not found'+token)
    }else{
        next()
    }
}

export default passport