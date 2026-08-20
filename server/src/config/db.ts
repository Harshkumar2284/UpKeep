import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const mongoUri = process.env.MONGODB_URI
        if(!mongoUri){
            throw new Error("DB URI is not defined in environment variables")
        }
        const connection = await mongoose.connect(mongoUri)
        console.log("MongoDB connected")
    }catch(err){
        console.error("Error:",err)
    }
}
export default connectDB