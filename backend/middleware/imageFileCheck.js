import gallery from "../model/galleryModel.js"


export const imageChecker = async (req,res,next) => {
        try {

            const imageName = req.file.originalname

            if(!req.file){
                return res.status(400).json({success:false,message:"file is empty"})
            }
           
            const imageExist = await gallery.findOne({imageName:imageName})

            if(imageExist){
                return res.status(400).json({success:false,message:"This image already upload"})
            }

            next()
        } catch (error) {
            res.status(error.statusCode || 400).json(error.message || "internal server error")
        }
} 