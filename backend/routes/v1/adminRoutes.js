import express from 'express'
import { addPhoto, adminLogin, adminLogout, adminProfile, adminRegister, deleteImage, updateBg } from '../../controller/adminController.js'
import { upload } from '../../middleware/imageUploadMiddleware.js'
import { imageChecker } from '../../middleware/imageFileCheck.js'
import checkError from '../../middleware/loginAndSignupError.js'
import { authAdmin } from '../../middleware/AdminAuth.js'

const router = express.Router()

router.post('/register',checkError,adminRegister)
router.post('/login',adminLogin)
router.get('/profile',authAdmin, adminProfile)
router.post('/logout',authAdmin, adminLogout)
router.post('/photo',authAdmin,upload.single('image'),imageChecker,addPhoto)
router.put('/photo/update/:imageId',authAdmin,updateBg)
router.delete('/:imageID',authAdmin,deleteImage)

export default router
  