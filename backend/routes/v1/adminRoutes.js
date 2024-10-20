import express from 'express'
import { addPhoto } from '../../controller/adminController.js'

const router = express.Router()


router.get('/photo',addPhoto)

export default router
