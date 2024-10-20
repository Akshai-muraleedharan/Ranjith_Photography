

export const imageChecker = (req,res,next) => {
        try {
            if(!req.file){
                return res.status(400).json({success:false,message:"file is empty"})
            }
            console.log(req.file)

            next()
        } catch (error) {
            res.status(error.statusCode || 400).json(error.message || "internal server error")
        }
} 