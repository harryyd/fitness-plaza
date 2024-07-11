const mongoose = require("mongoose") ;
const express = require("express") ;

exports.booking = () =>{
    try{
        const {name ,email ,address , } = req.body
    }catch(error) {
        return res.json({
            message  : " problem in booking "
        })
    }
}