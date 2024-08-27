const mongoose = require("mongoose") ; 
// const User = require("./user") ; 

const bookingSchema = mongoose.Schema({
    firstname :{
        type : String  ,
        required:true 
    },
    lastname :{
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
        type : String  ,
    },
    duration :{
        type : Number  ,
        min : 1 ,
        max : 3,
    },
    workoutSessionType: {
        type :mongoose.Schema.ObjectId ,
        ref : "Workout"
    },
    user : {
        type : mongoose.Schema.ObjectId ,
        ref :  "User" ,
        requried : true
    }
})
module.exports = mongoose.model('Booking', bookingSchema);