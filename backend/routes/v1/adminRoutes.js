import express from 'express'
import { addPhoto } from '../../controller/adminController.js'
import { upload } from '../../middleware/imageUploadMiddleware.js'
import { imageChecker } from '../../middleware/imageFileCheck.js'

const router = express.Router()


router.post('/photo',upload.single('image'),imageChecker,addPhoto)

export default router
