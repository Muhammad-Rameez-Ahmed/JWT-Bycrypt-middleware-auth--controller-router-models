const mongoose=require("mongoose")


const NoteSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{timestamps:true})


module.exports= mongoose.model("User",NoteSchema)