const mongoose = require("mongoose") 

const UserSchema = new mongoose.Schema({

    firstname :{
        type : String  ,
        required:true 
    },
    lastname :{
        type : String ,
        required : true
    },
    email: {
        type : String  ,
        required:true 
    },
    password: {
        type : String  ,
        required:true,
        min : 6
    },
    role :{
        type :String  ,
        enum : ["admin" , "user", "instructor"],
        default : "user"
    }  
})

module.exports = mongoose.model("User" , UserSchema)