import mongoose from 'mongoose'

const tenantSchema = new mongoose.Schema(
    {   
        _id: {type: mongoose.Schema.Types.ObjectId, auto:true},
        name: {type:String, required:true},
        plan: {type:String, enum:['free','pro'], default:'free'},
        createdAt: {type:Date, default:Date.now}
    }
)
export default mongoose.model('Tenant', tenantSchema)