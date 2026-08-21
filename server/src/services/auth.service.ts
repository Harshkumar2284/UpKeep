import Tenant from '../models/tenant.js'
import User from "../models/user.js"
import bcrypt from 'bcrypt'

export const registerUser = async(email:string, password:string, tenantName:string)=>{
    const newTenant = await Tenant.create({name:tenantName})
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = await User.create({email:email, password:hashPassword, tenantId:newTenant._id as any})
    return {user:newUser, tenant:newTenant}
}