
import { cloudinaryInstance } from "../config/cloudneryConfig.js"
import gallery from "../model/galleryModel.js"



// admin register






// add photo to gallery
    export const addPhoto = async (req,res,next) => {
        try {
          const imageName = req.file.originalname
        const {imageType} = req.body
        
        const result =  await  cloudinaryInstance.uploader.upload(req.file.path,{ folder: "photography/gallery" })
                          .catch((err)=>{
                            throw err
                          })


        const saveImage = await gallery({
            imageName:imageName,
            publicId:result.public_id,
            imageType:imageType,
            ImageUrl:result.url

           })
           await saveImage.save()

           res.status(201).json({success:true,message:"image successfully updated"})
        } catch (error) {
           next(error) 
        }
    }


    export const deleteImage = async (req,res,next) => {
        
        try {

             const {imageID} = req.params

             const fetchImage = await gallery.findByIdAndDelete(imageID)

            

            const deleteResult = await cloudinaryInstance.uploader.destroy(fetchImage.publicId)
                                    .catch((err)=>{
                                        throw err
                                    })
            const result = deleteResult.result
         

            if(result === "ok"){
                res.status(200).json({success:true,message:"image delete successfully"})
            }
        } catch (error) {
            next(error) 
        }
    }