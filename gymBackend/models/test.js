const mongoose = require("mongoose") 

const TestSchema = new mongoose.Schema({

    data :{
        type : String  ,
        required:true 
    } 
})

module.exports = mongoose.model("Test" , TestSchema)