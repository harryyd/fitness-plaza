const express = require("express") ;
const router = express.Router() ;
const {login} = require("../controllers/Auth/Login")
const {signup} = require("../controllers/Auth/Signup")

router.post("/login" , login) ; 
router.post("/signup" , signup)

module.exports = router 