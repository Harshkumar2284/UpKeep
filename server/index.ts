import express, {type Application} from 'express'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
const app:Application = express()

connectDB()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', (await import('./src/routes/auth.route.js')).default)


const PORT = process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log("Server is running...")
})