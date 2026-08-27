import mongoose, { Schema } from 'mongoose'
 const monitorSchema = new Schema({
    name:{type:String , required:true},
    url:{type:String , required:true},
    tenantId:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'Tenant'}
 })
 export default mongoose.model("Monitor", monitorSchema)