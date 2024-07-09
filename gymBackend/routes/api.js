const express = require("express") ; 
const {createData} = require("../controllers/Api")

const router = express.Router() 

// router.get("/create" , createData) ;
router.get("/Create" , createData) ;

module.exports = router 