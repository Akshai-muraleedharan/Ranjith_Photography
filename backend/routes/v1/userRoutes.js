import express from 'express'
import { contactAdmin, galleryImage, getCard, searchImage } from '../../controller/userController.js';
import { checkForm } from '../../middleware/joiValidation.js';

const router = express.Router();

router.get('/gallery',galleryImage)
router.post('/contact',checkForm,contactAdmin)
router.get('/search',searchImage)
router.get('/package',getCard)
 



export default router