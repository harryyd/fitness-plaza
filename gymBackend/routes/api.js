const express = require("express") ; 
const {createData} = require("../controllers/Api");
const {workoutCreated , getAllWorkout, deleteWorkout ,getSingleWorkout ,updateWorkout} =require("../controllers/Workout/workout") ;
const {auth , isAdmin , isUser} = require("../middlewares/Authentication")

const router = express.Router() 

// router.get("/create" , createData) ;
router.get("/Create" , auth , isAdmin, createData) ;
router.post("/createWorkout" ,  workoutCreated) ; 
router.get("/getAllWorkout" , getAllWorkout) ;
router.delete(`/deleteWorkout/:id` , auth , isAdmin, deleteWorkout) ; 
router.post("/getSingleWorkout" , auth , isAdmin, getSingleWorkout) ;
router.patch("/updateWorkout/:id" , auth , isAdmin, updateWorkout) ;

module.exports = router 