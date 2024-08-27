const mongoose = require("mongoose");

const ProgramSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true,
    },
    images : {
        type  : [String] ,
    } , 
    bannerImage : {
        type  :String , 
    }, 
    // instructors: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User"
    // }
})


module.exports = mongoose.model('Program', ProgramSchema);
