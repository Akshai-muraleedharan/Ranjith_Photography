import backgroundImage from "../model/backgroundImageModel.js";
import cardModel from "../model/cardModel.js";
import gallery from "../model/galleryModel.js";
import bookModel from "../model/userBookModel.js";


  export const galleryImage = async (req,res,next) => {

    try {

      
       const fetchGallery = await gallery.find().select("-publicId");
       res.setHeader('Content-Disposition', 'inline');
       res.status(200).json({success:true,message:"successfully fetched",data:fetchGallery,dataLength:fetchGallery.length})
    } catch (error) {
        next(error)
    } 
  } 

  export const getBackgroundImage =async (req,res,next) => {
    try {
     
      const fetchGallery = await backgroundImage.find();
     
      res.status(200).json({success:true,message:"successfully fetched",data:fetchGallery,dataLength:fetchGallery.length})
    } catch (error) {
      next(error)
    }
  }

  export const contactAdmin = async (req,res,next) => {
    try {
     
      const {fullname,email,phoneNumber,message} =req.body


      if(!fullname || !email ||   !phoneNumber   ){
        return res.status(400).json({success:false,message:"All fields required"})
      }

   const userBook =  await bookModel({
        fullname, 
        email,
        phoneNumber, 
        message, 
      })

      await userBook.save()
      res.status(200).json({success:true,message:"data successfully added"})
 
    } catch (error) {
      next(error)
    }
  }


  export const searchImage = async (req,res,next) => {
    try {

      const {image} = req.query

    
    
      const fetchSearchGallery = await gallery.find({imageType:image}).select("-publicId");
      res.status(200).json({success:true,message:"data successfully fetched",data:fetchSearchGallery,dataLength:fetchSearchGallery.length})
     
       
         
      
      
    } catch (error) {
      next(error)
    }
  }


  
export const getCard = async (req,res,next) => {
  try {
      const fetchCard = await cardModel.find()

      res.status(200).json({success:true,message:"data fetched",data:fetchCard})
  } catch (error) {
      next(error)
  }
}