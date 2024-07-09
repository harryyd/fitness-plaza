
const express = require("express") ; 
const axios = require("axios") ;  
const Item = require("../models/workout")

exports.createData = async(req,res) =>{
    try{
        return res.json({
            message : "creating"
        })

    }catch(error){
        res.status(400).json({
            message : "fecth error at create data"
        })
    }
}

// export const 
// module.exports = createData ; 