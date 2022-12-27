const userModel=require("../models/user");
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY="NOTESAPI"



const signup = async(req,res)=>{
    // Eexisting user
    // Hash password
    // user creation
    // token generate


    const { password,username, email} = req.body;
    try {
         // Eexisting user
        const existingUser =await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"user already exist"})
        }
         // Hash password
        const hashPassword =await bcrypt.hash(password,10)

        // user creation
        const result = await userModel.create({
            email:email,
            password:hashPassword,
            username:username
        });

        const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)
        res.status(201).json({user:result,token:token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})   
    }
}

const signin = async(req,res)=>{
    const {password,email}=req.body;
    try {
         // Eexisting user
         const existingUser =await userModel.findOne({email:email});
         if(!existingUser){
             return res.status(404).json({message:"user not found"})
         }

         const matchPassword= await bcrypt.compare(password,existingUser.password)
         if(!matchPassword){
            return res.status(400).json({message:"Invalid credentials"});

         }

         const token = jwt.sign({email:existingUser.email,id:existingUser. _id},SECRET_KEY)
         res.status(201).json({user: existingUser,token:token})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})
    }

}

module.exports={signup,signin};