const mongoose = require("mongoose") ; 
// const User = require("./user") ; 

const bookingSchema = mongoose.Schema({
    name :{
        type : String  ,
        required:true 
    },
    email: {
        type : String  ,
        required:true 
    },
    address : {
        type : String  ,
    },
    bookingDate :{
        type : Date ,
        required : true
    },
    sessionTime : {
        type : Number  ,
    } ,
    duration :{
        type : Number  ,
    },
    workoutSessionType: {
        type : String,
    },
    user : {
        type : mongoose.Schema.ObjectId ,
        ref :  "User" ,
        requried : true
    }
})
module.exports = mongoose.model('Booking', bookingSchema);