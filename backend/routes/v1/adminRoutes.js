import express from 'express'
import { addPhoto, adminLogin, adminLogout,checkAdmin, adminProfile, adminRegister, deleteCard, deleteImage, deletFeature, packageCard, updateBg, updateCard, updateProfile, UpdatePassword, galleryImage } from '../../controller/adminController.js'
import { upload } from '../../middleware/imageUploadMiddleware.js'
import { imageChecker } from '../../middleware/imageFileCheck.js'
import checkError from '../../middleware/loginAndSignupError.js'
import { authAdmin } from '../../middleware/AdminAuth.js'

const router = express.Router() 

router.post('/register',checkError,adminRegister)
router.post('/login',adminLogin)
router.post('/package',authAdmin,packageCard)
router.delete('/package/delete/:cardId',authAdmin,deleteCard)
router.put('/package/update/:cardId',authAdmin,updateCard)
router.put('/package/features/:cardId',authAdmin,deletFeature)
router.get('/profile',authAdmin, adminProfile)
router.get('/check',authAdmin, checkAdmin)
router.get('/gallery',authAdmin, galleryImage)
router.post('/logout',authAdmin, adminLogout)
router.post('/photo',authAdmin,upload.single('image'),imageChecker,addPhoto)
router.put('/photo/update/:imageId',authAdmin,updateBg)
router.put('/profile/update',authAdmin,updateProfile)
router.put('/profile/password',authAdmin,UpdatePassword)
router.delete('/:imageID',authAdmin,deleteImage)

export default router
  