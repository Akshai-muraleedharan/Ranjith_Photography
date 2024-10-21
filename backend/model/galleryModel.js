import mongoose from 'mongoose'



const gallerySchema = mongoose.Schema({
    imageName:{
        type:String,
        unique:true
    },
    publicId:{
        type:String
    },
    imageType:{
        type:String,
        required:true
    },
    ImageUrl:{
        type:String
    }
})

const gallery = mongoose.model('gallery',gallerySchema)

export default gallery