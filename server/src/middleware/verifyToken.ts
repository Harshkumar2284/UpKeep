import {type Request,type Response,type NextFunction} from 'express'
import jwt from 'jsonwebtoken'
declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}
export const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token
        
        if(!token){
            return res.status(401).json({error:"No Token Provided"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET!)
        req.user = decode
        next()
    } catch (err) {
        return res.status(403).json({error:"Invalid Token"})
    }

}