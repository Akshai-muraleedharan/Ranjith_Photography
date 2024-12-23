import backgroundImage from "../model/backgroundImageModel.js"

export const backgroundImageChecker = async (req,res,next) => {
    try {

        const {screenSize} = req.body 

        if(!req.file){
            return res.status(400).json({success:false,message:"file is empty"})
        }

        
        const imageName = req.file.originalname
       
        const imageExist = await backgroundImage.findOne({imageName:imageName}

        )
      

        if(imageExist){
            return res.status(400).json({success:false,message:"This image already upload"})
        }

        const screenTypeExist = await backgroundImage.findOne({screenSize:screenSize})

        if(screenTypeExist){
            return res.status(400).json({success:false,message:`${screenSize}px screen-size already exist`})
        }

        next()
    } catch (error) {
        res.status(error.statusCode || 400).json(error.message || "internal server error")
    }
} 