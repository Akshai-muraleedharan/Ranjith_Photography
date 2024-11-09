import mongoose from 'mongoose'



const cardSchema = mongoose.Schema({
    plan:{
        type:String
    },
    amount:{
        type:String
    },
    features:[]
})

  const cardModel = mongoose.model('card',cardSchema)

  export default cardModel