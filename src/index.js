const express = require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const app =express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use("/users",userRouter)
app.use("/note",noteRouter)
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))




app.get("/",(req,res)=>{
    res.send("hello")
})


mongoose.connect("mongodb+srv://admin:admin@cluster0.2iln5le.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000,()=>{
        console.log("server started on port no 5000")
    })

}).catch((e)=>{
    console.log(e)
})


