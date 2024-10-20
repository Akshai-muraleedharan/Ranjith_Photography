import mongoose from 'mongoose'


export const dbConnect =async () => {
    try{
       await mongoose.connect(process.env.MONGODB_SECURE)
       console.log("mongodb connected successfully")
    }catch(err){
        throw err
    }
}