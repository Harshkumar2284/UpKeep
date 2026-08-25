import Tenant from '../models/tenant.js'
import User from "../models/user.js"
import bcrypt from 'bcrypt'

export const registerUser = async(email:string, password:string, tenantName:string)=>{
    const check = await User.findOne({email})
    if(check){
        throw new Error("An account with this username already exists")
    }
    const newTenant = await Tenant.create({name:tenantName})
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = await User.create({email:email, password:hashPassword, tenantId:newTenant._id as any})
    return {user:newUser, tenant:newTenant}
}
export const loginUser = async(email:string, password:string)=>{
    const check = await User.findOne({email})
    if(!check){
        throw new Error("Account does not exist")
    }

}

// LEARN FLOW BTW SERVICE CONTROLLER AND MIDDLEWARE LAYER