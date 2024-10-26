import mongoose from 'mongoose'


const bookSchema = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    packageDetail:{
        type:String
    },
    budget:{
        type:Number
    },
    phoneNumber:{
        type:Number
    },
    message:{
        type:String
    }
})

const bookModel = mongoose.model('book',bookSchema);

export default bookModel