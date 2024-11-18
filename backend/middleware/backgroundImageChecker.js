import backgroundImage from "../model/backgroundImageModel.js"

export const backgroundImageChecker = async (req,res,next) => {
    try {

        const imageName = req.file.originalname

        if(!req.file){
            return res.status(400).json({success:false,message:"file is empty"})
        }
       
        const imageExist = await backgroundImage.findOne({imageName:imageName})

        if(imageExist){
            return res.status(400).json({success:false,message:"This image already upload"})
        }

        next()
    } catch (error) {
        res.status(error.statusCode || 400).json(error.message || "internal server error")
    }
} 