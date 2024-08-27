const Program = require("../../models/Program")
const Workout = require("../../models/workout")

exports.workoutCreated = async(req,res) =>{
    try{
        const{name, description, amount} = req.body
        const {images ,bannerImage } = req.file

        if(!name , !description, !amount) {
            return res.status(400).json({
                message : "pls fill the program detail"
            })
        }

        const existsWorkout = await Program.findOne({name}) // can create issue here we need to change the reliability on id and name rhater name 
        console.log(existsWorkout)

        // console.log(existsWorkout)
        if(existsWorkout) {
            return res.status(400).json({
                message : "program already exits"
            }) 
        }

        const data = {name , description, amount , images , bannerImage}
        console.log(data) ;
        const workout = await Workout.create(data) ;

        res.status(200).json({
            message : "workout created" ,
            data : workout
        })

    }catch(error){
        res.status(400).json({
            message : "error in creation of workout",
            data :error
        })
    }
}

exports.getSingleWorkout = async(req,res) =>{
    try{
        const {name} = req.body ; 
        // let nname = name.toUpperCase();

        const data = await Program.findOne({name})
        console.log(data)

        res.status(200).json({
            message : "program found" ,
            data : data
        })
    }catch(error){
        res.status(400).json({
            message : "error in single program",
            data :error
        }) 
    }
}
exports.getAllWorkout = async(req,res) =>{
    try{
        const workoutdata = await Workout.find() ;

        // workoutdata.map(item =>{
        //     console.log(item.sessionTimeAvailability.type.map(item2 => {
        //         console.log(item2);
        //     }))
        // })
        
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

exports.deleteWorkout = async(req,res)=>{
    try{

        const {id} = req.params;
        // console.log(id)
    
        await Workout.findByIdAndDelete(id) ;
        res.json({
            message  : "delete success"
        })

    }catch{
        res.status(400).json({
            message : "problem in deleting the workout"
        })
    }
}

exports.updateWorkout = async(req,res) => {
    try{
        const{name, description, sessionTimeAvailability } = req.body

        const {id} = req.params;
        console.log(id) ;
    
        let nname = name.toUpperCase();

        const newdata = {
            name : nname, description, sessionTimeAvailability
        }

        const data = await Workout.findOne({_id : id}) 
        console.log(data)
        const newWorkout = await Workout.findOneAndUpdate({_id:id},newdata,{new :true})
        console.log(newWorkout) ; 

        res.json({
            message  : "update success",
            data : newWorkout
        })


    }catch(error) {
        res.status(400).json({
            message : "problem in deleting the workout"
        })
    }
}