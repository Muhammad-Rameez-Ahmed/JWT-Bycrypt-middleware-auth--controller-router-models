const mongoose=require("mongoose")


const UserSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

},{timestamps:true})


mongoose.models = {}
module.exports= mongoose.model("User",UserSchema)