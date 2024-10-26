import express from 'express'
import apiRouter from './routes/index.js'
import { dbConnect } from './config/connectDB.js'
import { handleError } from './middleware/errorHandler.js'
import cookieParser from 'cookie-parser'
const app = express()
const port = process.env.PORT || 5001


app.use(express.json())
app.use(cookieParser())
app.use(handleError)
// db connect succesfully
dbConnect()

app.use('/api',apiRouter)



app.listen(port,()=>{
    console.log(`server connected on port ${port}`)
})  