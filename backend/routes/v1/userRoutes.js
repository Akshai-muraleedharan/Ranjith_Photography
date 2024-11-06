import express from 'express'
import { contactAdmin, galleryImage, searchImage } from '../../controller/userController.js';

const router = express.Router();

router.get('/gallery',galleryImage)
router.post('/contact',contactAdmin)
router.get('/search',searchImage)




export default router