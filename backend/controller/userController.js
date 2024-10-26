import gallery from "../model/galleryModel.js";
import bookModel from "../model/userBookModel.js";


  export const galleryImage = async (req,res,next) => {

    try {
       const fetchGallery = await gallery.find().select("-publicId");
       res.setHeader('Content-Disposition', 'inline');
       res.status(200).json({success:true,message:"successfully fetched",data:fetchGallery})
    } catch (error) {
        next(error)
    }
  } 

  export const contactAdmin = async (req,res,next) => {
    try {
     
      const {fullname,email,packageDetail,budget,phoneNumber,message} =req.body


      if(!fullname || !email || !packageDetail || !budget || !phoneNumber   ){
        return res.status(400).json({success:false,message:"All fields required"})
      }

   const userBook =  await bookModel({
        fullname, 
        email,
        packageDetail,
        budget,
        phoneNumber,
        message,
      })

      await userBook.save()
      res.status(200).json({success:true,message:"data successfully added"})

    } catch (error) {
      next(error)
    }
  }