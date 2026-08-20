const express = require('express')
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    withCredentials: true
}))

app.listen(PORT,()=>{
    console.log("Server is running...")
})