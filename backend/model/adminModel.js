import mongoose from 'mongoose'


const adminSchema = mongoose.Schema({
    username:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true,  
    },
    password:{
        type:String,
        requird:true 
    }
})


const admin = mongoose.model('register',adminSchema)

export default admin