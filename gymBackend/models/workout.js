const mongoose  = require("mongoose") ; 

const WorkoutSchema = mongoose.Schema({
    name : {
        type : String ,
        required : true 
    },
    description : {
        type : String ,
        required : true 
    } ,
    instructors :{
        type : mongoose.Schema.ObjectId ,
        ref : "User" 
    }
})
module.exports = mongoose.model('Workout', WorkoutSchema);