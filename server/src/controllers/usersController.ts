import { Request, Response } from "express";
import { stringify } from "querystring";
import { generateToken } from "../config/passport";
import { Users } from "../models/Users";


type user = {
    name: string
    age: number | string
    post: string
    email: string
    password: string
}

export const register = async (req: Request, res: Response)=>{
    if(req.body.email && req.body.password){
        let {email, password, name, age, post} = req.body;
        let hasUser = await Users.findOne({
            where: {
                email: email
            }
        })
        if(!hasUser){
            let newUser = await Users.create({
                email,
                password,
                age,
                name,
                post

            });
            let token  = generateToken({id:newUser.id});
            res.status(201);
            res.json({
                id: newUser.id,
                token: token
            })
        }else{
            res.json({
                error: 'User already exist'
            })
        }
    }else{
        res.json({
            error: 'email and password does not exist'
        })
    }
};

export const login = async (req: Request, res: Response) =>{
    if(req.body.email && req.body.password){
        let email: string = req.body.email;
        let password: string = req.body.password

        let user = await Users.findOne({
            where: {
                email: email,
                password: password
            }
        });
        if(user){
            const token = generateToken({
                id: user.id
            })
            res.json({
                user,
                status: true,
                token: token
            })
            return 
        }
            res.json({
                status: false
            })
    }
}
export const list = async (req: Request, res: Response)=>{
    let users = await Users.findAll();
    let list:user[]= [];
    console.log(typeof(users))
    for(let i in users){
        list.push(users[i])
    }
    res.json({
        list
    })
}