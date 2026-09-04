import { checkPrime } from "node:crypto"
import Monitor from "../models/monitor.js"
import User from "../models/user.js"
import mongoose from "mongoose"

interface UserPayload{
    email:string
}

export const addUrl = async(name:string, url:string, user:UserPayload)=>{
    
    const email = user.email
    const check = await User.findOne({email})
    if(!check){
        throw new Error("User invalid")
    }
    const tenantId = check.tenantId 
    const website = await Monitor.findOne({url,tenantId})
    if (website){
        throw new Error("Url has already been added before")
    }
    const newWebsite = await Monitor.create({name,url,tenantId})
    return {website: newWebsite}
}



export const getUrl = async(user:UserPayload)=>{
    const email = user.email
    const userCheck = await User.findOne({email})
    if(!userCheck){
        throw new Error("User invalid")
    }
    const tenantId = userCheck.tenantId
    const websites = await Monitor.find({tenantId})
    return {websites}
}

export const pingUrl = async()=>{
    const monitors = await Monitor.find({}).select("url tenantId")
    
}