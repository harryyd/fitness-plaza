const express = require("express") ; 
const {createData} = require("../controllers/Api");
const {workoutCreated} =require("../controllers/workout") ;

const router = express.Router() 

// router.get("/create" , createData) ;
router.get("/Create" , createData) ;
router.post("/workout" , workoutCreated) ; 

module.exports = router 