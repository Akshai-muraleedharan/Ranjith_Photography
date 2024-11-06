import express from 'express'
import apiRouter from './routes/index.js'
import { dbConnect } from './config/connectDB.js'
import { handleError } from './middleware/errorHandler.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5001

 
app.use(express.json())
app.use(cookieParser())
app.use(handleError)

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials:true
}))

// db connect succesfully
dbConnect()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api',apiRouter)



app.listen(port,()=>{
    console.log(`server connected on port ${port}`)
})  