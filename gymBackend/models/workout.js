const mongoose  = require("mongoose") ; 

const WorkoutSchema = mongoose.Schema({
    name : {
        type : String ,
        unique :true,
        required : true 
    },
    description : {
        type : String ,
        required : true 
    } ,
    sessionTimeAvailability: [{
        type :{type :String , required:true}, 
        timing :{type : Number , required:true},
        sessionDuration : {type :Number , default : 1}
    }],
    instructors :{
        type : mongoose.Schema.ObjectId ,
        ref : "User" 
    }
})

// WorkoutSchema.pre("save" ,(next) =>{
//    this.name = this.name.toUpperCase()  ;
//    next() ;
// })
module.exports = mongoose.model('Workout', WorkoutSchema);