import express from 'express'
import addPhoto from './adminRoutes.js'
const v1Router = express.Router()


v1Router.use('/admin',addPhoto);

export default v1Router