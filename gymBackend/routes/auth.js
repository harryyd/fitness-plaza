const express = require("express") ;
const router = express.Router() ;
const {login} = require("../controllers/Auth/Login")
const {signup} = require("../controllers/Auth/Signup")
const {test} = require("../controllers/test")

router.post("/login" , login) ; 
router.post("/signup" , signup) ;
router.post("/testing" , test) ; 

module.exports = router 