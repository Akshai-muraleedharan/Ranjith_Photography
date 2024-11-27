import mongoose from 'mongoose'


const backgroundImageSchema = mongoose.Schema({
    imageName:{
        type:String,
        unique:true
    },

    publicId:{
        type:String
    },
   
    ImageUrl:{
        type:String
    },

    bgType:{
        type:Boolean,
        default:false
    },

    screenSize:{
        type:String,
        
    }
})

const backgroundImage = mongoose.model('background',backgroundImageSchema)

export default backgroundImage