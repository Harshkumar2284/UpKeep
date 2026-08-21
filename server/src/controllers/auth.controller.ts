import {registerUser} from '../services/auth.service.js'
import {type Request, type Response} from 'express'

export const signUp = async(req: Request,res:Response)=>{
    try{
        const {email,password,tenantName} = req.body
        const {user,tenant} = await registerUser(email,password,tenantName)
        res.status(201).json({user,tenant})
    }catch(err:any){
        res.status(400).json({error:err.message})
    }
}