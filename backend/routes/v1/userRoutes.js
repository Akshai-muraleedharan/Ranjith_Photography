import express from 'express'
import { contactAdmin, galleryImage } from '../../controller/userController.js';

const router = express.Router();

router.get('/gallery',galleryImage)
router.post('/contact',contactAdmin)



export default router