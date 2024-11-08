import express from 'express'
import { contactAdmin, galleryImage, searchImage } from '../../controller/userController.js';
import { checkForm } from '../../middleware/joiValidation.js';

const router = express.Router();

router.get('/gallery',galleryImage)
router.post('/contact',checkForm,contactAdmin)
router.get('/search',searchImage)
 



export default router