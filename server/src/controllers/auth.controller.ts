import {registerUser, loginUser} from '../services/auth.service.js'
import {type Request, type Response} from 'express'

export const signUp = async(req: Request,res:Response)=>{
    try{
        const {email,name,password,tenantName} = req.body
        const {user,tenant} = await registerUser(email,name,password,tenantName)
        res.status(201).json({success:true,data:{user,tenant}})
    }catch(err:any){
        res.status(400).json({error:err.message})
    }
}

export const login = async(req:Request,res:Response)=>{
    try {
        const {email, password} = req.body
        const token = loginUser(email,password)
        res.cookie('token',token,{
            httpOnly:true,
            sameSite:true,
            maxAge:3600000
        }).status(200).json({success:true})
    } catch (error:any) {
        res.status(401).json({error:error.message})
    }
}