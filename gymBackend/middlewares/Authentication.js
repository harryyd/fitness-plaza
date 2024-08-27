// 1.auth middleware 
// 2 isUser 
// 3 isInstructor --some design thing need to be update 
// 4 isAdmin



const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config()

exports.auth = (req, res, next) => {
    try {
        //extract jwt token 
        // other ways to do so 
        const token = req.body.token || req.cookies.token;
        console.log(token)

        if (!token) {
            res.status(400).json({
                message: "token not found please login "
            })
        }

        //verfi the token 
        try {
            const decode = jwt.verify(token ,process.env.JWT_SECRET ) 
            console.log(decode) ; 

            req.user = decode  ; 

        } catch(error) {
            res.status(400).json({
                message: "token not found "
            })
        }

        next() ; 
    }
    catch(error) {
        res.status(400).json({
            message  : "problem in verifying the token in test" 
        })
    }
}


exports.isUser = (req, res, next) => {
    try{
        // console.log(req.user.role)
        if(req.user.role != "user") {
            res.status(400).json({
                message: "this is protected route for user"
            })
        }
    }catch(error){
        res.status(400).json({
            message: "problem in student route"
        })
    }
    next() ;
}


exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role != "admin") {
            res.status(400).json({
                message: "this is protected route for admin"
            })
        }
    }catch(error){
        res.status(400).json({
            message: "problem in student route"
        })
    }
    next() ;
}
