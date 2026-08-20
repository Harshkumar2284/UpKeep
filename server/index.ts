import express, {type Application} from 'express'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
dotenv.config()
const app:Application = express()

connectDB()

app.use(express.json())


const PORT = process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log("Server is running...")
})