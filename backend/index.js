import express from 'express'
import apiRouter from './routes/index.js'
import { dbConnect } from './config/connectDB.js'
const app = express()
const port = process.env.PORT || 5001


app.use(express.json())



app.use('/api',apiRouter)

// db connect succesfully
dbConnect()

app.listen(port,()=>{
    console.log(`server connected on port ${port}`)
}) 