import express from 'express'
import adminRoute from './adminRoutes.js'
import userRoute from './userRoutes.js'
const v1Router = express.Router()


v1Router.use('/admin',adminRoute);
v1Router.use('/user',userRoute)
export default v1Router