import {type Request,type Response} from 'express'
import * as monitorService from "../services/monitor.service.js"

export const addUrl = async(req:Request,res:Response)=>{

    try {
        const {name,url} = req.body
        const user = req.user
        const newMonitor = await monitorService.addUrl(name,url,user)
        res.status(201).json({success:true,data:newMonitor})
    } catch (err:any) {
        res.status(400).json({error:err.message})
    }
}

export const getUrl = async(req:Request,res:Response)=>{
    try {
        const user = req.user
        const userWebsites = await monitorService.getUrl(user)
        res.status(200).json({success:true,data:userWebsites})
    } catch (err:any) {
        res.status(400).json({error:err.message})
    }
}