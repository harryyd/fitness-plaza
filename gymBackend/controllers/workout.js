const Workout = require("../models/workout")

exports.workoutCreated = async(req,res) =>{
    try{
        const{name , description, sessionTimeAvailability } = req.body

        if(name , description, sessionTimeAvailability.type  , sessionTimeAvailability.timing) {
            return res.status(400).json({
                message : "pls fill the workout detail"
            })
        }

        const existsWorkout = await Workout.findOne({name})
        if(existsWorkout) {
            return req.status(400).json({
                message : "workout already exits"
            }) 
        }

        const data = {name , description, sessionTimeAvailability}
        const workout = await Workout.create(data) ;

        res.status(200).json({
            message : "workout created" ,
            data : workout
        })

    }catch(error){
        res.status(400).json({
            message : "error in workout"
        })
    }
}
exports.getAllWorkout = async(req,res) =>{
    try{
        const workoutdata = await Workout.find() ;

        res.status(200).json({
            message: "success find all data in workout" ,
            data : workoutdata
        })
    }catch(error) {
        res.status(400).json({
            message : "error in get all workout"
        })
    }
}